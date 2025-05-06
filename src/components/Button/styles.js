import styled, {css}  from "styled-components";

const buttonStyles = css`
border: 2px solid #ffffff;
background: transparent;
color: #ffffff;
border-radius: 30px;
padding: 10px 20px;
cursor: pointer;
font-size: 16px;
font-weight: 500;

&:hover {
    color: #ff0000;
    background: #ffffff;
}
`

export const ButtonWhite = styled.button`
${buttonStyles}

`
export const ButtonRed = styled.button`
${buttonStyles}
background: #ff0000;
border: 4px solid transparent;
background: #ff0000;
color: #ffffff;

&:hover {
    box-shadow: 0px 0px 7px 15px rgb(255 0 0 /30%);
   
}
`