import { render } from "@testing-library/react";
import React from "react";



function UseState({msj}){

    const [error, setError] = React.useState(true);

    const [loading, setLoading] = React.useState(false);




    React.useEffect(() => {

        console.log("empezando el efecto")
        if(!!loading){
            setTimeout(() => {

                console.log("Haciendo la Validacion")

                setLoading(false);

                console.log("terminando la Validacion")


            },3000);

           
        }
        console.log("terminamos el efecto")

    },[loading])

   
    return (
        <div>
            <h2> Eliminar {msj}</h2>
            <p> Por favor, escribe el codigo de seguridad </p>


            {error && (

                <p>Error: el codigo es incorrecto </p>
            )}

            {loading && (

                <p>Cargando ... </p>
            )}

            <input placeholder="Codigo de seguridad" />
            <button
            
            onClick={() => setLoading( true) }

            > Comprobar </button>

        </div>

    );


}

export {UseState};