import React from 'react';

class HistorialOpciones extends React.Component{
    render(){
        return(
            <div class="recordatorio">
                <h3>Selección anterior: {this.props.seleccionAnterior}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>
                    {this.props.historial.map((opcion, id) => (
                        <li key={id}>{opcion}</li>
                    ))}
                </ul>
              </div>
        )
    }
}

export default HistorialOpciones;