# Ventas API

Una API REST para la gestión de ventas, clientes, productos y transacciones.

## Descripción

Esta API permite gestionar un sistema de ventas completo, incluyendo clientes, productos, propuestas, compras, quejas y seguimientos.

## Tecnologías Utilizadas

- **Node.js** con **Express.js** para el servidor
- **Sequelize** como ORM para la base de datos
- **PostgreSQL** como base de datos
- **JWT** para autenticación
- **Zod** para validación de esquemas
- **CORS** para manejo de solicitudes cross-origin

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/noti5-hermel/ventas-api.git
   cd ventas-api
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=ventas_db
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   JWT_SECRET=tu_secreto_jwt
   ```

4. Configura la base de datos:
   Asegúrate de tener PostgreSQL instalado y crea la base de datos especificada.

## Uso

Para iniciar el servidor en modo desarrollo:
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000` (o el puerto configurado).

## Estructura del Proyecto

```
src/
├── config/          # Configuración de base de datos y rutas
├── controllers/     # Controladores de la API
├── middleware/      # Middlewares personalizados
├── routes/          # Definición de rutas
├── schemas/         # Modelos de datos y validaciones
├── services/        # Lógica de negocio
└── utils/           # Utilidades
```

## Endpoints de la API

### Autenticación
- `POST /auth/login` - Iniciar sesión
- `POST /auth/register` - Registrar usuario

### Clientes
- `GET /customers` - Obtener todos los clientes
- `POST /customers` - Crear cliente
- `GET /customers/:id` - Obtener cliente por ID
- `PUT /customers/:id` - Actualizar cliente
- `DELETE /customers/:id` - Eliminar cliente

### Productos
- `GET /products` - Obtener todos los productos
- `POST /products` - Crear producto
- `GET /products/:id` - Obtener producto por ID
- `PUT /products/:id` - Actualizar producto
- `DELETE /products/:id` - Eliminar producto

### Propuestas
- `GET /proposals` - Obtener todas las propuestas
- `POST /proposals` - Crear propuesta
- `GET /proposals/:id` - Obtener propuesta por ID
- `PUT /proposals/:id` - Actualizar propuesta
- `DELETE /proposals/:id` - Eliminar propuesta

### Compras
- `GET /purchases` - Obtener todas las compras
- `POST /purchases` - Crear compra
- `GET /purchases/:id` - Obtener compra por ID
- `PUT /purchases/:id` - Actualizar compra
- `DELETE /purchases/:id` - Eliminar compra

### Quejas
- `GET /complaints` - Obtener todas las quejas
- `POST /complaints` - Crear queja
- `GET /complaints/:id` - Obtener queja por ID
- `PUT /complaints/:id` - Actualizar queja
- `DELETE /complaints/:id` - Eliminar queja

### Seguimientos
- `GET /follow-ups` - Obtener todos los seguimientos
- `POST /follow-ups` - Crear seguimiento
- `GET /follow-ups/:id` - Obtener seguimiento por ID
- `PUT /follow-ups/:id` - Actualizar seguimiento
- `DELETE /follow-ups/:id` - Eliminar seguimiento

### Transacciones
- `GET /transactions` - Obtener todas las transacciones
- `POST /transactions` - Crear transacción
- `GET /transactions/:id` - Obtener transacción por ID
- `PUT /transactions/:id` - Actualizar transacción
- `DELETE /transactions/:id` - Eliminar transacción

### Usuarios
- `GET /users` - Obtener todos los usuarios
- `POST /users` - Crear usuario
- `GET /users/:id` - Obtener usuario por ID
- `PUT /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

### Roles
- `GET /roles` - Obtener todos los roles
- `POST /roles` - Crear rol
- `GET /roles/:id` - Obtener rol por ID
- `PUT /roles/:id` - Actualizar rol
- `DELETE /roles/:id` - Eliminar rol

### Rutas
- `GET /routes` - Obtener todas las rutas
- `POST /routes` - Crear ruta
- `GET /routes/:id` - Obtener ruta por ID
- `PUT /routes/:id` - Actualizar ruta
- `DELETE /routes/:id` - Eliminar ruta

## Scripts Disponibles

- `npm test` - Ejecutar pruebas (actualmente no configurado)

## Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia ISC.

## Contacto

Para preguntas o soporte, abre un issue en el repositorio de GitHub.
