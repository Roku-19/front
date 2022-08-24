import React from "react";
import Form from "../components/formComponents";

const Inicio : React.FC = () => {
    return(
        <div className="d-flex shadow-sm py-2 justify-content-center align-items-center" style={{height: window.innerHeight, overflowY:"hidden"}}>
            <Form />
        </div>
    )
};

export default Inicio;