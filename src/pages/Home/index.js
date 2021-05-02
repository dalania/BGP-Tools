import {useState} from 'react';

import {Container, Content, Figure, Table} from './style';
import logoImage from '../../assets/logo.svg'
import Modal from '../../components/RoutesModal';

export default function Home(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function handleOPenModal(){
    setModalIsOpen(true);
  }

  function handleCloseModal(){
    setModalIsOpen(false);
  }
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
                <th>IP</th>
                <th>AS</th>
                <th>Uptime</th>
                <th>Status</th>
                <th >TotalPrefix</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
             
            

              <tr>
                <td>10.0.0.125</td>
                <td>61832</td>
                <td>0288h51m</td>
                <td>Connect</td>
                <td>0</td>
                <td>
                  <button onClick={handleOPenModal}> advertised-routes</button>
                </td>
                <td>
                <button onClick={handleOPenModal}> receive-routes</button>
                </td>
              </tr>

              <tr>
                <td>10.0.0.125</td>
                <td>61832</td>
                <td>0288h51m</td>
                <td>Connect</td>
                <td>0</td>
                <td>
                  <button onClick={handleOPenModal}> advertised-routes</button>
                </td>
                <td>
                <button onClick={handleOPenModal}> receive-routes</button>
                </td>
              </tr>

              <tr>
                <td>10.0.0.125</td>
                <td>61832</td>
                <td>0288h51m</td>
                <td>Connect</td>
                <td>0</td>
                <td>
                  <button onClick={handleOPenModal}> advertised-routes</button>
                </td>
                <td>
                <button onClick={handleOPenModal}> receive-routes</button>
                </td>
              </tr>

              <tr>
                <td>10.0.0.125</td>
                <td>61832</td>
                <td>0288h51m</td>
                <td>Connect</td>
                <td>0</td>
                <td>
                  <button onClick={handleOPenModal}> advertised-routes</button>
                </td>
                <td>
                <button onClick={handleOPenModal}> receive-routes</button>
                </td>
              </tr>
             
            </tbody>

          </Table>
          <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} />
        </Content>
      </Container>
    </>
  );
}