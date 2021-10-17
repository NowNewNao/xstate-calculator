import { FC } from 'react';
import styled from 'styled-components';
import { ButtonLayout } from '../ButtonLayout';

const CalculatorWrapper = styled.div`
    width: 300px;
    height: auto;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    margin: 0 auto;
    margin-top 16px;
    font-family: 'Jura', sans-serif;
`;

type CalculatorProps = {
    buttons: string[];
};

const Calculator: FC<CalculatorProps> = ({ buttons }) => {
    return (
        <CalculatorWrapper>
            <ButtonLayout buttons={buttons} />
        </CalculatorWrapper>
    );
};

export { Calculator };
