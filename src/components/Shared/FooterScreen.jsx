import './styles/footerScreen.css'

const FooterScreen = () => {
  return (
    <footer className="footer">
      <p className='footer__text'>&copy; Academlo 2022</p>
      <ul className="redes">
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="redes__items">
          <a href="" className="redes__links">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
      <p></p>
       <div className="footer_name">
      <p><i className='bx bxl-netlify'></i><b> Made by Yeizer Marrugo </b> <i className='bx bxl-github' ></i></p>
      </div> 
        
       
    </footer>
  );
};

export default FooterScreen;