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

export const crearProductoAPI = async (producto,token) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // el token que esta en el localstorage
        "x-token": token
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return false;
  }
};
export const borrarProductoAPI = async (id, token) => {
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "DELETE",
      headers: {
        // envio el token en el header personalizado
        "x-token": token,
      },
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

export const editarProductoAPI = async (id, producto, token) => {
  try {
    // console.log(URL)
    const respuesta = await fetch(URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": token,
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
  try {
    console.log(usuario);
    const respuesta = await fetch(URL_USER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      usuario: datos.usuario,
      token: datos.token,
      uid: datos.uid,
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
}