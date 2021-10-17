import styled from 'styled-components';
import { FC } from 'react';
import { Button } from '../Button';

const StyledButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
`;

type ButtonLayoutProps = {
    buttons: string[];
};

const ButtonLayout: FC<ButtonLayoutProps> = ({ buttons }) => {
    return (
        <StyledButtonGrid>
            {buttons.map((content, index) => {
                return <Button key={index} children={content} />;
            })}
        </StyledButtonGrid>
    );
};
export { ButtonLayout };
