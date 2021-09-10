import React from 'react';
import Historia from './components/Historia';
import Opciones from './components/Opciones';
import HistorialOpciones from './components/HistorialOpciones';
import SweetAlert from './components/SweetAlert.jsx';
import data from './components/data.json';
import './App.css';


class App extends React.Component {
  
    constructor(props){
        super(props);
        this.historial = [];
        this.state={
            seleccionAnterior: "",
            contador: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      this.setState({
        id: data[0].id,
        historia: data[0].historia,
        opcion1: data[0].opciones.a,
        opcion2: data[0].opciones.b
    })
  }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.contador !== this.state.contador) {
          this.historial.push(this.state.seleccionAnterior);
        }
      }

  
    //función para "manejar" el estado del constructor, que hace referencia al "Historial de Opciones":
    handleClick =(choice)=>{
        const id= choice.target.id;
        if (this.state.contador >= 7) {
            SweetAlert("Fin", "¡Muchas gracias!")

        } else if (id === "A" && this.state.seleccionAnterior !== "A") {
            this.setState({
              contador: this.state.contador + 1,
              seleccionAnterior: "A"
            });
          } else if (id === "A" && this.state.seleccionAnterior === "A") {
            this.setState({
              contador: this.state.contador + 2
            });          
          } else if (id === "B" && this.state.seleccionAnterior === "A") {
            this.setState({
              contador: this.state.contador + 3,
              seleccionAnterior: "B"
            });
          } else if (id === "B") {
            this.setState({
              contador: this.state.contador + 2,
              seleccionAnterior: "B"
            });
          }
          console.log(this.historial);
    }

    render(){
        return(
            <div className="layout">
              <Historia fragmento= {data[this.state.contador].historia} />
            
              <Opciones handleClick = {this.handleClick} 
                opcionA={data[this.state.contador].opciones.a} 
                opcionB={data[this.state.contador].opciones.b}/>
    
              <HistorialOpciones
                seleccionAnterior={this.state.seleccionAnterior}
                historial={this.historial}
              />
        
        </div>
        )
    }

}

export default App;
