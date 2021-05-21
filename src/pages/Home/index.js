import {useEffect, useState} from 'react';

import {Container, Content, Figure, Table, Section} from './style';
import logoImage from '../../assets/logo.svg';
import searchSvg from '../../assets/search.svg';
import Modal from '../../components/RoutesModal';
import api from '../../services/api'; 
import Header from '../../components/Header'

export default function Home(){

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [peers, setPeers] = useState(null);
  const [routes, setRoutes] = useState(null);
  const [receivedOrAdvertisement, setReceivedOrAdvertisement] = useState(null);

  const [loading, setLoading] = useState(false);


  function handleOPenModal(peer,params){
    setLoading(true);
    api.post(`/peers/${params}`,{'peer':peer}).then(response => setRoutes(response.data))
    .catch(error => console.error(error));
    setReceivedOrAdvertisement(params);
    setLoading(false);
    setModalIsOpen(true);

  }
  

  function handleCloseModal(){
    setRoutes(null);
    setModalIsOpen(false);
  }

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
              <th>Peer</th>
                <th>AS</th>
                <th>Up/Down</th>
                <th>State</th>
                <th>PrefRcv</th>
                <th>advertised-routes</th>
                <th>receive-routes</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="tbl-content">
          <table>
          <tbody>
            {peers &&  peers.peers.map(peer => (
                  <tr>
                  <td>{peer.Ip}</td>
                  <td>{peer.Asn}</td>
                  <td>{peer.Uptime}</td>
                  <td>{peer.Status}</td>
                  <td>{peer.TotalPrefix}</td>
                  <td>
                  {peer.Status === 'Established' ? <button  onClick={() => {handleOPenModal(peer.Ip,'advertised')}}><img src={searchSvg} alt="Pesquisar" /> </button> : <button disabled> <img src={searchSvg} alt="Pesquisar" /></button>}
                  </td>
                  <td>
                  {peer.TotalPrefix < 30 && peer.Status === 'Established' ? <button  onClick={() => {handleOPenModal(peer.Ip,'received')}}> <img src={searchSvg} alt="Pesquisar" /></button> : <button disabled> <img src={searchSvg} alt="Pesquisar" /></button>}
                  </td>
                </tr>

                )

                )}
              
            </tbody>
            </table>


         
        </div>
        <p> Total Peers: {peers && peers.stastistic.TotalEstablished } - Estabelecido: {peers && peers.stastistic.TotalPeers } </p>

        </Section>
       
      
       
       

      </Content>
    </Container>
    </>

  );
    
  
}