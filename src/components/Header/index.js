  import {NavLink} from 'react-router-dom';
  import {Container, NavTop, NavVertical, Ul, Li, Logout} from './style';
  import LogoBgp from '../../assets/logo.svg';
  import RouteSvg from '../../assets/route.svg';
  import ComputerSvg from '../../assets/computer.svg';
  import { AiOutlineHome } from 'react-icons/ai';
  import { RiRouteLine } from 'react-icons/ri';
  import {FiLogOut} from 'react-icons/fi';
  import {useAuth} from '../../hooks/auth';
  
export default function Header(){
  const { signOut } = useAuth();
 
  return(

    <Container>
      <NavTop>
        <figure>
          <img src={LogoBgp} alt="Logo BgpTools" />
        </figure>
        <Logout>
            <button onClick={signOut}> <FiLogOut /> Sair</button> 
        </Logout>

      </NavTop>

      <NavVertical>
        <Ul>

        <Li> 
            <NavLink activeclass="active" to="/home">
            <AiOutlineHome />
            Home
            </NavLink>
          </Li>

            <Li>
            <NavLink activeclass="active" to="/ping">
            <img src={ComputerSvg} alt=""></img>Ping

            </NavLink>
            </Li>
            <Li>
            <NavLink activeclass="active" to="/traceroute">
            <img src={RouteSvg} alt=""></img>Traceroute

            </NavLink>
            </Li>
            <Li>
            <NavLink  activeclass="active" to="/bgproute">
            <RiRouteLine />BGP Route

            </NavLink>
            </Li>
            
            </Ul>

            
      </NavVertical>

    </Container>
  );

}