import React,{useEffect, useState,useCallback} from 'react';

import {Container, Content, Section} from './style';
import searchSvg from '../../assets/search.svg';
import Modal from '../../components/RoutesModal';
import api from '../../services/api'; 
import Header from '../../components/Header'
import { PushSpinner } from "react-spinners-kit";


export default function Home(){

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [peers, setPeers] = useState(null);
  const [routes, setRoutes] = useState(null);
  const [asNames, setAsNames] = useState([]);

  const [receivedOrAdvertisement, setReceivedOrAdvertisement] = useState(null);

  const [loading, setLoading] = useState(false);


  const handleOPenModal = useCallback(async (peer,params) =>{
    setLoading(true);
    const response = await api.post(`/peers/${params}`,{'peer':peer})
    setRoutes(response.data)
    setReceivedOrAdvertisement(params);
    setLoading(false);
    setModalIsOpen(true);

  },[])
  

  function handleCloseModal(){
    setRoutes(null);
    setModalIsOpen(false);
  }

  const getAsName = useCallback (async ( peers ) => {

    const names = peers.map((peer) => 
       api.post('https://api.asrank.caida.org/v2/graphql',{ "query":`{ asn(asn:"${peer.Asn}"){ asn organization { orgName } } }`})
     )
    let asNames = await Promise.all(names);
    asNames = asNames.map((name)=> ( name.data.data.asn.asn >= 64512 && name.data.data.asn.asn <= 65534 ? "Private" :name.data.data.asn.organization.orgName))
    setAsNames(asNames)
  },[])

  useEffect(()=>{
    api.get('/peers').then(response => {
        setPeers(response.data)
        getAsName(response.data.peers)
    })
    .catch(error => console.error(error));

  },[getAsName]);

  

  

  return (
    <>
     <Header />
     
    <Container>
    {loading ? 
    <div>
      <div>
      <PushSpinner size={30}
                color="#686769"
                loading={loading}
                
      /> 

      </div>
      
    </div> : 
      <Content>

        <Section>
        <div className="tbl-header">
          <table>
            <thead>
              <tr>
              <th>Peer</th>
                <th>AS Name</th>
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
            {peers && peers.peers.lenght === asNames.lenght  &&  peers.peers.map((peer,index) => (
                  <tr key={peer.Ip}>
                  <td>{peer.Ip}</td>
                  <td>{asNames[index] && asNames[index].slice(0,17)}</td>
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
        <Modal loading={loading} receivedOrAdvertisement={receivedOrAdvertisement} routes={routes} isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
      </Content>}
    </Container>
    </>

  );
    
  
}