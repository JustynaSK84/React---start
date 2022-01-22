import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import styles from './Header.scss';
import { settings, faqSubPage, infoSubPage, mainPage } from '../../data/dataStore';
import Search from '../Search/Search';

class Header extends React.Component {

  render() {
    const {icon} = settings.headerIcon;
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{mainPage.navText}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{infoSubPage.navText}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{faqSubPage.navText}</NavLink>
            </nav>
          </div>
          <Search/>
        </Container>
      </header>
    );
  }

}

export default Header;