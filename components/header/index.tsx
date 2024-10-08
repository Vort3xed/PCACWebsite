import { useState, useEffect, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
// import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';

type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const arrayPaths = ['/'];  

  const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if(!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return(
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <a><h1 className="site-logo">
            
            {
              onTop ? 
              <img src="/images/PCAC_logo.png" alt="PCAC" className="site-logo" />
              : 
              <img src="/images/PCAC_logo_dark.png" alt="PCAC" className="site-logo" />
            }
            
            </h1></a>
        </Link>
        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/getinvolved">
            <a>Get Involved</a>
          </Link>
          <Link href="/campusinfo">
            <a>Campus Info</a>
          </Link>
          <button className="site-nav__btn"><p>Account</p></button>
        </nav>

        <div className="site-header__actions">
          <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
            <form className={`search-form`}>
              <i className="icon-cancel" onClick={() => setSearchOpen(!searchOpen)}></i>
              <input type="text" name="search" placeholder="What are you looking for?" />
            </form>  
            <i onClick={() => setSearchOpen(!searchOpen)}  className="icon-search"></i>
          </button>
          {/* <Link href="/cart">
            <button className="btn-cart">
              <i className="icon-cart"></i>
              {cartItems.length > 0 && 
                <span className="btn-cart__count">{cartItems.length}</span>
              }
            </button>
          </Link>
          <Link href="/login">
            <button className="site-header__btn-avatar"><i className="icon-avatar"></i></button>
          </Link>*/}
          <button 
            onClick={() => setMenuOpen(true)} 
            className="site-header__btn-menu">
            <i className="btn-hamburger"><span></span></i>
          </button> 
        </div>
      </div>
    </header>
  )
};


export default Header;
