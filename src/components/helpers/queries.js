const URL = process.env.REACT_APP_API_CAFECITO;
const URL_USER = process.env.REACT_APP_API_USUARIO;
//peticion GET para obtener todos los productos
//peticion POST crear un nuevo producto, en los login tambien lo puedo usar
//peticion PUT sirve para modificar un producto
//peticion DELETE sirve para borrar un producto

export const consultarAPI = async () => {
  try {
    // console.log(URL)
    const respuesta = await fetch(URL);
    const listaProductos = await respuesta.json();
    console.log(listaProductos);
    return listaProductos;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const crearProductoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const obtenerProductoAPI = async (id) => {
  try {
    // console.log(URL)
    const respuesta = await fetch(URL + "/" + id);
    const producto = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return producto;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const editarProductoAPI = async (id, producto) => {
  try {
    // console.log(URL)
    const respuesta = await fetch(URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const crearUsuario = async (usuario) => {
  try {
    console.log(usuario);
    const respuesta = await fetch(URL_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return;
  }
};

export const login = async (usuario) =>{
  try{
    //verificar si el usuario existe
    const respuesta = await fetch(URL_USER);
    const listaUsuarios = await respuesta.json();
    //buscar cual usuario tiene mi mail
    const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.usuario )
    if(usuarioBuscado){
      console.log('email encontrado')
      //verificar el password
      if(usuarioBuscado.password === usuario.password ){
        return usuarioBuscado
      }
    }else{
      console.log('el mail no existe')
      return
    }
  }catch(error){
    console.log('errores en el login')
    return
  }
}