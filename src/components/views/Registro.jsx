import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuario } from "../helpers/queries";


const Registro = ({setUsuarioLogueado}) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();


  const onSubmit = (datos) => {
      crearUsuario(datos).then((respuesta) => {
        if (respuesta.status === 201) {
          Swal.fire(
            `Usuario creado`,
            `El usuario ${datos.usuario} se creo correctamente`,
            "success"
          );
          reset()
          // //guardar la sesion del usuario en localstorage
          //   localStorage.setItem('tokenUsuario', JSON.stringify(datos));
          //   //actualizar el state usuarioLogueado
          //   setUsuarioLogueado(datos)
          //   // redireccionamos
          //   navigate("/administrar");
        } else {
          Swal.fire(
            `Hubo un error inesperado`,
            "Intentelo nuevamente en breve.",
            "error"
          );
        }
      });
    
  };

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("usuario", {
                  required: "Debe ingresar un nombre de usuario",
                  minLength: {
                    value: 3,
                    message: "El nombre debe tener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "El nombre no debe tener mas de 30 caracteres",
                  },
                  pattern: {
                    value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim,
                    message: "Debe ingresar un nombre de usaurio valido",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.usuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "Debe ingresar un email",
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                    message: "Debe ingresar un formato valido",
                  },
                })}
       
              />
              <Form.Text className="text-danger mb-2">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Ingrese un password"
                {...register("password", {
                  required: "Debe ingresar una contraseña",
                  minLength: {
                    value: 8,
                    message: "Su contraseña debe tener al menos 8 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Su contraseña debe tener como 30 caracteres como maximo",
                  },
                })}
         
              />
              <Form.Text className="text-danger mb-2">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
