# Radio Bethel Chile - PWA

Una Progressive Web App (PWA) enfocada en la radio cristiana, diseñada para funcionar como una aplicación móvil nativa.

## 🎯 Características Principales

### 📱 Interfaz de App Móvil

- **Navegación Bottom Bar**: Navegación tipo app móvil con iconos y etiquetas
- **Mini Player Persistente**: Widget de radio que se mantiene visible mientras navegas
- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop

### 🎵 Funcionalidades de Radio

- **Reproducción en Vivo**: Stream de radio cristiana las 24 horas
- **Controles de Audio**: Play/Pause, control de volumen, mute
- **Programación**: Horarios completos de programas semanales
- **Estado de Conexión**: Indicadores de calidad de conexión

### 🔔 Notificaciones

- **Push Notifications**: Notificaciones sobre eventos y programas especiales
- **Permisos Inteligentes**: Solicitud de permisos con explicación clara
- **Notificaciones de Prueba**: Sistema para verificar funcionamiento

### 📲 Instalación PWA

- **Prompt de Instalación**: Invitación automática a instalar la app
- **Manifest Optimizado**: Configuración específica para radio
- **Shortcuts**: Accesos rápidos a funciones principales
- **Offline Support**: Funciona sin conexión a internet

## 🚀 Cómo Usar

### Acceso a la PWA de Radio

1. Visita `/radio-pwa` para la versión optimizada para PWA
2. En móvil, verás la navegación tipo app en la parte inferior
3. El mini player de radio se mantiene visible mientras navegas

### Instalación como App

1. En móvil, aparecerá un prompt para instalar la app
2. Acepta la instalación para agregar a tu pantalla de inicio
3. La app funcionará como una aplicación nativa

### Navegación

- **Inicio**: Página principal con información general
- **Radio**: Reproductor de radio en vivo con programación
- **Eventos**: Próximos eventos y actividades
- **Iglesias**: Ubicaciones de iglesias cercanas
- **Doctrina**: Información doctrinal y creencias
- **Oficiales**: Directivos internacionales del MMM
- **Contacto**: Información de contacto

## 🛠️ Componentes Técnicos

### Hooks Personalizados

- `usePWAContext`: Detecta si estamos en modo PWA y móvil
- `usePWA`: Maneja instalación y estado de la PWA

### Componentes Principales

- `MobileAppNavigation`: Navegación bottom bar para móvil
- `RadioWidget`: Mini player persistente de radio
- `RadioNotifications`: Sistema de notificaciones
- `RadioPWAInstall`: Prompt de instalación específico para radio
- `RadioConnectionStatus`: Indicadores de estado de conexión

### Archivos de Configuración

- `radio-app.webmanifest`: Manifest específico para la radio PWA
- `sw.js`: Service Worker actualizado con soporte para radio

## 📱 Características Móviles

### Navegación Tipo App

- Iconos intuitivos para cada sección
- Indicador de "en vivo" para la radio
- Transiciones suaves entre secciones
- Accesibilidad completa

### Mini Player

- Se mantiene visible mientras navegas
- Controles básicos de reproducción
- Control de volumen
- Botón para maximizar/minimizar

### Notificaciones

- Solicitud de permisos con explicación
- Notificaciones sobre eventos importantes
- Sistema de prueba para verificar funcionamiento

## 🔧 Configuración

### Variables de Entorno

```env
NODE_ENV=production
```

### Dependencias

- Next.js 14+
- React 18+
- Tailwind CSS
- Lucide React (iconos)

## 📊 Métricas y Monitoreo

### Service Worker

- Cache inteligente para recursos estáticos
- Estrategias de cache por tipo de contenido
- Limpieza automática de cache antiguo
- Soporte offline completo

### Performance

- Lazy loading de componentes
- Optimización de imágenes
- Compresión de assets
- Caching agresivo

## 🎨 Diseño

### Colores

- **Primario**: Verde esmeralda (#10b981)
- **Secundario**: Azul oscuro (#0c2a44)
- **Fondo**: Gradiente azul-gris
- **Texto**: Blanco con transparencias

### Tipografía

- **Fuente Principal**: Geist Sans
- **Fuente Mono**: Geist Mono
- **Tamaños**: Responsivos con Tailwind

## 🚀 Despliegue

### Build

```bash
npm run build
```

### Start

```bash
npm start
```

### Desarrollo

```bash
npm run dev
```

## 📱 Compatibilidad

### Navegadores Soportados

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Dispositivos

- iOS 13+
- Android 8+
- Desktop (Chrome, Firefox, Safari, Edge)

## 🔮 Próximas Características

- [ ] Sincronización de favoritos
- [ ] Historial de reproducción
- [ ] Temas personalizables
- [ ] Integración con redes sociales
- [ ] Chat en vivo durante transmisiones
- [ ] Descarga de podcasts
- [ ] Integración con calendario

## 📞 Soporte

Para soporte técnico o preguntas sobre la PWA de radio, contacta al equipo de desarrollo.

---

**Radio Bethel Chile** - Movimiento Misionero Mundial Chile
