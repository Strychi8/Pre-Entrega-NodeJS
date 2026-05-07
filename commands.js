import { getAllProducts, getProduct, addProduct, deleteProduct } from './api.js'

export function handleCommand(argumentos) {
    const comando = argumentos[0]
    const data = argumentos[1]
    const titulo = argumentos[2]
    const precio = parseFloat(argumentos[3])
    const categoria = argumentos[4]

    if (!comando || !data){
        console.log("Error: Faltan argumentos. Asegúrate de incluir el comando y los datos necesarios.");
    } else if (comando === "GET" && data === "products" && argumentos.length === 2){
        getAllProducts()
    } else if (comando === "GET" && data.startsWith("products/") && argumentos.length === 2){
        // Validar que el formato sea correcto (solo un ID después de "products/")
        const partes = data.split("/"); // Extraer el ID del producto
        if (partes.length !== 2 || isNaN(partes[1])){
            console.log("Error: Formato inválido. Asegúrate de usar el formato correcto: products/<productId>");
            console.log("Ejemplo: npm run start GET products/10");
        } else {
            const productId = partes[1];
            console.log(`Recibimos el ID del producto: ${productId}`)
            getProduct(productId)
        } 
    } else if (comando === "POST" && data === "products"){
        // Validar que los argumentos necesarios estén presentes
        if (!titulo || isNaN(precio) || !categoria || argumentos.length > 5){
            console.error("Error: Argumentos inválidos para crear un producto.")
            console.log("Ejemplo: npm run start POST products T-Shirt-Rex 300 remeras");
        } else {
            addProduct(titulo, precio, categoria)
        } 
    } else if (comando === "DELETE" && data.startsWith("products/") && argumentos.length === 2){
        // Validar que el formato sea correcto (solo un ID después de "products/")
        const partes = data.split("/");
        if (partes.length !== 2 || isNaN(partes[1])){
            console.log("Error: Formato inválido. Asegúrate de usar el formato correcto: products/<productId>");
            console.log("Ejemplo: npm run start DELETE products/10");
        } else {
            const productId = partes[1];
            deleteProduct(productId)
        }  
    } else {
        console.log("Comando no reconocido. Solo se aceptan las siguientes acciones: ")
        console.log("1) npm run start GET products")
        console.log("2) npm run start GET products/1")
        console.log("3) npm run start POST products T-Shirt-Rex 300 remeras")
        console.log("4) npm run start DELETE products/1")
    }
}
