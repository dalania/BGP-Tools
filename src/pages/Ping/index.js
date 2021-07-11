import React,{useEffect,useState, useRef, useCallback} from 'react';
import * as Yup from 'yup';
import Header from '../../components/Header'
import api from '../../services/api';
import { Container, Content, Search, Form, PingResult} from './style';
import Input from '../../components/FormValidation/input';
import Select from '../../components/FormValidation/select';
import { PushSpinner } from "react-spinners-kit";

export default function Ping(){

  const [ping,setPing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [source, setSource] = useState([]);
  const formRef = useRef(null);


  useEffect(()=>{
    api.post('/sources',{metodo: 'ping'}).then((response)=>setSource(response.data))
    .catch((error)=>console.log(error))
    

  },[]);




   const handleSubmit = useCallback(async (data, {reset}) =>{

    try{
      setPing([])
      setLoading(true);
      const schema = Yup.object().shape({
        source: Yup.string()
          
          .required('O Ip é obrigatório'),
        destination: Yup.string()
          
          .required('O Ip é obrigatório'),

      });
      

       const response = await api.post('/ping',{sourceip: data.source, destinationip: data.destination})
       setPing(response.data)
       setLoading(false)
      await schema.validate(data, {
        abortEarly: false,
      })

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

  

  return(

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
    (<Content>
    <Search>
        
        
        
      <Form ref={formRef} onSubmit={handleSubmit}> 
      
          
         
          <Select 
                  name="source"
                  options={source}
                  > 
                  <option selected> Selecione o ip de Origem</option>
                    {source.length>1 && source.map(origin =>(
                      <option key={origin} value={origin} >

                        {origin}
                      </option>
                  
                    ))}
                </Select>

         

          
          <Input type="text" name="destination" placeholder="Digite o ip de destino"/>

         
          
          <button> Buscar</button>
      </Form>

     

      </Search>

      <PingResult>
        {ping && ping.map(linePing => (
          <p>
            {linePing}

          </p>

        ))}
        

      </PingResult>
    
    </Content>)}

    
     
  </Container>
    </>
  );
}