import styled, {css} from 'styled-components';

const Button = styled.button`
    color: white;
    background: ${props => props.secondary ? props.theme.secondaryColor : props.theme.secondaryColor};
    font-weight: bold;
    box-shadow: none;
    border: none;
    width: 100%;
    display: block;
    white-space: none;

    ${props => props.large ? css`
    padding: 16px;
    border-radius: 8px;
    font-size: 2em;
    ` : css`
    padding: 8px;
    border-radius: 4px;
    font-size: 1em;
    `};

    &:disabled{
        background: #eee;
        color: #666;
    }
`;

export {Button};