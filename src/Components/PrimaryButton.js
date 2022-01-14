import React from 'react'
import styled from 'styled-components';

function PrimaryButton({title}) {
    return (
        // <PrimaryButtonStyled href="/Abhishek.pdf" download>
        <PrimaryButtonStyled href="/Sharoof_Khan.pdf" download>
            {title}
        </PrimaryButtonStyled>
              
    )
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--primary-color);
  padding: 0.8rem 2.5rem;
  color: white;
  cursor: pointer;
  margin-top: 2%;
  width: 66%;
  text-align: center;

  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.2rem;
    transition: all 0.4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity: 0.7;
  }
  &:hover::after {
    width: 100%;
    background-color: var(--white-color);
  }
  @media screen and ( min-width: 100px) and (max-width: 750px ) {
    width: 100%;
  }
  @media screen and ( min-width: 751px) and (max-width: 1400px ) {
    width: 80%;
  }
  /* @media screen and (max-width: 768px) {
    width: 70%;
  } */
`;


export default PrimaryButton;
