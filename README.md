# 🚀 Preentrega Backend con Node.js - Talento Tech

Este proyecto es una pre-entrega para el curso de Backend con Node.js, donde se implementa una aplicación de línea de comandos (CLI) que interactúa con la API de FakeStore. La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre productos, utilizando las mejores prácticas de desarrollo con Node.js.

## 📌 Funcionalidades

- **Consultar todos los productos:** Realiza una solicitud **GET** para obtener la lista completa de productos.
- **Consultar un producto específico:** Realiza una solicitud **GET** para obtener los detalles de un producto por su ID.
- **Crear un nuevo producto:** Realiza una solicitud **POST** para agregar un nuevo producto con título, precio y categoría.
- **Eliminar un producto:** Realiza una solicitud **DELETE** para eliminar un producto por su ID.

## 🛠️ Tecnologías utilizadas

- **Node.js:** Entorno de ejecución para JavaScript.
- **Fetch API:** Para realizar solicitudes HTTP a la API de FakeStore.
- **ES Modules:** Uso de import y export para una estructura modular.
- **Process.argv:** Para capturar y procesar los comandos ingresados desde la terminal.

## 🧩 Estructura del Proyecto

```plaintext
pre-entrega-nodejs/
│
├── api.js          # Funciones para interactuar con la API de FakeStore
├── commands.js     # Lógica para interpretar y manejar los comandos
├── index.js        # Punto de entrada principal de la aplicación
├── package.json    # Configuración del proyecto y dependencias
└── README.md       # Documentación del proyecto
```

## 🚀 Cómo ejecutar el proyecto

1. Clona este repositorio:
    ```
    git clone <URL_DEL_REPOSITORIO>
    cd pre-entrega-nodejs
    ```
2. Instala las dependencias:
    ```
    npm install
    ```
3. Ejecuta los comandos disponibles:
   - Consultar todos los productos:
      ```
      npm run start GET products
      ```
   - Consultar un producto específico:
      ```
      npm run start GET products/<productId>
      ```
   - Crear un nuevo producto:
      ```
      npm run start POST products <title> <price> <category>
      ```
   - Eliminar un producto:
      ```
      npm run start DELETE products/<productId>
      ```

> [!NOTE] 
> - La aplicación utiliza la API de FakeStore para realizar las operaciones. Consulta su [documentación oficial](https://fakestoreapi.com/) para más detalles.
> - Asegúrate de que los argumentos ingresados en la terminal sean correctos para evitar errores.
     
