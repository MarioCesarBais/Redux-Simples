import React from "react";
import { connect } from "react-redux";

import './Intervalo.css';
import Card from "./Card";
import { alterarNumeroMinimo, alterarNumeroMaximo } from "../store/actions/numerosAction";

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
                    <input type="number" value={ min }
                        onChange={e => props.alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={ max }
                        onChange={e => props.alterarMaximo(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(NovoNumero) {
            // action creator
            const action = alterarNumeroMinimo(NovoNumero)
            dispatch(action)
        },
        alterarMaximo(NovoNumero) {
            const action = alterarNumeroMaximo(NovoNumero)
            dispatch(action)
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Intervalo)