// Service Worker para MMM Chile PWA
// Versión del cache - incrementar para forzar actualización
const CACHE_VERSION = "v1.0.0";
const STATIC_CACHE = `mmm-chile-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `mmm-chile-dynamic-${CACHE_VERSION}`;
const IMAGES_CACHE = `mmm-chile-images-${CACHE_VERSION}`;
const API_CACHE = `mmm-chile-api-${CACHE_VERSION}`;

// Configuración para manejo de storage quota
const CACHE_SIZE_LIMITS = {
  [STATIC_CACHE]: 50 * 1024 * 1024, // 50MB
  [DYNAMIC_CACHE]: 100 * 1024 * 1024, // 100MB
  [IMAGES_CACHE]: 200 * 1024 * 1024, // 200MB
  [API_CACHE]: 10 * 1024 * 1024, // 10MB
};

// Timeouts para diferentes tipos de requests
const NETWORK_TIMEOUTS = {
  fast: 3000, // 3 segundos para recursos críticos
  normal: 10000, // 10 segundos para contenido normal
  slow: 30000, // 30 segundos para contenido no crítico
};

// Recursos estáticos para pre-cachear
const STATIC_ASSETS = [
  "/",
  "/offline",
  "/site.webmanifest",
  "/favicon.ico",
  "/favicon.svg",
  "/favicon-96x96.png",
  "/apple-touch-icon.png",
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
  // Páginas principales
  "/eventos",
  "/iglesias",
  "/doctrina",
  "/contacto",
  "/radio",
  "/aniversario",
  // Imágenes críticas
  "/images/logo.png",
  "/images/lema.png",
  // CSS y JS se manejan automáticamente por Next.js
];

// URLs que requieren conexión (no cachear)
const NETWORK_ONLY_URLS = [
  "/api/log-error",
  "https://www.google-analytics.com",
  "https://vitals.vercel-analytics.com",
  "https://s38.radiolize.com", // Radio stream
];

// URLs de APIs externas para cache con network-first
const API_URLS = ["https://www.google.com/maps", "https://maps.google.com"];

// Función para verificar y manejar storage quota
async function checkStorageQuota() {
  if ("storage" in navigator && "estimate" in navigator.storage) {
    try {
      const estimate = await navigator.storage.estimate();
      const usage = estimate.usage || 0;
      const quota = estimate.quota || 0;
      const percentageUsed = quota > 0 ? (usage / quota) * 100 : 0;

      console.log(
        `[SW] Storage usage: ${(usage / 1024 / 1024).toFixed(2)}MB / ${(
          quota /
          1024 /
          1024
        ).toFixed(2)}MB (${percentageUsed.toFixed(1)}%)`
      );

      // Si se usa más del 80% del storage, limpiar caches antiguos
      if (percentageUsed > 80) {
        await cleanOldCaches();
      }

      return { usage, quota, percentageUsed };
    } catch (error) {
      console.error("[SW] Error checking storage quota:", error);
      return null;
    }
  }
  return null;
}

// Función para limpiar caches antiguos y mantener tamaños
async function cleanOldCaches() {
  try {
    const cacheNames = await caches.keys();

    // Limpiar caches de versiones anteriores
    const oldCaches = cacheNames.filter(
      (name) => name.startsWith("mmm-chile-") && !name.includes(CACHE_VERSION)
    );

    await Promise.all(
      oldCaches.map((cacheName) => {
        console.log("[SW] Deleting old cache:", cacheName);
        return caches.delete(cacheName);
      })
    );

    // Verificar tamaño de caches actuales y limpiar si es necesario
    for (const cacheName of Object.keys(CACHE_SIZE_LIMITS)) {
      await enforceMaxCacheSize(cacheName, CACHE_SIZE_LIMITS[cacheName]);
    }
  } catch (error) {
    console.error("[SW] Error cleaning old caches:", error);
  }
}

// Función para limitar el tamaño de un cache
async function enforceMaxCacheSize(cacheName, maxSize) {
  try {
    const cache = await caches.open(cacheName);
    const requests = await cache.keys();

    let totalSize = 0;
    const entries = [];

    // Calcular tamaño total (aproximado)
    for (const request of requests) {
      const response = await cache.match(request);
      if (response) {
        const blob = await response.blob();
        const size = blob.size;
        totalSize += size;
        entries.push({
          request,
          size,
          timestamp: new Date(
            response.headers.get("date") || Date.now()
          ).getTime(),
        });
      }
    }

    if (totalSize > maxSize) {
      // Ordenar por timestamp (más antiguos primero)
      entries.sort((a, b) => a.timestamp - b.timestamp);

      // Eliminar entradas hasta estar bajo el límite
      let currentSize = totalSize;
      for (const entry of entries) {
        if (currentSize <= maxSize) break;

        await cache.delete(entry.request);
        currentSize -= entry.size;
        console.log(
          `[SW] Removed ${entry.request.url} from cache (${entry.size} bytes)`
        );
      }
    }
  } catch (error) {
    console.error(`[SW] Error enforcing cache size for ${cacheName}:`, error);
  }
}

// Función para fetch con timeout
async function fetchWithTimeout(request, timeout) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(request, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === "AbortError") {
      throw new Error("Request timeout");
    }
    throw error;
  }
}

// Instalación del Service Worker
self.addEventListener("install", (event) => {
  console.log("[SW] Installing service worker");

  event.waitUntil(
    Promise.all([
      // Precachear recursos estáticos
      caches.open(STATIC_CACHE).then((cache) => {
        console.log("[SW] Precaching static assets");
        return cache.addAll(STATIC_ASSETS);
      }),
      // Verificar storage quota
      checkStorageQuota(),
      // Solicitar storage persistente si está disponible
      self.registration.navigationPreload &&
        self.registration.navigationPreload.enable(),
    ])
      .then(() => {
        console.log("[SW] Installation completed");
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error("[SW] Installation failed:", error);
        // Intentar instalación con recursos mínimos
        return caches.open(STATIC_CACHE).then((cache) => {
          return cache.addAll(["/", "/offline"]);
        });
      })
  );
});

// Activación del Service Worker
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating service worker");

  event.waitUntil(
    Promise.all([
      // Limpiar caches antiguos
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (
              cacheName.startsWith("mmm-chile-") &&
              !cacheName.includes(CACHE_VERSION)
            ) {
              console.log("[SW] Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Tomar control de todas las páginas
      self.clients.claim(),
    ])
  );
});

// Interceptar requests
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Ignorar requests no GET
  if (request.method !== "GET") {
    return;
  }

  // Ignorar extensiones del navegador
  if (
    url.protocol === "chrome-extension:" ||
    url.protocol === "moz-extension:"
  ) {
    return;
  }

  // Network-only URLs
  if (NETWORK_ONLY_URLS.some((pattern) => request.url.includes(pattern))) {
    return; // Dejar que pase por la red sin intervenir
  }

  event.respondWith(handleRequest(request));
});

// Manejar diferentes tipos de requests
async function handleRequest(request) {
  const url = new URL(request.url);

  try {
    // 1. Recursos estáticos (CSS, JS, fonts) - Cache First
    if (
      url.pathname.includes("/_next/static/") ||
      url.pathname.match(/\.(css|js|woff|woff2|ttf|eot)$/)
    ) {
      return await cacheFirst(request, STATIC_CACHE);
    }

    // 2. Imágenes - Cache First con fallback
    if (url.pathname.match(/\.(png|jpg|jpeg|gif|svg|webp|avif|ico)$/)) {
      return await cacheFirstWithFallback(request, IMAGES_CACHE);
    }

    // 3. APIs externas - Network First
    if (API_URLS.some((pattern) => request.url.includes(pattern))) {
      return await networkFirst(request, API_CACHE);
    }

    // 4. Páginas HTML - Network First con offline fallback
    if (request.headers.get("accept")?.includes("text/html")) {
      return await htmlNetworkFirst(request);
    }

    // 5. Otros recursos - Network First
    return await networkFirst(request, DYNAMIC_CACHE);
  } catch (error) {
    console.error("[SW] Request failed:", error);

    // Fallback para páginas HTML
    if (request.headers.get("accept")?.includes("text/html")) {
      return await getOfflinePage();
    }

    // Para otros recursos, devolver respuesta básica
    return new Response("Recurso no disponible offline", {
      status: 503,
      statusText: "Service Unavailable",
    });
  }
}

// Estrategia Cache First con timeouts y mejor manejo de errores
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  if (cachedResponse) {
    console.log("[SW] Cache hit:", request.url);
    // Verificar si la respuesta cacheada está expirada
    const cacheDate = new Date(cachedResponse.headers.get("date") || 0);
    const now = new Date();
    const ageInHours = (now.getTime() - cacheDate.getTime()) / (1000 * 60 * 60);

    // Si es muy antigua (>24h para recursos estáticos), intentar actualizar en background
    if (ageInHours > 24) {
      console.log("[SW] Cached response is old, updating in background");
      updateCacheInBackground(request, cache);
    }

    return cachedResponse;
  }

  console.log("[SW] Cache miss, fetching:", request.url);

  try {
    const networkResponse = await fetchWithTimeout(
      request,
      NETWORK_TIMEOUTS.normal
    );

    if (networkResponse.ok) {
      // Verificar tamaño antes de cachear
      const contentLength = networkResponse.headers.get("content-length");
      const size = contentLength ? parseInt(contentLength, 10) : 0;

      // No cachear archivos muy grandes (>50MB)
      if (size < 50 * 1024 * 1024) {
        await safelyCacheResponse(cache, request, networkResponse.clone());
      } else {
        console.warn("[SW] Response too large to cache:", request.url, size);
      }
    }

    return networkResponse;
  } catch (error) {
    console.error("[SW] Network request failed:", request.url, error);

    // Si hay error de red y no tenemos cache, devolver error personalizado
    throw new Error(`Network failed and no cache available for ${request.url}`);
  }
}

// Función para actualizar cache en background
async function updateCacheInBackground(request, cache) {
  try {
    const networkResponse = await fetchWithTimeout(
      request,
      NETWORK_TIMEOUTS.fast
    );
    if (networkResponse.ok) {
      await safelyCacheResponse(cache, request, networkResponse);
      console.log("[SW] Background cache update successful:", request.url);
    }
  } catch (error) {
    console.log(
      "[SW] Background cache update failed:",
      request.url,
      error.message
    );
  }
}

// Función para cachear respuesta de forma segura
async function safelyCacheResponse(cache, request, response) {
  try {
    await cache.put(request, response);
  } catch (error) {
    console.error("[SW] Failed to cache response:", error);

    // Si falla por storage quota, limpiar cache y reintentar
    if (error.name === "QuotaExceededError") {
      console.log("[SW] Quota exceeded, cleaning cache...");
      await cleanOldCaches();

      try {
        await cache.put(request, response.clone());
      } catch (retryError) {
        console.error("[SW] Failed to cache even after cleanup:", retryError);
      }
    }
  }
}

// Estrategia Cache First con fallback para imágenes
async function cacheFirstWithFallback(request, cacheName) {
  try {
    return await cacheFirst(request, cacheName);
  } catch (error) {
    console.log("[SW] Image fallback for:", request.url);

    // Retornar imagen placeholder SVG
    const fallbackSVG = `
      <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#f3f4f6"/>
        <text x="200" y="150" text-anchor="middle" fill="#9ca3af" font-family="Arial" font-size="16">
          Imagen no disponible
        </text>
      </svg>
    `;

    return new Response(fallbackSVG, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "no-cache",
      },
    });
  }
}

// Estrategia Network First
async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName);

  try {
    console.log("[SW] Network first:", request.url);
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log("[SW] Network failed, trying cache:", request.url);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    throw error;
  }
}

// Estrategia Network First para HTML con offline fallback
async function htmlNetworkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE);

  try {
    console.log("[SW] HTML Network first:", request.url);
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.log("[SW] HTML Network failed, trying cache:", request.url);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // Fallback a página offline
    return await getOfflinePage();
  }
}

// Obtener página offline
async function getOfflinePage() {
  const cache = await caches.open(STATIC_CACHE);
  const offlinePage = await cache.match("/offline");

  if (offlinePage) {
    return offlinePage;
  }

  // Fallback básico si no existe página offline
  return new Response(
    `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sin conexión - MMM Chile</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #3d98f4, #0c2a44);
          margin: 0;
          padding: 20px;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .container {
          text-align: center;
          max-width: 400px;
          background: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 1rem;
          backdrop-filter: blur(10px);
        }
        h1 { margin-bottom: 1rem; }
        p { margin-bottom: 1.5rem; line-height: 1.6; }
        button {
          background: #3d98f4;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover { background: #2577d1; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Sin conexión a internet</h1>
        <p>No tienes conexión a internet. Algunas funciones pueden no estar disponibles.</p>
        <button onclick="window.location.reload()">Intentar nuevamente</button>
      </div>
    </body>
    </html>
  `,
    {
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-cache",
      },
    }
  );
}

// Mensaje de actualización disponible
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    console.log("[SW] Skipping waiting...");
    self.skipWaiting();
  }
});

// Background sync para acciones offline
self.addEventListener("sync", (event) => {
  console.log("[SW] Background sync:", event.tag);

  if (event.tag === "contact-sync") {
    event.waitUntil(syncContactForms());
  }
});

// Función para sincronizar formularios (futura implementación)
async function syncContactForms() {
  // Aquí se implementaría la sincronización de formularios
  // que se guardaron mientras estaba offline
  console.log("[SW] Syncing contact forms...");
}

// Push notifications (preparado para futuro)
self.addEventListener("push", (event) => {
  console.log("[SW] Push received");

  const options = {
    body: event.data ? event.data.text() : "Nueva notificación de MMM Chile",
    icon: "/web-app-manifest-192x192.png",
    badge: "/favicon-96x96.png",
    vibrate: [200, 100, 200],
    data: {
      url: "/",
    },
    actions: [
      {
        action: "open",
        title: "Abrir",
        icon: "/favicon-96x96.png",
      },
      {
        action: "close",
        title: "Cerrar",
      },
    ],
  };

  event.waitUntil(self.registration.showNotification("MMM Chile", options));
});

// Manejar clics en notificaciones
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "open") {
    event.waitUntil(clients.openWindow(event.notification.data.url || "/"));
  }
});

console.log("[SW] Service Worker loaded successfully");
