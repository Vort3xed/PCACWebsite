import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Contact</h4>
          </header>

          <div className='contact-units'>
            <ul className="shop-data-items">
              <li>
                <i className="icon-shipping"></i>
                <div className="data-item__content">
                  <h4>Contact Us</h4>
                  <p>Have a question, suggestion, or just want to reach out? We're here to listen!</p>
                  <a href="#" className="btn-contact"><i className="icon-right"></i></a>
                </div>
              </li>

              <li>
                <i className="icon-payment"></i>
                <div className="data-item__content">
                  <h4>Newsletter Sign-Up</h4>
                  <p>Stay updated on upcoming sustainability events & efforts around campus by signing up for the e-newsletter</p>
                  <a href="#" className="btn-contact"><i className="icon-right"></i></a>
                </div>
              </li>
            </ul>
            <ul className="shop-data-items">

              <li>
                <i className="icon-cash"></i>
                <div className="data-item__content">
                  <h4>Join the Discord</h4>
                  <p>Join our vibrant Discord community to connect with fellow sustainability enthusiasts</p>
                  <a href="#" className="btn-contact"><i className="icon-right"></i></a>
                </div>
              </li>

              <li>
                <i className="icon-materials"></i>
                <div className="data-item__content">
                  <h4>Follow us on Instagram</h4>
                  <p>Join our Instagram community to stay connected, and be inspired to make a difference.</p>
                  <a href="#" className="btn-contact"><i className="icon-right"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Contact</h4>
          </header>
          <div className="footer-items">
            <div className="footer-item">
              <i className="icon-cash"></i>
              <h4>Contact Us</h4>
              <p>Have a question, suggestion, or just want to reach out? We're here to listen!</p>
              <a href="#" className="btn-contact"><i className="icon-right"></i></a>
            </div>
            <div className="footer-item">
              <i className="icon-cash"></i>
              <h4>Newsletter Sign-Up</h4>
              <p>Stay updated on upcoming sustainability events & efforts around campus by signing up for the e-newsletter.</p>
              <a href="#" className="btn-contact"><i className="icon-right"></i></a>
            </div>
            <div className="footer-item">
              <i className="icon-cash"></i>
              <h4>Join the Discord</h4>
              <p>Join our vibrant Discord community to connect with fellow sustainability enthusiasts</p>
              <a href="#" className="btn-contact"><i className="icon-right"></i></a>
            </div>
            <div className="footer-item">
              <i className="icon-cash"></i>
              <h4>Follow us on Insta</h4>
              <p>Join our Instagram community to stay connected, and be inspired to make a difference.</p>
              <a href="#" className="btn-contact"><i className="icon-right"></i></a>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> PCAC</h6>
            <p>Purdue &gt; IU</p>
            <ul className="site-footer__social-networks">
              <li><a href="#"><i className="icon-facebook"></i></a></li>
              <li><a href="#"><i className="icon-twitter"></i></a></li>
              <li><a href="#"><i className="icon-linkedin"></i></a></li>
              <li><a href="#"><i className="icon-instagram"></i></a></li>
              <li><a href="#"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Information</li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Random Links</li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">pcac@gmail.com</a></li>
              <li><a href="#">Phone Number: +123456789</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>© 2021 PCAC® All rights reserved. Developed by Agneya Tharun</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer