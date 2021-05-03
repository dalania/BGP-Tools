import {createGlobalStyle,css} from 'styled-components';

export default createGlobalStyle`

*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
:root{
  --background: #D6D8E5;
  --backgroundTable: #1A345D;
  --text: #495057;

}

button{
  cursor:pointer;
  background: none;
}

html{
  @media (max-width:1080px){
    font-size: 93.75%;
  }
  @media (max-width:720px){
    font-size:87.5%;
  }
}

body{
  font-family: 'Roboto', sans-serif;
  background: var(--background);
  ${(props) => props.Theme.background && css`
  background: white;
  `}

  color: #495057;
}

/* Modal */

.react-modal-overlay{
  width: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
 
  background: rgba(0,0,0, 0.5);

}

.react-modal-content{
  overflow-y: auto;
  margin-top: 250px;
  width: 100%;
  max-width: 900px;
  background: #FFFFFF;
  border-radius: 6px;
  outline: none;
  color: #495057;
  height: 500px;
  /* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
  
  }

`;