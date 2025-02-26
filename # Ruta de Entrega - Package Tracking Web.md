# Ruta de Entrega - Package Tracking Web Application

## Descripción
Ruta de Entrega es una aplicación web que permite a los usuarios rastrear paquetes, registrarse como clientes o mensajeros, ver servicios de entrega y contactar al soporte. El proyecto incluye funcionalidades dinámicas con PHP y MySQL, un diseño responsivo con HTML y CSS, e interactividad con JavaScript.

## Características
- Página de inicio con servicios destacados.
- Registro e inicio de sesión de usuarios.
- Rastreo de paquetes en tiempo real con mapas (Leaflet.js).
- Lista de servicios de entrega.
- Formulario de contacto con almacenamiento en base de datos.
- Diseño responsivo para móviles, tablets y desktops.

## Requisitos
- Servidor web con PHP (7+), MySQL, y Apache/Nginx (e.g., XAMPP, WAMP).
- Navegador moderno (Chrome, Firefox, Edge).
- Conexión a internet para cargar Leaflet.js desde CDN.

## Instalación
1. Clona o descarga este repositorio en tu máquina local.
2. Configura un entorno local con XAMPP/WAMP.
3. Crea la base de datos `ruta_entrega` en MySQL y ejecuta `database.sql` para crear las tablas.
4. Asegúrate de que los archivos PHP usen las credenciales de MySQL correctas (por defecto: usuario "root", contraseña vacía).
5. Coloca la carpeta `ruta-entrega` en el directorio raíz de tu servidor web (e.g., `C:\xampp\htdocs\ruta-entrega`).
6. Accede al proyecto en tu navegador: `localhost/ruta-entrega`.

## Estructura del Proyecto