
**Estructura del cliente**
Siguiendo un patrón modular, cada carpeta tiene una funcionalidad distinta dentro del client/src:
1. components tiene el footer y el header(llamado aquí dropdown), las vistas de "mood" (singleMood, Scatter -como se llama la gráfica tipo scatter, que muestra una colección de estados de ánimo y su graficación-, y editMood), las vistas del usuario(profile, edit).
2. Pages tiene dos páginas solamente: About, y Home. About necesita trabajo: todavía no explica suficientemente sobre qué va la app y qué es lo que puede llegar a hacer. Tal vez serviría añadirle unas slides con imágenes y poco texto en cada una.

<br>

**usuario**
1. creación del modelo, el controlador y la ruta de usuario en server
1. 5. /middlewares/authorization en server, usando jwb
2. creación del contexto, el Router y los componentes de usuario en client
2. 5. config/axios en client, para acceder a las rutas de server
3. creación de las rutas de About y Home en pages/client, y del header y footer en components/layout
4. creación de las rutas de login y register en components/Auth

<br>

**cards de estado**
1. creación del modelo, el controlador y las rutas de tarjetas
2. integración de la librería de gráficos

<br>

**TODO**
Trabajar la página de About