import React from "react";
import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import Registro from "../views/Registro";


const RutasAdmin = ({setUsuarioLogueado}) => {
  return (
    <>
    {/* /administrar/registro */}
      <Routes>
        <Route exact path="/" element={<Administrador />} />
        <Route exact path="/crear" element={<CrearProducto />} />
        <Route
          exact
          path="/editar/:id"
          element={<EditarProducto />}
        />
           <Route
          exact
          path="/registro"
          element={<Registro setUsuarioLogueado={setUsuarioLogueado} />}
        />
      </Routes>
    </>
  );
};

export default RutasAdmin;
