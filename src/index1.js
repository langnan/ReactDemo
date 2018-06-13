import React from 'react';
import ReactDOM from 'react-dom';
    function Welcome(props){
        return <h1>hHello,{props.name}<h1>
    }
    function App(){
        return (
            <div>
                <Welcome name="lining"/>
                <Welcome name="lijia">
                <Welcome name="libo">
            </div>
        )
    }

    ReactDom.render(
        <App/>,
        document.getElementById("box1") 
    )
export <App/>