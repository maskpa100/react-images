import s from './Header.module.css';
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className={s.header}>
        <div className={s.row}>
            <div>
                <a href="/">
                    <img src="/img/logo.png" alt=""/>
                </a>
            </div>
            <ul className={s.list}>
                <li>
                    <NavLink to="/my_images" style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>Мои изображения</NavLink>
                </li>
                <li>
                    <NavLink to="/help" style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>Помощь</NavLink>
                </li>
                <li>
                    <NavLink to="/search" style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>Поиск</NavLink>
                </li>
                <li>
                    <NavLink to="/login" style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>Вход</NavLink>
                </li>
                <li>
                    <NavLink to="/registration" style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>Регистрация</NavLink>
                </li>
            </ul>
        </div>
    </header>  
  );
}

export default Header;