import React from "react";
import { connect } from 'react-redux';

import Card from "./Card";

const mapStateToProps = state => (
    { numeros: state.numeros }
)

const Sorteio = props => {
    const { min, max } = props.numeros
    return (
        <Card title='Sorteio de Número' purple>
            <div>
                <span>Resultado:
                    <strong>{ (parseInt(Math.random() * (max - min + 1) + min)) }</strong>
                </span>
            </div>
        </Card>
    )
}

export default connect(mapStateToProps)(Sorteio)