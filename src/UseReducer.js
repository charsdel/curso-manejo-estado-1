import { render } from "@testing-library/react";
import React from "react";

const SECURITY_CODE = 'paradigma'

function UseReducer({msj}){

    //la funcion dispacth puede recibir 2 argumentos action.type (para escoger que estado va a usar) y payload

    const [state, dispacth ] = React.useReducer(reducer,initialState);


    const [value, setValue] = React.useState('');


    const [error, setError] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    console.log(value)

    
   

   

  /*   const onWrite = (newValue) =>{

        setState({
            ... state,

            value: newValue,

        });
    };
 */

   

  

   

    React.useEffect(() => {

       // console.log("empezando el efecto")
        if(!!state.loading){

            //
            //setError(false)

            setTimeout(() => {


                //comparamos el valor de inpur contra el codigo
                if(state.value === SECURITY_CODE){

                    dispacth({type: 'CONFIRM'});
                   
                }else{

                    dispacth({type: 'ERROR'});


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

                        dispacth({type: 'WRITE', payload: event.target.value});
                        //A ESTE DISPACTH HAY QUE PASARLE UN PAYLOAD

                        //onWrite(event.target.value);

                    }
                        
                    
                    }
                />
                <button
                

                //cuando en in
                onClick={() => {
                        //setError(false);
                      dispacth({type: 'CHECK'});
  
                     
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
                        dispacth({type: 'DELETE'});

                    } 
                
                }
            > si, eliminar</button>
            <button
                 onClick={()=>
                    {
                        dispacth({type: 'RESET'});

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
                        dispacth({type: 'RESET'});

                    } 
                
                }
            > resetear y volver atras</button>
           
        </React.Fragment>
    );

   }
    


}




const initialState ={

    value: '',
    error: false,
    loading: false,
    deleted:false,
    confirmed: false


};


//REDUCER USANDO IF
/*
const reducerIF = (state, action) => {
    if (action.type === 'ERROR') {
        return {
            ...state,
            error: true,
            loading: false,
        }
    } else if (action.type === 'CONFIRM') {
        return {
            ...state,
            error: false,
            loading: false,
            confirmed: true,
        }
    } else {
        return {
            ...state,
        }
    }
 }*/

//Usando switch case:

/*
 const reducerSWITCH = (state, action) => {
    switch (action.type) {
        case 'ERROR':
            return {
                ...state,
                error: true,
                loading: false,
            };
        case 'CONFIRM':
            return {
                ...state,
                error: false,
                loading: false,
                confirmed: true,
            };
        default:
            return {
                ...state,
            };
    }
 }*/

 //Usando objetos:

 const reducerOBJECT = (state,payload) => ({
    'ERROR': {
        ...state,
        error: true,
        loading: false,
    },
    'WRITE':{

        ...state,
        value: payload
    },
    'CONFIRM': {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    'CHECK':{
        
        ... state,
        loading: true,
    },
    'DELETE':{
        ...state,
        deleted:true,
    },
    'RESET':{
        ...state,
        confirmed:false,
        deleted: false,
        value: '',
    
    }

 })
  

 //NOTA: EL REDUCER DEBE ESTAR POR DEBAJO DEL COMPONENTE
 const reducer = (state, action) => {
    if (reducerOBJECT(state)[action.type]) {
        //en caso de que exista un action lo envia como en el caso de WRITE
        return reducerOBJECT(state,action.payload)[action.type];
    } else {
        return {
            ...state,
        }
    }
 }


 export {UseReducer};
