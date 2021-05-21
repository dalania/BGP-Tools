import styled from 'styled-components';
import {Form as Unform } from '@unform/web'




export const Container =  styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 100%;

`;

export const Figure = styled.figure`
margin-right: 100px;

img{
  
  height: 400px;

}


`;

export const CardLogin = styled.div`
text-align: center;


h2{
  color: var(--backgroundTable);
  font-weight: 300;
  font-size: 1.8rem;
 
  

}
p{
  margin-top: 20px;
  font-size: .8rem;
  color: #D2D9E2;

}

`;

export const Form = styled(Unform)`

  display: flex;
  flex-direction: column;
 

  input, button{
    width: 100%;
    max-width: 400px;
    border: 1px solid rgba(187, 187, 187, 0.25);
    height: 35px;
    border-radius: 6px;
    background: none;
    padding: 6px;
    margin-top: 20px;
  }

  button{
    border: none;
    background: var(--backgroundTable);
    color: white;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    transition: filter 0.2s;
    

    &:hover{
      filter: brightness(0.9);
    }
  }
`;