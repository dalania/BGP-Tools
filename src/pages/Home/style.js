
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
 width: 90%;
  background: #FFFFFF;
  margin-top: 90px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 520px;
  margin-right: 10px;
  margin-left: 10px;
  
  `;


export const Table = styled.table`

    width:100%;
    table-layout: fixed;
    color: #495057;
    border-collapse: collapse;
    text-align: left;
    

  th{
    padding: 10px 15px;
    text-align: left;
    font-family: 'RobotoMedium';
    font-size: 1rem;
 
    color: #495057;
    
  }

  td{
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    margin: 15px;
    padding-left: 15px;
    line-height: 2rem;
    text-align: left;
    vertical-align:middle;
    font-weight: 400;
    font-size: .875rem;
    font-size: .9rem;
    font-weight: 400;
    
  }

tr{
  &:nth-child(even){
      background-color: #F8F9FA;
    }
}

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


`;
export const Figure =  styled.section`
  padding: 20px 10px;
`;


export const Section =  styled.section`

p{
  padding-top: 4px;
  font-size: .9rem;
  color: #495057;
}

margin: 10px;



  


`;

