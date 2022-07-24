import React from "react";

import { Loading } from "./Loading";

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            
            error: false,
            loading: false,
            value: ''

        }


    }


    //estas funciones se ejecutan cada vez que se haga render


    //se ejecuta cuando se actualiza el estado
    componentDidUpdate(){
       // console.log('componentDidUpdate')

        if(!!this.state.loading){ //gracias a esta validacion no enta en un bucle infinito
            setTimeout(() => {

                //console.log("Haciendo la Validacion")


                if(this.state.value === SECURITY_CODE){

                     this.setState({error:false, loading: false});   
                    //setError(false)
                }else{
                    this.setState({error:true, loading: false});
                }


               
                //setLoading(false);

                ///console.log("terminando la Validacion")


            },3000);

           
        }

    }

    //cuando se haya rendererizado
    componentDidMount(){

        console.log('componentDidMount')


    }

    

    render() {

        return (
            <div>
                
                <h2> Eliminar {this.props.msj}</h2>
                <p> Por favor, escribe el codigo de seguridad </p>

                {
                    (this.state.error && !this.state.loading)&& (

                        <p>Error: el codigo es incorrecto</p>
                    )
                }

                {       
                    this.state.loading && (

                        <Loading/>
                    )

                }

                <input 
                    placeholder="Codigo de seguridad"
                    value={ this.state.value}
                    onChange = {(event) =>{
                    
                            this.setState({value: event.target.value})
                    }}
                 />
                <button
                    //onClick={()=> this.setState({error: !this.state.error})}
                    onClick={()=> this.setState({loading: true })}

                
                > Comprobar </button>

            </div>

        );


    }


}

export {ClassState}