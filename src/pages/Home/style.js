
import styled from 'styled-components';
export const Container =  styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 200px;

`;
export const Content =  styled.main`
  max-width: 980px;
  /*max-width: 1300px; */
  background: #FFFFFF;
  margin-top: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 400px;
  margin-right: 10px;
  margin-left: 10px;
  
  `;



export const Figure =  styled.section`
  padding: 20px 10px;
`;


export const Section =  styled.section`

p{
  padding-top: 4px;
  font-size: 1rem;
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
    

  th{
    padding: 10px 15px;
    text-align: left;
    font-family: 'RobotoMedium';
    font-size: .9rem;
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
    font-weight: 400;
    

    button{
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
    color: #33CC95;
    cursor: pointer;
    img{
      width: 20px;
    }
  }
  
    
    
  }
  tbody tr{
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  }

}

`;

