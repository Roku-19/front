import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getForms, getImg, query } from "../services/api.service";

const Formularios: React.FC = () => {
  const [forms, setForms] = useState([]);
  const [upd, setupd] = useState(false);

  useEffect(() => {
    if (!upd) {
      setupd(true);
      getForms().then(v => {
        if (v.data.successed) {
          setForms(v.data.forms)
        };
      })
    };
  });

  function back(){
    window.location.href = "/"
  }
  return (
    <div className="container-fluid py-3">
      <h3 style={{ marginTop: 10, marginBottom: 10 }}>Formularios<Button startIcon={<ArrowBack />} onClick={back} >Volver</Button></h3>
      <div className="row">
        {forms.map((val: any, index) => <CardElement key={index} element={val} />)}
      </div>
    </div>
  )
};


interface ICE {
  element: any
}
const CardElement: React.FC<ICE> = ({ element }) => {
  const [i, seti] = useState("");
  const [upd, setupd] = useState(false);

  useEffect(() => {
    if (!upd) {
      seti(`${query}/img/${element.img}`)
    }
  }, [upd, i])
  return (
    <Card className="col-lg-4 col-md-6">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8">
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {element.nombres + " " + element.apellidos}
          </Typography>
          <Typography sx={{marginBottom:2}} variant="subtitle1" color="text.secondary" component="div">
            {element.dni}
          </Typography>
          <h6><b>Fecha de Nacimiento: </b>{element.fecha_nacimiento}</h6>
          <h6><b>Correo Electronico: </b>{element.email}</h6>
        </CardContent>
        </div>
        <div className="col-lg-4">
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={i}
            alt={element.nombres}
          />
        </div>
      </div>

    </Card>

  )
}

export default Formularios;