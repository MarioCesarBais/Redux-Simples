import React from "react";
import { connect } from "react-redux";

import './Intervalo.css';
import Card from "./Card";

const mapStateToProps = state => (
    { numeros: state.numeros }
)

const Intervalo = props => {
    const { min, max } = props.numeros
    return (
        <Card title='Intervalo de Números' red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={ min } readOnly />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={ max } readOnly />
                </span>
            </div>
        </Card>
    )
}

export default connect(mapStateToProps)(Intervalo)