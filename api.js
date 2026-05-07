const url = 'https://fakestoreapi.com/'

/*  Consultar Todos los Productos:

    Si ejecutas npm run start GET products, el programa debe realizar una petición
    asíncrona a la API y devolver la lista completa de productos en la consola.

    Ejemplo: npm run start GET products
*/

export async function getAllProducts () {
    try {
        const respuesta = await fetch(`${url}/products`);
        const productos = await respuesta.json();
        const nuevosProductos = productos.map(({ id, title, price, category })=> ({
            id,
            titulo: title,
            precio: price,
            categoria: category
        }))
        console.log("Lista de todos los productos: ", nuevosProductos)
        return nuevosProductos;
    } catch (error) {
        console.error("Se ha producido un error")
        console.error("Mensaje del Error: ", error.message)
    } finally {
        console.log("Fin de la consulta de traer todos los productos")
    }
}

/*  Consultar un Producto Específico:

    Si ejecutas npm run start GET products/<productId>, el programa debe obtener
    y mostrar el producto correspondiente al productId indicado.

    Ejemplo: npm run start GET products/15 
*/

export async function getProduct (id) {
    try {
        const respuesta = await fetch(`${url}/products/${id}`);
        const { id: idProduct, title, price, category } = await respuesta.json();
        const productoEspecifico = {
            id: idProduct,
            titulo: title,
            precio: price,
            categoria: category
        }
        
        console.log("Producto especifico: ", productoEspecifico)
        return productoEspecifico;
    } catch (error) {
        console.error("Se ha producido un error")
        console.error("Mensaje del Error: ", error.message)
    } finally {
        console.log("Fin de la consulta de traer producto especifico")
    }
}

/*  Crear un Producto Nuevo:

    Si ejecutas npm run start POST products <title> <price> <category>, el
    programa debe enviar una petición POST a la API para agregar un nuevo 
    producto con los datos proporcionados (title, price, category) y devolver 
    el id del producto creado como resultado en la consola.

    Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras 
*/

export async function addProduct (titulo, precio, categoria) {
    try {
        const respuesta = await fetch(`${url}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ... {title: titulo,
                price: precio,
                category: categoria}
            })
        });

         if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`);
        }

        const productoCreado = await respuesta.json();
        console.log("Producto creado exitosamente: \n", productoCreado);
        return productoCreado;
    } catch (error) {
        console.error("Se ha producido un error")
        console.error("Mensaje del Error: ", error.message)
    } finally {
        console.log("Fin de la consulta para crear un producto")
    }
}

/*  Eliminar un Producto:

    Si ejecutas npm run start DELETE products/<productId>, el programa debe
    enviar una petición DELETE para eliminar el producto correspondiente al 
    productId y devolver la respuesta en la consola.
    
    Ejemplo: npm run start DELETE products/7 
*/

export async function deleteProduct (id) {
    try {
        const respuesta = await fetch(`${url}/products/${id}`, {
            method: "DELETE"
        });

        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.status} ${respuesta.statusText}`);
        }

        const resultado = await respuesta.json(); // La API puede devolver un mensaje de confirmación
        console.log("Producto eliminado exitosamente: ", resultado)
        return resultado;
    } catch (error) {
        console.error("Se ha producido un error")
        console.error("Mensaje del Error: ", error.message)
    } finally {
        console.log("Fin de la consulta de eliminar un producto")
    }
}
