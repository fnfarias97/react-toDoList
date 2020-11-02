import React,{Component} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { tareas : ["Encender la PC", "Loggearse", "Empezar a trabajar"],
                        tareaActual: ""  }
    }

    levantarTareas(){
        axios.get('http://localhost:3030/tareas').then ((resp) => this.setState({tareas:resp.data, tareaActual:''}))
    }

    componentDidMount(){
        this.levantarTareas();
    }

    agregarTarea(){
        // this.setState({tareas: [...this.state.tareas, this.state.tareaActual],
        //                 tareaActual: ""});

        axios.post("http://localhost:3030/tareas", {nombre:this.state.tareaActual}).then((resp) => this.levantarTareas());
    }

    tareaChange(event){
        this.setState({tareaActual: event.target.value});
    }

    eliminarTarea(id){
        // this.setState({tareas: this.state.tareas.filter((item, idx) => idx != id)});

        axios.delete("http://localhost:3030/tareas/"+id).then((resp) => this.levantarTareas());
    }

    render() { 
        let {tareas} = this.state;

        return (<div>
            <ul className="list-group text-center">
                {
                    tareas.map( (item, index) => (
                        <li className="list-group-item" key={index}>
                            {item.nombre}

                            <button className="float-right btn btn-danger fa fa-trash" key={index} 
                                onClick={this.eliminarTarea.bind(this, item.id)}>

                            </button>
                        </li>
                        ))
                }
            </ul>

            <input type="text" className="form-control" placeholder="Ingrese una nueva tarea..."
                                value={this.state.tareaActual}
                                onChange={this.tareaChange.bind(this)}/>

            <button className="btn btn-primary btn-block mt-3 mb-3" 
                    onClick={this.agregarTarea.bind(this)}>Agregar Tarea</button>
        </div>  );
    }
}
 
export default TodoList;