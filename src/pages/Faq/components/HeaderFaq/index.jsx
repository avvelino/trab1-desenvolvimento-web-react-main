import logo from '../../../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom';
export function HeaderFaq(){
    return(
        <div class="wrapper">
            <header class="header">
                    <img class="logo" src={logo}/>
                

                <nav class="nav">

                    <NavLink to='/'>
                        <a href="" class="nav-link">Ínicio</a>
                    </NavLink>

                    <NavLink to='/'>
                    <a href="" class="nav-link">Cadastro</a>
                    </NavLink>
                </nav>
            </header>
	    </div>

    )
}