import Modal from 'react-modal';
import {HeaderModal, Table} from './style';
import { MdClose, } from "react-icons/md";


export default function RoutesModal({isOpen, onRequestClose}){
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
      <p> Receive Routes </p>
      <p> Número Total de Rotas: 19</p>

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
             
            

              <tr>
                <td>45.174.139.0/24</td>
                <td>10.240.32.22</td>
                <td>53153, 263940, 268865i</td>
              </tr>
              <tr>
                <td>45.174.139.0/24</td>
                <td>10.240.32.22</td>
                <td>53153, 263940, 268865i</td>
              </tr>
              <tr>
                <td>45.174.139.0/24</td>
                <td>10.240.32.22</td>
                <td>53153, 263940, 268865i</td>
              </tr>
              
              <tr>
                <td>45.174.139.0/24</td>
                <td>10.240.32.22</td>
                <td>53153, 263940, 268865i</td>
              </tr>
            </tbody>

          </Table>

    </Modal>

    </>

    
  );

}