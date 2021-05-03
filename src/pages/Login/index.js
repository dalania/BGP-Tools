import React, {useRef} from 'react';
import {  useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import {Container, Figure, CardLogin, Form} from './style';
import imageLogin from '../../assets/imageLogin.svg';
import Input from './input';
import Footer from '../../components/Footer';
import {theme} from '../../styles/themes'
import {useAuth} from '../../hooks/auth';

export default function Login(){
  theme.background =  true

  const { signIn } = useAuth();
  const formRef = useRef(null);
  const history = useHistory();

  async function handleSubmit(data, {reset}){

    try{
      const schema = Yup.object().shape({
        login: Yup.string().min(2, 'login incorreto')
        .required('O login  é obrigatório'),

          password: Yup.string().min(1, 'password incorreto')
          .required('A senha  é obrigatória')

      });
      await schema.validate(data, {
        abortEarly: false,
      })
      await signIn({
        email: data.login,
        password: data.password,
      });
      history.push('/home');
      
      

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

  }

  return(


    

    <>
    <Container>

      <Figure>
        <img src={imageLogin} alt=""/>

      </Figure>

      <CardLogin>
        <h2> Faça Login</h2>
        <p> Entre com suas credencias de acesso para acessar sua conta</p>
       
        <Form ref={formRef} onSubmit={handleSubmit}> 
         
         <Input type="text" name="login" placeholder="Login"/>
         
         <Input type="password" name="password" placeholder="Password"/>
         <div> 
         <button>Entrar</button>

         </div>
   </Form>
      </CardLogin>

      

    </Container>
    </>
  );
}