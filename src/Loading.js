import React from "react";



class Loading extends React.Component{


    constructor(){

        super();

    }

    //este se ejecuta para avisar que va a desaparaecer 
    componentWillUnmount() {
        console.log('componentWillUnmount')

    }
    render (){

        return(
            <p>cargando ...</p>

        );
    }
    
  }
  
  export { Loading };