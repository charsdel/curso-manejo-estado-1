import { render } from "@testing-library/react";
import React from "react";

const SECURITY_CODE = 'paradigma'

function UseState({msj}){


    //de esta manera se colocan los estados en un objeto
    const [state, setState ] = React.useState({

        value: '',
        error: false,
        loading: false

    });




    const [value, setValue] = React.useState('');


    const [error, setError] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    console.log(value)


    React.useEffect(() => {

       // console.log("empezando el efecto")
        if(!!state.loading){

            //
            //setError(false)

            setTimeout(() => {


                //comparamos el valor de inpur contra el codigo
                if(state.value === SECURITY_CODE){

                    setState({
                        ... state,
                        error: false,

                        loading: false,

                    });
                    console.log('validacion correcta')
                    //setError(false)
                }else{

                    setState({
                        ... state,

                        error: true,
                        loading: false,

                    });
                    //setError(true)
                }


                //setLoading(false);


                


            },3000);

           
        }
        //console.log("terminamos el efecto")

    },[state.loading])

   
    return (
        <div>
            <h2> Eliminar {msj}</h2>
            <p> Por favor, escribe el codigo de seguridad </p>


            {(state.error && !state.loading) && (

                <p>Error: el codigo es incorrecto </p>
            )}

            {state.loading && (

                <p>Cargando ... </p>
            )}

            <input 
                placeholder="Codigo de seguridad"
                value={state.value}

                //en el evento del botton se trae el valor del input y lo guarda en el estado
                onChange ={(event)=> {

                    setState({
                        ... state,

                        value: event.target.value,

                    });

                }
                    
                
                }
             />
            <button
            

            //cuando en in
            onClick={() => {
                    //setError(false);
                    setState({
                        ... state,

                        loading: true,

                    });
                }
            }

            > Comprobar </button>

        </div>

    );


}

export {UseState};