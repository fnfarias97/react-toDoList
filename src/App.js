import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cabecera from './components/Cabecera';
import PieDePagina from './components/PieDePagina'
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (<div>
      <Cabecera titulo="Curso de React" subtitulo="Clase 2" descripcion="ToDo List Demo"/>
      
      <main className="container">
        <TodoList />
      </main>
      

      <PieDePagina empresa="Educacion IT" año={2020}/>
    </div>  );
  }
}

export default App;
