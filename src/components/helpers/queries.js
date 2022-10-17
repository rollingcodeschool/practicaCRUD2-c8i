const URL = process.env.REACT_APP_API_CAFECITO;
//peticion GET para obtener todos los productos
//peticion POST crear un nuevo producto, en los login tambien lo puedo usar
//peticion PUT sirve para modificar un producto
//peticion DELETE sirve para borrar un producto


export const consultarAPI = async()=>{
    try{
        // console.log(URL)
        const respuesta = await fetch(URL);
        const listaProductos = await respuesta.json()
        console.log(listaProductos)
        return listaProductos;
    }catch(error){
        console.log(error)
        return false;
    }
}

export const crearProductoAPI = async(producto)=>{
    try{
        const respuesta = await fetch(URL, {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto) 
        });
        return respuesta;
    }catch(error){
        console.log(error)
        return false;
    }
}