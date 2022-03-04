import React from "react";
import { connect } from 'react-redux';

import Card from "./Card";

const mapStateToProps = state => (
    { numeros: state.numeros }
)

const Soma = props => {
    const { min, max } = props.numeros
    return (
        <Card title='Soma de Números' blue>
            <div>
                <span>Resultado:
                    <strong>{ min + max }</strong>
                </span>
            </div>
        </Card>
    )
}

export default connect(mapStateToProps)(Soma)