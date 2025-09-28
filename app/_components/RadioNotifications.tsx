"use client";
import React, { useState, useEffect } from "react";
import { Bell, BellOff } from "lucide-react";

const RadioNotifications = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [permission, setPermission] =
    useState<NotificationPermission>("default");
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Verificar si las notificaciones están soportadas
    if ("Notification" in window) {
      setIsSupported(true);
      setPermission(Notification.permission);
      setIsEnabled(Notification.permission === "granted");
    }
  }, []);

  const requestPermission = async () => {
    if (!isSupported) return;

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      setIsEnabled(result === "granted");

      if (result === "granted") {
        // Mostrar notificación de prueba
        new Notification("Radio Bethel Chile", {
          body: "¡Notificaciones activadas! Te mantendremos informado sobre eventos y programas especiales.",
          icon: "/web-app-manifest-192x192.png",
          badge: "/favicon-96x96.png",
          tag: "radio-notifications-enabled",
        });
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  const sendTestNotification = () => {
    if (!isEnabled) return;

    new Notification("Radio Bethel Chile - Prueba", {
      body: "Esta es una notificación de prueba. ¡Las notificaciones están funcionando correctamente!",
      icon: "/web-app-manifest-192x192.png",
      badge: "/favicon-96x96.png",
      tag: "radio-test-notification",
    });
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Notificaciones</h3>
            <p className="text-gray-300 text-sm">
              Mantente informado sobre eventos y programas especiales
            </p>
          </div>
        </div>
        <div
          className={`w-3 h-3 rounded-full ${
            isEnabled ? "bg-green-500" : "bg-gray-500"
          }`}
        />
      </div>

      <div className="space-y-3">
        {permission === "default" && (
          <button
            onClick={requestPermission}
            className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
          >
            <Bell className="w-4 h-4" />
            Activar Notificaciones
          </button>
        )}

        {permission === "denied" && (
          <div className="text-center">
            <BellOff className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <p className="text-red-400 text-sm">
              Las notificaciones están bloqueadas. Por favor, habilítalas en la
              configuración de tu navegador.
            </p>
          </div>
        )}

        {isEnabled && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-green-400">✓ Notificaciones activadas</span>
              <button
                onClick={sendTestNotification}
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Probar
              </button>
            </div>
            <div className="text-xs text-gray-400">
              Recibirás notificaciones sobre:
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>Eventos especiales y cultos</li>
                <li>Programas destacados de la radio</li>
                <li>Actualizaciones importantes</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioNotifications;
