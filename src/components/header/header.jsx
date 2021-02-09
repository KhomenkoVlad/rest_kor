import { NavLink } from 'react-router-dom';

const HeaderNav = () =>
  <nav>
    <ul className="navigation">
      <li className="navigation__item"><NavLink exact to='/' className='link navigation__link' activeClassName="navigation__link_active">ГЛАВНАЯ</NavLink></li>
      <li className="navigation__item"><NavLink to='/menu' className='link navigation__link' activeClassName="navigation__link_active">МЕНЮ</NavLink></li>
      <li className="navigation__item"><NavLink to='/about' className='link navigation__link' activeClassName="navigation__link_active">О НАС</NavLink></li>
      <li className="navigation__item"><NavLink to='/contact' className='link navigation__link' activeClassName="navigation__link_active">КОНТАКТЫ</NavLink></li>
      <li className="link navigation__link navigation__item-lang">UA</li>
    </ul>
  </nav>

export const HeaderHome = () =>
  <header className="header">
    <HeaderNav />
  </header>

export const Header = () =>
  <header className="header header_sticky">
    <HeaderNav />
  </header>