# 🚀 Guía de Despliegue a HostGator

Esta guía explica cómo desplegar el sitio web de Big Pollo en HostGator vía FTP.

## 📋 Requisitos Previos

1. **Cuenta de HostGator** con acceso FTP
2. **Dominio configurado** (bigpollo.com.co)
3. **Node.js 18+** instalado
4. **Datos FTP** de HostGator

## 🛠️ Configuración Inicial

### 1. Obtener Datos FTP de HostGator

Desde tu panel de control cPanel de HostGator:

1. Ve a **"Cuentas FTP"**
2. Anota estos datos:
   - **Servidor FTP**: `bigpollo.com.co` o `ftp.bigpollo.com.co`
   - **Usuario**: tu usuario FTP (ej: `usuario@bigpollo.com.co`)
   - **Contraseña**: tu contraseña FTP
   - **Puerto**: `21` (FTP) o `22` (SFTP)

### 2. Configurar Variables de Entorno

1. Copia el archivo de ejemplo:
```bash
cp .env.deploy.example .env.deploy
```

2. Edita `.env.deploy` con tus datos reales:
```env
FTP_HOST=bigpollo.com.co
FTP_USER=tu_usuario@bigpollo.com.co
FTP_PASSWORD=tu_contraseña_ftp
FTP_PORT=21
```

⚠️ **IMPORTANTE**: Nunca subas el archivo `.env.deploy` al repositorio git.

## 🚀 Proceso de Despliegue

### Opción 1: Despliegue Automático

```bash
# Instalar dependencias (solo la primera vez)
npm install

# Desplegar directamente a HostGator
npm run deploy
```

### Opción 2: Despliegue Manual

```bash
# 1. Hacer build de producción
npm run build:prod

# 2. Subir archivos manualmente vía FTP
# - Conectar a tu cuenta FTP de HostGator
# - Subir contenido de la carpeta 'dist' a '/public_html/'
# - Asegurar que el archivo .htaccess esté incluido
```

### Opción 3: Solo Build (sin deploy)

```bash
# Solo crear el build para revisión
npm run deploy:test
```

## 📁 Estructura de Archivos en HostGator

Después del despliegue, tu estructura en HostGator será:

```
/public_html/
├── index.html              # Página principal
├── .htaccess               # Configuración Apache
├── assets/                 # CSS, JS, imágenes optimizadas
│   ├── index-abc123.js
│   ├── index-def456.css
│   └── logo-ghi789.png
├── og-image.jpg            # Imagen para redes sociales
└── logo.jpg               # Logo de la empresa
```

## ⚙️ Características del Deploy

### Optimizaciones Incluidas

- ✅ **Compresión GZIP** habilitada
- ✅ **Caché del navegador** configurado
- ✅ **Headers de seguridad** implementados
- ✅ **Redirección HTTPS** forzada
- ✅ **SPA Routing** configurado
- ✅ **Protección de archivos** sensibles

### Archivos .htaccess

El archivo `.htaccess` incluye:

- **Ruteo SPA**: Redirige todas las rutas a `index.html`
- **Seguridad**: Headers XSS, CSRF, clickjacking
- **Performance**: Compresión GZIP y caché
- **SSL**: Fuerza HTTPS
- **Protección**: Evita acceso a archivos sensibles

## 🔧 Troubleshooting

### Error: "No se puede conectar al servidor FTP"

1. Verifica que los datos FTP sean correctos
2. Asegúrate que el dominio esté propagado
3. Intenta cambiar el puerto (21 para FTP, 22 para SFTP)
4. Verifica que no haya firewall bloqueando

### Error: "Permiso denegado"

1. Verifica que el usuario FTP tenga permisos de escritura
2. Asegúrate de estar subiendo a `/public_html/`
3. Contacta a soporte de HostGator si persiste

### Las rutas SPA no funcionan

1. Verifica que el archivo `.htaccess` esté presente
2. Asegúrate que Apache mod_rewrite esté habilitado
3. Revisa que la configuración sea correcta

### Sitio no carga correctamente

1. Verifica que `index.html` esté en `/public_html/`
2. Comprueba que todos los assets estén subidos
3. Revisa la consola del navegador para errores
4. Verifica que el SSL esté configurado

## 📊 Monitoreo Post-Despliegue

### Verificaciones Obligatorias

1. **Funcionalidad**:
   - [ ] Página principal carga correctamente
   - [ ] Navegación entre páginas funciona
   - [ ] Chat AI responde (si está configurado)
   - [ ] Botones de WhatsApp funcionan
   - [ ] Formularios envían correctamente

2. **Performance**:
   - [ ] Tiempo de carga < 3 segundos
   - [ ] Imágenes se cargan optimizadas
   - [ ] CSS y JS están comprimidos

3. **SEO**:
   - [ ] Meta tags están presentes
   - [ ] URLs canónicas correctas
   - [ ] Structured data válido

## 🔄 Actualizaciones Futuras

Para actualizar el sitio:

```bash
# 1. Hacer cambios en el código
# 2. Probar localmente
npm run dev

# 3. Desplegar cambios
npm run deploy
```

## 📞 Soporte

Si tienes problemas:

1. **HostGator Support**: Panel de control > Soporte
2. **Documentación técnica**: Revisa logs de error en cPanel
3. **Desarrollo**: Contacta al equipo de BitLink S.A.S

---

## 🚨 Lista de Verificación Pre-Deploy

- [ ] Variables de entorno configuradas
- [ ] Build local funciona correctamente
- [ ] Tests pasando (si aplica)
- [ ] .htaccess configurado
- [ ] Dominio apunta a HostGator
- [ ] SSL certificado instalado
- [ ] Backup del sitio anterior (si existe)

## 📈 Métricas de Éxito

Después del despliegue, verifica:

- **PageSpeed Insights**: Score > 90
- **GTmetrix**: Grade A
- **Google Search Console**: Sin errores
- **Analytics**: Tráfico rastreando correctamente

---

**¡Listo para despegar! 🚀**