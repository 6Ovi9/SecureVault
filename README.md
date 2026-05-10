# 🔒 SecureVault — Proyecto de Presentación

**Almacenamiento seguro on-premise para PYMEs españolas**

Proyecto modularizado e interactivo para presentación sobre empresas ficticias en el sector de seguridad de datos. Todo el código está optimizado para ser visualmente atractivo, funcional y educativo.

---

## 🎨 Características Principales

### ✨ Animaciones Profesionales
- Scroll reveal system con efecto cascada
- Parallax backgrounds dinámicos
- Transiciones suaves (easing cubic-bezier)
- Múltiples tipos de entrada (fadeUp, slideIn, scaleIn)
- Glow pulse en elementos interactivos

### 🇪🇸 Contexto Spanish Localizado
- Datos de contacto españoles reales
- Nombres de usuarios y empresas españoles
- Archivos típicos de empresas españolas
- Sectores profesionales locales
- Referencias RGPD y normativa española

### 🎬 Experiencia de Usuario Completa
- Navegación fluida entre 3 páginas
- Dashboard funcional con 3 secciones
- Modales interactivos
- Tabla de archivos con datos realistas
- Indicadores de estado en tiempo real (simulado)

### 📱 Diseño Responsive
- Compatible desktop, tablet, móvil
- Tailwind CSS para responsive design
- Componentes adaptativos
- Touch-friendly en móviles

---

## 📁 Estructura del Proyecto

```
securevault/
├── index.html                    # Página principal (modificada)
├── README.md                     # Este archivo
├── securevault(1).html           # Original sin modificar
│
├── css/
│   ├── styles.css               # Todas las animaciones y estilos
│   └── tailwind-config.js       # Configuración Tailwind
│
├── js/
│   ├── app.js                   # Navegación y lógica principal
│   ├── animations.js            # Scroll reveal y parallax
│   ├── file-manager.js          # Datos y tabla de archivos
│   └── modals.js                # Funciones de modales
│
├── assets/
│   ├── images/                  # 📁 Carpeta para logos
│   └── README.md                # Instrucciones de assets
│
└── components/
    └── modals.html              # Componentes de modales
```

---

## 🚀 Cómo Usar

### Opción 1: Abrir directamente
```bash
# Simplemente abre en navegador
open securevault/index.html
```

### Opción 2: Con servidor local (recomendado)
```bash
cd securevault
python -m http.server 8000
# Accede a: http://localhost:8000
```

---

## 🎯 Características Principales

### 📄 Landing Page
- **Hero Section**: Con animación parallax y orbs flotantes
- **Features**: 3 pilares principales (servidor físico, cifrado, RGPD)
- **How It Works**: Proceso en 3 pasos con números animados
- **RGPD Info**: Panel de cumplimiento interactivo
- **Contact Form**: Formulario con selects de empresa/sector

### 🔐 Login Page
- Indicador de servidor detectado
- Formulario con datos prefillados (admin@empresa.com / secreto123)
- Toggle de visibilidad de contraseña
- Información de seguridad (TLS 1.3, AES-256, RSA-4096)

### 📊 Dashboard
**Sidebar con navegación:**
- Indicador de usuario (Ana Clemente)
- Barra de almacenamiento (38% usado)
- Botón de cerrar sesión

**3 Secciones intercambiables:**

1. **Mi Bóveda** - Gestor de archivos
   - 4 cards de estadísticas
   - 5 carpetas con archivos tipificados
   - Tabla con 12 archivos españoles reales
   - Estado de cifrado AES-256

2. **Cumplimiento RGPD** - Panel de auditoría
   - Puntuación RGPD (94/100)
   - Checklist de cumplimiento
   - Registro de accesos últimas 24h
   - Estado de última auditoría

3. **Estado del Servidor** - Monitoreo
   - CPU, RAM, Temperatura en tiempo real
   - Lista de servicios activos
   - Información de red (IP, hostname)
   - Indicador de actualización disponible

---

## 🎗 Logo Personalizable

### Cómo cambiar el logo:

**Opción A: Logo SVG**
1. Guarda en `assets/images/logo.svg`
2. En `index.html`, reemplaza línea ~148 (navbar):
```html
<!-- Original: -->
<svg viewBox="0 0 32 32" fill="none" class="w-8 h-8">...</svg>

<!-- Reemplazar con: -->
<img src="assets/images/logo.svg" alt="SecureVault" class="w-8 h-8" />
```

3. Haz lo mismo en sidebar (línea ~1000)

**Opción B: Logo PNG/JPG**
```html
<img src="assets/images/logo.png" alt="SecureVault" class="w-8 h-8" />
```

**Recomendaciones:**
- Formato: SVG o PNG transparente ✓
- Tamaño: 32x32 a 64x64 px
- Color: Blanco o azul claro
- Estilo: Temática de seguridad/candado

