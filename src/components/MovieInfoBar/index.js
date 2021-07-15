import React from 'react';
// Helpers
import { calcTime, convertMoney } from '../../helpers';
//styles
import { Wrapper, Content } from './MovieInfoBar.styles';

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p>Duración: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Presupuesto: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Ingresos: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

export default MovieInfoBar;