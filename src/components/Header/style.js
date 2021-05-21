import styled from 'styled-components';

export const Container = styled.div`


`;

export const NavTop = styled.div`
width: 100%;
height: 60px;
background: var(--backgroundTable);
display: flex;
justify-content: space-between;
figure{
  margin-left: 24px;
}

`;

export const Logout = styled.div`
  
  margin-right: 24px;
  margin-top: 20px;
  color: #FFFFFF;
  p{
    text-align: center;
    display: flex;
    justify-content: center;
    
  }

  svg{
    color: #FFFFFF;
    font-size: 1rem;
    margin-right: 8px;
    font-weight: 400;
  }

  button{
    border: 0;
    background: transparent;
    color: #495057;

   
  }
  
`;

export const NavVertical = styled.nav`

  width: 100%;
  max-width:200px;
  
  position:fixed;
  height:100%;
  background:#FFFFFF;

`;

export const Ul = styled.ul`
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const Li =  styled.li`
  display: flex;
  list-style: none;
  margin-top:15px;
  color: #495057;
  font-size: 1rem;
  cursor:pointer;
  flex: 1;
  svg{
    margin-right: 10px;
    font-size: 1.2rem;
  }
  img{
    margin-right: 10px;
  }

  &:hover{
    flex: 1;
    border-radius: 6px;
    background:#F8F9FA;

  }
  a{
    display: flex;
    text-decoration: none;
    color: #495057;
    padding: 8px;
    flex: 1;
    
  }

  .active{
    border-radius: 6px;
    background:#F8F9FA;
    flex: 1;
  }
  
  
`;

