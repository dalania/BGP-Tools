import styled from 'styled-components';

export const HeaderModal =  styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  padding: 1rem;
  p{
    line-height: 1.4rem;
    
    text-transform: capitalize;
 


  }
  
  button{

    cursor: pointer;
    border: 0;
    background: none;
    font-size: 1rem;
    color: #405057;
  }
`;


export const Table =  styled.table`
  width: 95%;
  max-width: 1300px;
  flex: 1;
  border-collapse: collapse;
  margin: 20px;
 
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
    
  }
  
  tbody tr:nth-child(odd) {
    
    background-color: #f2f2f2;
    }
thead tr th{
  background: none;
}



  

`;