
import styled from 'styled-components';

export const Container =  styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1300px;
`;

export const Content =  styled.section`
 background: white;
  width: 100%;
  flex: 1;
  border-radius: 6px;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

`;

export const Figure =  styled.section`
  padding: 20px 10px;
 

`;

export const Table =  styled.table`
 width: 95%;
 max-width: 1300px;
 flex: 1;
 border-collapse: collapse;
 margin-top: 20px;
 
 
 
 thead{
   
   color: white;
   background: var(--backgroundTable)
 }

 tr{
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
 }
 td,th{
  text-align: left;
  padding-left: 20px;
  
   
 }
 th{
   height: 40px;
 }
 td{
   padding-top: 10px;
   padding-bottom: 10px;
   button{
     height: 30px;
     background: var(--backgroundTable);
     color: white;
     border-radius: 6px;
     border: none;
     width: 100%;
     max-width: 120px;
    text-align: center;
    &:disabled{
      background: #D5D8DE;
      color: var(--text);
      cursor: not-allowed;

    }

   }
   
 }
 tr:last-child{
   border-bottom: none;
 }


 


  

`;


