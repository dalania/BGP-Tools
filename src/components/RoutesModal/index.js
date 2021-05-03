import Modal from 'react-modal';
import {HeaderModal, Table} from './style';
import { MdClose, } from "react-icons/md";


export default function RoutesModal({isOpen, onRequestClose, routes,receivedOrAdvertisement}){
  return (

    <>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <HeaderModal>
      <p>
      <p> {receivedOrAdvertisement && receivedOrAdvertisement} Routes </p>
      <p> Número Total de Rotas: {routes && routes.length}</p>

      </p>
        <div>
        <button onClick={onRequestClose}>
          <MdClose />
        </button>

        </div>
        
       
        
      </HeaderModal>
      <Table>
            <thead>

              <tr>
                <th>Route</th>
                <th>Nexthop</th>
                <th>AsPath</th>
    
              </tr>
            </thead>
            <tbody>
             
            
              {routes && routes.Message}
              {routes && routes.length > 0 && routes.map((route) => (<tr>
                <td>{route.Route}</td>
                <td>{route.Nexthop}</td>
                <td>{route.AsPath.map( aspath =>(`${aspath}, `))}</td>
              </tr>))}
            </tbody>

          </Table>

    </Modal>

    </>

    
  );

}