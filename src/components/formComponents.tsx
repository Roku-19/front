import { Save } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import useFormHelper from "../helpers/useFormHelper";
import { saveForm } from "../services/api.service";
import FileUpload from "./FileUpload";

const Form: React.FC = () => {
    const states = useState({
        dni: "", nombres:"", apellidos:"", email:"", fecha_nacimiento:"", img:""
    });

    const {
        values,
        handleChange
    } = useFormHelper(states);

    function fnsaveForm(){
        saveForm(values).then(v =>{
            if(v.data.successed)
                window.location.href = "/formularios";
        });
    };

    return(
        <div className= "container shadow-sm rounded py-3 px-lg-5 px-sm-2 text-center">
            <h3 style={{marginBottom:10, marginTop: 10}}><b>Formulario</b></h3>
            <FileUpload setRoute={(e) => handleChange({target:{name:"img", value:e}}) } />
            <div className="row py-3">
                <div className="col-md-6 py-3">
                    <TextField variant="standard" name="dni" value={values.dni} onChange={handleChange} fullWidth label="DNI"  />
                </div>
                <div className="col-md-6 py-3">
                    <TextField variant="standard" name="fecha_nacimiento" type="date" defaultValue={"2022-08-24"} onChange={handleChange} fullWidth label="Fecha de Nacimiento"  />
                </div>
                <div className="col-md-6 py-3">
                    <TextField variant="standard" name="nombres" value={values.nombres} onChange={handleChange} fullWidth label="Nombres"  />
                </div>
                <div className="col-md-6 py-3">
                    <TextField variant="standard" name="apellidos" value={values.apellidos} onChange={handleChange} fullWidth label="Apellidos"  />
                </div>
                <div className="col-md-6 py-3">
                    <TextField variant="standard" autoComplete="off" name="email" value={values.email} onChange={handleChange} fullWidth label="Correo Electronico"  />
                </div>
            </div>
            <Button variant="contained" startIcon={<Save />} onClick={fnsaveForm} >Guardar</Button>
        </div>
    )
};

export default Form;