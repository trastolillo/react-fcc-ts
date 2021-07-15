import React from 'react';
// Helpers
import { calcTime, convertMoney } from '../../helpers';
// Styles
import { Wrapper, Content } from './MovieInfoBar.styles';
// Types
type Props = {
    time: number;
    budget: number;
    revenue: number;
}

const MovieInfoBar: React.FC<Props> = ({ time, budget, revenue }) => (
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