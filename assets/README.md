# 🎨 Assets - SecureVault

Carpeta para almacenar recursos personalizados de la aplicación.

## 📁 Estructura

```
assets/
└── images/
    ├── logo.svg          ← Tu logo personalizado aquí
    ├── logo.png          ← O en PNG si lo prefieres
    └── ...otros assets
```

## 🔐 Logo Personalizado

### ¿Cómo agregar tu logo?

**Paso 1:** Guarda tu logo en `assets/images/logo.svg` (recomendado) o `logo.png`

**Paso 2:** Edita `index.html` - Busca la navbar (alrededor de la línea 148):

**Encontrarás esto:**
```html
<div class="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity" onclick="showPage('landing')">
  <div class="relative flex items-center justify-center w-8 h-8">
    <svg viewBox="0 0 32 32" fill="none" class="w-8 h-8">
      <!-- ... código SVG ... -->
    </svg>
  </div>
```

**Reemplázalo con:**
```html
<div class="flex items-center gap-2.5 cursor-pointer hover:opacity-80 transition-opacity" onclick="showPage('landing')">
  <img src="assets/images/logo.svg" alt="SecureVault" class="w-8 h-8" />
```

**Paso 3:** Haz lo mismo en el sidebar (busca el segundo logo, alrededor de línea 1000):

```html
<!-- Sidebar - reemplazar: -->
<div class="w-8 h-8 rounded-lg bg-vault-blue/20 border border-vault-blue/30 flex items-center justify-center text-sm">🔒</div>

<!-- Con: -->
<img src="assets/images/logo.svg" alt="SecureVault" class="w-8 h-8 rounded-lg" />
```

---

## 💡 Recomendaciones

### Formato
- **SVG** ✅ (mejor para escalado perfecto)
- **PNG** ✅ (con fondo transparente)
- **JPG** ⚠️ (puede parecer pixelado)

### Tamaño
- **Ideal:** 32x32 a 64x64 píxeles
- **Mínimo:** 20x20 píxeles
- **Máximo:** 128x128 píxeles

### Colores
- **Blanco** ✅ (máximo contraste en fondo oscuro)
- **Azul claro** ✅ (coherente con tema)
- **Azul oscuro** ⚠️ (puede no verse bien)
- **Colores vivos** ❌ (rompe la paleta)

### Estilo
Acorde al tema de **seguridad de datos**:
- 🔒 Candado
- 🛡️ Escudo
- 🔐 Llave
- ☁️ Nube segura
- ⚡ Escudo con rayo

---

## 🎨 Ejemplo: Generar Logo SVG

Si no tienes logo, prueba generar uno online:
- [Shields.io](https://shields.io/)
- [Logomakr](https://logomakr.com/)
- [Freelogodesign](https://www.freelogodesign.org/)

O usa este SVG de ejemplo (candado simple):

```svg
<svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="4" fill="#3b82f6" fill-opacity="0.1"/>
  <g stroke="#3b82f6" stroke-width="2" fill="none">
    <path d="M10 14v-3c0-2.2 1.8-4 4-4s4 1.8 4 4v3"/>
    <rect x="9" y="14" width="14" height="10" rx="1"/>
    <circle cx="16" cy="19" r="0.5" fill="#3b82f6"/>
  </g>
</svg>
```

---

## ✨ El Logo es Clickeable

Tanto en la navbar como en el sidebar, el logo es un botón que:
- **Al hacer clic:** Te devuelve a la página de inicio
- **Hover effect:** Se vuelve semi-transparente
- **Funciona desde:** Dashboard, Login, cualquier página

---

## 📝 Resumen de Cambios

### Que cambió en v2.1
1. ✅ Logos clickeables en navbar y sidebar
2. ✅ Carpeta `assets/images/` para logos
3. ✅ Instrucciones claras para personalizar
4. ✅ Datos españolizados
5. ✅ Animaciones mejoradas

### Qué NO cambió
- La funcionalidad principal
- Las secciones del dashboard
- Los scripts JavaScript
- La estructura HTML / CSS

---

**Última actualización:** May 5, 2026  
**Para más info:** Ver README.md principal

