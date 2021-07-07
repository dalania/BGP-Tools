import {useEffect, useState,useRef,useCallback} from 'react';
import * as Yup from 'yup';
import Input from '../../components/FormValidation/input';
import api from '../../services/api'; 
import Header from '../../components/Header'
import {Container, Content, Section,Form,Search} from './style';


export default function Bgproute(){

  const [routes,setRoutes] = useState([]);
  const [bgpRouteLoading, setBgpRouteLoading] = useState(false)
  const formRef = useRef(null);



 

  useEffect(()=>{

  },[]);

  const handleSubmit = useCallback(async (data, {reset}) =>{

    try{
      setRoutes([])
      const schema = Yup.object().shape({
        destination: Yup.string()
          
          .required('O Ip é obrigatório'),

      });
      
        await schema.validate(data, {
          abortEarly: false,
        })
       const response = await api.post('/bgproutes',{ destinationip: data.destination})
       setRoutes(response.data)
       setBgpRouteLoading(true)

      formRef.current.setErrors({})
        reset();
    }catch(err){
      if(err instanceof Yup.ValidationError ){
        const errorMessages = {

        };

        err.inner.forEach(error =>{
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);

      }

    }

  },[]);
  return (
    <>
     <Header />
    
    <Container>
    
      <Content>

      {  !bgpRouteLoading &&    

        <Search>
        
        
        
          <Form ref={formRef} onSubmit={handleSubmit}> 
          
            
    
              <span>
              <Input type="text" name="destination" placeholder="Digite o ip de destino"/>
    
              </span>
              
              <button> Consultar</button>
          </Form>
  
       
  
        </Search>}

        {bgpRouteLoading && <Section>
        <div className="tbl-header">
          <table>
            <thead>
              <tr>
              <th>Prefix</th>
              <th>As-Path</th>
              <th>Next-Hop</th>
              <th>Weight</th>
              <th>Local-Preference</th>
              <th>Communities</th>
              <th>Peer</th>
              <th>Age</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="tbl-content">
          <table>
          <tbody>
          
          { routes.map((route)=> (
             <tr className={route.best ? 'best' : ''} >
             <td>{route.rota}</td>
             <td>{route.aspath.map((as)=> `${as}-`)}</td>
             <td>{route.nexthop}</td>
             <td>{route.weight}</td>
             <td>{route.localpref}</td>
             <td>{route.community}</td>
             <td>{route.peer}</td>
             <td>{route.age}</td>
           
           
         </tr>
          ))
             

          }
              
                

                

                
              
            </tbody>
            </table>


         
        </div>
       

        </Section>}
       
      </Content>
    </Container>
    </>

  );
    
  
}