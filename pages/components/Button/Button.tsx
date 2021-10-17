import styled from 'styled-components';
import React, { FC } from 'react';

const StyledButton = styled.button`
    padding: 10px;
    font-size: 22px;
    color: #eee;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    border-radius: 4px;
    border: 0;
    outline: none;
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
    &:hover {
        opacity: 1;
    }
    &:active {
        background: #999;
        box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);
    }

    &.three-span {
        grid-column: span 3;
        background-color: #0bbbd0;
    }

    &.symbol {
        background-color: #ff8c00;
    }
`;

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
    children: string;
};

const isSymbol = (content: string): boolean => {
    return '+-x/%'.indexOf(content) > -1;
};

const THREE_SPAN = 'CE';

const Button: FC<ButtonProps> = ({ type = 'button', children, ...props }) => {
    return (
        <StyledButton
            className={
                children === THREE_SPAN
                    ? 'three-span'
                    : isSymbol(children)
                    ? 'symbol'
                    : ''
            }
        >
            <span>{children}</span>
        </StyledButton>
    );
};

export { Button };
