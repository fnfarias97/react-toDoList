import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const PieDePagina = ({año, empresa}) => (<footer style={{marginTop:"2em"}} className="alert alert-info text-right">
    CopyRight&copy;{año}-{empresa} todos los derechos reservados.
</footer> );

export default PieDePagina;