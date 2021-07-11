import {Form as Unform } from '@unform/web'

import styled from 'styled-components';
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
   width: 60%;
  
  /* max-width: 1150px; */
  /*max-width: 1300px; */
  background: #FFFFFF;
  margin-top: 90px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* margin-right: 10px;
  margin-left: 10px; */
  min-height: 200px;
  border-radius: 6px;
  `;






export const Section =  styled.section`

p{
  padding-top: 4px;
  font-size: .9rem;
  color: #495057;
}

margin: 10px;

.tbl-content{
    max-height:300px;
    overflow-y:auto;
    margin-top: 5px;
    border-top: 1px solid rgba(255,255,255,0.3);
    color: #495057;
    

    ::-webkit-scrollbar-track {
    background-color: #dad7d7;
    border-radius: 30px;
    }
    ::-webkit-scrollbar {
      width: 6px;
      border-radius: 30px;
      background: #dad7d7;
    }
    ::-webkit-scrollbar-thumb {
      background: #808080;
      border-radius: 30px;
    }
  }

  table{
    width:100%;
    table-layout: fixed;
    color: #495057;
    border-collapse: collapse;
    text-align: left;
    
  .best{
    td{
      font-weight: 700;
    }
  }

  th{
    padding: 10px 15px;
    text-align: left;
    font-family: 'RobotoMedium';
    font-size: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    color: #495057;
    
  }

  td{
    margin: 15px;
    padding-left: 15px;
    line-height: 2rem;
    text-align: left;
    vertical-align:middle;
    font-weight: 400;
    font-size: .875rem;
    font-size: .9rem;
    font-weight: 400;
    

    button{
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
    
    cursor: pointer;
    margin-top: 10px;
    img{
      width: 20px;
    }
    &:disabled{
       cursor: not-allowed;
    }
  }
  
    
    
  }
  tbody tr{
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

}

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
  width: 60%;
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

