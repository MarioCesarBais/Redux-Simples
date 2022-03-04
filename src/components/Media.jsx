import React from "react";
import Card from "./Card";

export default props => {
    const min = props.min
    const max = props.max
    return (
        <Card title='Média de Números' green>
            <div>
                <span>Resultado:
                    <strong>{(min + max) / 2}</strong>
                </span>
            </div>
        </Card>
    )
}