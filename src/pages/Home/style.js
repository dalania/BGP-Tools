
import styled, {css} from 'styled-components';
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
  border-radius: 6px;
  
  `;


export const Table = styled.table`

    width:100%;
    table-layout: fixed;
    color: #495057;
    border-collapse: collapse;
    text-align: left;
    /* overflow:hidden;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px; */
    

    thead{
      
      background-color: #DCDCDC;
      border-radius: 6px;
    }
    

  th{
    white-space: nowrap;
    color: #495057;
    padding: 10px 15px;
    text-align: left;
    font-family: 'RobotoMedium';
    font-size: 1rem;
 
    
    
  }

  td{
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
   
   padding-left: 15px;
    line-height: 1.8rem;
    text-align: left;
   /*  vertical-align:middle; */
    font-weight: 400;
   
    font-size: .9rem;
    font-weight: 400;
    white-space: nowrap;

    
    
  }
  .center{
    
      text-align: center;
    
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

export const P =  styled.p`
    text-align: center;
    width: 85px;
    border-radius: 5px;
   
    font-weight: 500;

    ${props => props.Established === "Established" && css `
      color: rgba(76, 175, 80, 1);
      background: rgba(111, 207, 151, 0.2);
    
    `}

    ${props => props.Established === "Active" && css `
      background: rgba(237, 85, 100, 0.2);
      color: rgba(237, 85, 100, 1);
    `}

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

