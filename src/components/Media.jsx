import React from "react";
import { connect } from 'react-redux';
import Card from "./Card";

const Media = props => {
    const { min, max } = props.numeros
    return (
        <Card title='Média de Números' green>
            <div>
                <span>Resultado:
                    <strong>{ (min + max) / 2 }</strong>
                </span>
            </div>
        </Card>
    )
}

const mapStateToProps = state => (
    { numeros: state.numeros }
)

export default connect(mapStateToProps)(Media)