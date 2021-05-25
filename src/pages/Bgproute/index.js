import {useEffect, useState} from 'react';


import api from '../../services/api'; 
import Header from '../../components/Header'
import {Container, Content, Section} from './style';


export default function Bgproute(){

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [peers, setPeers] = useState(null);
  const [routes, setRoutes] = useState(null);
  const [receivedOrAdvertisement, setReceivedOrAdvertisement] = useState(null);

  const [loading, setLoading] = useState(false);


 

  useEffect(()=>{
    api.get('/peers').then(response => setPeers(response.data))
    .catch(error => console.error(error));

  },[]);
  return (
    <>
     <Header />
    
    <Container>
    
      <Content>

        <Section>
        <div className="tbl-header">
          <table>
            <thead>
              <tr>
              <th>Coluna</th>
              <th>Coluna</th>
              <th>Coluna</th>
              <th>Coluna</th>
              <th>Coluna</th>
              <th>Coluna</th>
              <th>Coluna</th>
              <th>Coluna</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="tbl-content">
          <table>
          <tbody>
           
                  <tr>
                    <td>lINHA</td>
                    <td>lINHA</td>
                    <td>lINHA</td>
                    <td>lINHA</td>
                    <td>lINHA</td>
                    <td>lINHA</td>
                    <td>lINHA</td>
                  
                  
                </tr>
                

                

                
              
            </tbody>
            </table>


         
        </div>
       

        </Section>
       
      </Content>
    </Container>
    </>

  );
    
  
}