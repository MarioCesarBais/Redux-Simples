import React from "react";
import Card from "./Card";

export default props => {
    const { min, max } = props
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    return (
        <Card title='Sorteio de Número' purple>
            <div>
                <span>Resultado:
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}