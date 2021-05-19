import {useEffect, useState} from 'react';

import {Container, Content, Figure, Table} from './style';
import logoImage from '../../assets/logo.svg'
import Modal from '../../components/RoutesModal';
import api from '../../services/api'; 


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
  return(

    <>

      <Container>
        <Figure>
          <img src={logoImage} alt=""/>

        </Figure>
        <Content>
          <Table>
            <thead>

              <tr>
                <th>Peer</th>
                <th>AS</th>
                <th>Up/Down</th>
                <th>State</th>
                <th>PrefRcv</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             
            
              {peers &&  peers.peers.map(peer => (
                <tr>
                <td>{peer.Ip}</td>
                <td>{peer.Asn}</td>
                <td>{peer.Uptime}</td>
                <td>{peer.Status}</td>
                <td>{peer.TotalPrefix}</td>
                <td>
                {peer.Status === 'Established' ? <button  onClick={() => {handleOPenModal(peer.Ip,'advertised')}}> advertised-routes</button> : <button disabled> advertised-routes</button>}
                </td>
                <td>
                {peer.TotalPrefix < 30 && peer.Status === 'Established' ? <button  onClick={() => {handleOPenModal(peer.Ip,'received')}}> receive-routes</button> : <button disabled> receive-routes</button>}
                </td>
              </tr>

              )

              )}
              
            </tbody>

          </Table>
          <Modal receivedOrAdvertisement={receivedOrAdvertisement} routes={routes} isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
        </Content>
      </Container>
    </>
  );
}