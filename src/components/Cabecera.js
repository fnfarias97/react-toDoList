import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'

class Cabecera extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<header className="jumbotron text-center">
            <h1>{this.props.titulo}</h1>
            <h2>{this.props.subtitulo}</h2>
            <h3>{this.props.descripcion}</h3>
        </header>  );
    }
}
 
Cabecera.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo : PropTypes.string.isRequired,
    descripcion : PropTypes.string.isRequired
}

export default Cabecera;