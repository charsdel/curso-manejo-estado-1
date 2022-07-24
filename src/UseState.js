import { render } from "@testing-library/react";
import React from "react";

const SECURITY_CODE = 'paradigma'

function UseState({msj}){



    const [value, setValue] = React.useState('');


    const [error, setError] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    console.log(value)


    React.useEffect(() => {

       // console.log("empezando el efecto")
        if(!!loading){

            //
            //setError(false)

            setTimeout(() => {


                //comparamos el valor de inpur contra el codigo
                if(value === SECURITY_CODE){

                    console.log('validacion correcta')
                    //setError(false)
                }else{
                    setError(true)
                }


                setLoading(false);


                


            },3000);

           
        }
        //console.log("terminamos el efecto")

    },[loading])

   
    return (
        <div>
            <h2> Eliminar {msj}</h2>
            <p> Por favor, escribe el codigo de seguridad </p>


            {(error && !loading) && (

                <p>Error: el codigo es incorrecto </p>
            )}

            {loading && (

                <p>Cargando ... </p>
            )}

            <input 
                placeholder="Codigo de seguridad"
                value={value}

                //en el evento del botton se trae el valor del input y lo guarda en el estado
                onChange ={(event)=> {
                   setValue(event.target.value)

                }
                    
                
                }
             />
            <button
            

            //cuando en in
            onClick={() => {
                    //setError(false);
                    setLoading(true);
                }
            }

            > Comprobar </button>

        </div>

    );


}

export {UseState};