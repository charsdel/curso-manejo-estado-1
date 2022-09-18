import { render } from "@testing-library/react";
import React from "react";

const SECURITY_CODE = 'paradigma'

function UseState({msj}){


    //de esta manera se colocan los estados en un objeto
    const [state, setState ] = React.useState({

        value: '',
        error: false,
        loading: false,
        deleted:false,
        confirmed: false


    });

    const [value, setValue] = React.useState('');


    const [error, setError] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    console.log(value)

    
    const onConfirm = () =>{

        setState({
            ... state,
            error: false,
            loading: false,
            confirmed: true

        });
        console.log('validacion correcta')
    };

    const onError = () =>{

        setState({
            ... state,

            error: true,
            loading: false,

        });
    };


    const onWrite = (newValue) =>{

        setState({
            ... state,

            value: newValue,

        });
    };


    const onCheck = () =>{

        setState({
            ... state,

            loading: true,

        });
    };

    const onDelete = () =>{

        setState({
            ...state,
            deleted:true,
        
        });
    }; 

    const onReset = ()=>{

        setState({
            ...state,
            confirmed:false,
            deleted: false,
            value: '',
        
        });
    };


    React.useEffect(() => {

       // console.log("empezando el efecto")
        if(!!state.loading){

            //
            //setError(false)

            setTimeout(() => {


                //comparamos el valor de inpur contra el codigo
                if(state.value === SECURITY_CODE){

                    onConfirm();
                    //setError(false)
                }else{

                    onError();
                    //setError(true)
                }


                //setLoading(false);


                


            },3000);

           
        }
        //console.log("terminamos el efecto")

    },[state.loading])

   if (!state.deleted && !state.confirmed){
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

                        onWrite(event.target.value);

                    }
                        
                    
                    }
                />
                <button
                

                //cuando en in
                onClick={() => {
                        //setError(false);
                      onCheck();
                    }
                }

                > Comprobar </button>

            </div>

        );
   }else if(!!state.confirmed && !state.deleted){
    return(

        <React.Fragment>
            <p> pedimos confirmacion</p>
            <button
                //en react cuando se trabaja con est
                onClick={()=>
                    {
                        onDelete();
                    } 
                
                }
            > si, eliminar</button>
            <button
                 onClick={()=>
                    {
                        onReset();
                    } 
                
                }

            >no, me arrepenti</button>
        </React.Fragment>
    );
   }else{

    return(
        <React.Fragment>
            <button
                //en react cuando se trabaja con est
                onClick={()=>
                    {
                        setState({
                            ...state,
                            deleted:false,
                            confirmed: false,
                            value: '',

                        
                        })
                    } 
                
                }
            > resetear y volver atras</button>
           
        </React.Fragment>
    );

   }
    


}

export {UseState};