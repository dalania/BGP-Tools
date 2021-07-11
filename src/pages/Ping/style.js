import styled from 'styled-components';
import {Form as Unform } from '@unform/web'




export const Container =  styled.section`
   display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 200px;
  >div{
  margin-top: 40vh;
}


`;
export const Content =  styled.main`
  width: 90%;
  
  /* max-width: 1150px; */
  /*max-width: 1300px; */
  background: #FFFFFF;
  margin-top: 90px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  margin-left: 10px;
  min-height: 250px;
  
  `;

export const Search =  styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-direction: wrap;
  flex-wrap: wrap;
  margin-top: 30px;

`;


export const Form = styled(Unform)`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  flex-wrap: wrap;
  border: none;

  select, input{
    flex: 1;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    background: none;
    margin: 15px;
    height: 35px;
    padding-left: 5px;
  }

  button{
    color: #FFFFFF;
    text-align:  center;
    width: 80px;
    border: none;
    height: 35px;
    margin: 15px;
    background: #1A345D;
    border-radius: 5px; 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover{
      filter: brightness(0.9);
    }
  }
 




`;
export const PingResult = styled.section`
width: 100%;
max-width: 850px;


margin: 20px auto;
background: rgba(204, 204, 204, 0.25);
border-radius: 5px;

p{

  margin: 10px;
  font-size: 1rem;
  width: 800px;
  text-align: justify;
 

}

p:nth-child(1){
  padding-top: 10px;
}

`;