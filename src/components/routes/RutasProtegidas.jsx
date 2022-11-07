import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
  const token = JSON.parse(localStorage.getItem('tokenUsuario')) || null;
  //el token tiene algo
  if(!token){
    //si el token esta vacio
    return <Navigate to={'/login'}></Navigate>
  }else{
    return children;
  }
};

export default RutasProtegidas;