### Logo es clickeable ✨
Al hacer clic en el logo (navbar o sidebar), vuelves a la página de inicio.

---

## 📊 Datos de Ejemplo

### Usuarios del Sistema
| Nombre | Rol | Acciones |
|--------|-----|---------|
| Ana Clemente | Administradora | Full access |
| David Ramírez | Usuario | Acceso lectura |
| Laura Martín | Usuario | Acceso lectura |

### Carpetas & Archivos
- 📁 **Nóminas** - 18 documentos (nóminas, facturas)
- 📋 **Contratos** - 14 documentos (acuerdos, renovaciones)
- 👥 **Clientes** - 42 documentos (datos sensibles)
- ⚖️ **RGPD Docs** - 12 documentos (políticas, auditorías)
- 📦 **Proveedores** - 8 documentos (facturas, acuerdos)

### Sectores Dirigidos
- ⚖️ Despachos de abogados
- 🏥 Clínicas y hospitales
- 📊 Gestorías y asesorías fiscales
- 🏗️ Estudios de arquitectura
- 🔍 Notarías
- 🏢 PYMEs con datos sensibles

---

## 💾 Datos de Contacto

📧 Email: **hola@securevault.es**  
📞 Teléfono: **+34 91 234 5678**  
📍 Ubicación: Madrid, España

---

## 🎨 Estilos & Animaciones

### Colores
- **Navy-950**: Fondo oscuro principal (#020817)
- **Navy-900**: Fondos secundarios (#0a0f1e)
- **Vault-Blue**: Azul principal (#3b82f6)
- **Vault-Green**: Verde éxito/confirmación (#22c55e)
- **Vault-Amber**: Amarillo advertencias (#f59e0b)

### Animaciones Disponibles
- `.anim-fade-up` - Entra desde abajo
- `.anim-slide-left` - Entra desde izquierda
- `.anim-slide-right` - Entra desde derecha
- `.anim-scale-in` - Entra con zoom suave
- `.delay-100` a `.delay-600` - Retraso en cascada

### Efectos Especiales
- Scroll reveal system (IntersectionObserver)
- Parallax en elementos hero
- Glow pulse en botones
- Glassmorphism en cards
- Shimmer text efecto

---

## 🔄 Flujo de Navegación

```
┌─────────────────┐
│   Landing Page  │ ← Punto de entrada
└────────┬────────┘
         │ Click "Iniciar sesión"
         ↓
┌─────────────────┐
│   Login Page    │ ← Autenticación (demo)
└────────┬────────┘
         │ Click "Entrar"
         ↓
┌──────────────────────────┐
│   Dashboard (3 secciones)│
├──────────────────────────┤
│ 1. Mi Bóveda             │ ← Gestor de archivos
│ 2. RGPD Compliance       │ ← Panel auditoría
│ 3. Server Status         │ ← Monitoreo
└──────────────────────────┘
         │ Click logo
         ↓ Vuelve a Landing
```

---

## 🎓 Para la Presentación

✅ **Todo es decorativo y educativo**  
✅ **Datos ficticios pero realistas**  
✅ **Animaciones suaves y profesionales**  
✅ **Temática seguridad de datos en España**  
✅ **Ideal para proyectos de clase**  

---

## 📦 Dependencias Externas

- **Tailwind CSS**: CDN (`https://cdn.tailwindcss.com`)
- **Google Fonts**: Syne, DM Sans, JetBrains Mono
- **Ninguna dependencia local**
- **Vanilla JavaScript** (sin frameworks)

---

## 🛠️ Técnica

### Stack Tecnológico
- HTML5 (semántico)
- CSS3 (animaciones, gradients)
- Tailwind CSS (utilidades)
- Vanilla JavaScript (sin dependencias)

### Optimizaciones
- Scroll reveal con Intersection Observer
- CSS animations (no JavaScript)
- Event delegation
- Lazy animation triggers

### Compatibilidad
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile (iOS/Android)

---

## 📝 Últimas Actualizaciones

### v2.1 - Personalización Completa
✨ Logo clickeable en navbar y sidebar  
🎨 Animaciones mejoradas con easing  
🇪🇸 Datos completamente españolizados  
📱 Mejor responsive design  
🎬 Dashboard totalmente funcional  

### v2.0 - Modularización
🔄 HTML, CSS, JS separados  
📁 Estructura de carpetas  
⚙️ Componentes reutilizables  
🚀 Carga optimizada  

---

## 🎬 Próximas Ideas

- Agregar theme switcher (dark/light)
- Implementar gráficos con Chart.js
- Agregar sección de billing/pricing
- Conexión simulada a API
- Exportación de reportes PDF
- Soporte multi-idioma

---

**Made for educational purposes** 🎓  
**Perfect for classroom presentations** 📚

---

**Última actualización:** May 5, 2026  
**Versión:** 2.1  
**Estado:** 🟢 Listo para presentación
