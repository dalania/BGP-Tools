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
  max-width: 1150px;
  /*max-width: 1300px; */
  background: #FFFFFF;
  margin-top: 120px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 10px;
  margin-left: 10px;
  
  `;

export const Search =  styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-direction: wrap;
  margin-top: 30px;

`;


export const Form = styled(Unform)`
  width: 100%;
  display: flex;
  
  font-size: 1rem;
  flex-direction: wrap;

  
 
  
  border: none;
 span{
  margin: 20px;
   width: 100%;
   display: flex;
   flex-direction: column;
   flex-direction: wrap;

 }
  
  input, select{
    font-size: 1rem;
    flex: 1;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding-left: 8px;
    margin-top: 3px;
    background: none;
  
  }
  option:nth-child(1){
   display: none;
 }
  label{
    font-size: 1rem;
    color: #495057;
    
  }
  input{
    outline: none;

  }
  button{
    margin: 20px;
    margin-top: 23px;

    height: 40px;
    width: 200px;
    border-radius: 5px;
    border: none;
    background-color: #1A345D;
    color: #FFFFFF;
    font-size: 1rem;
    text-align: center;
    align-items: center;
            
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