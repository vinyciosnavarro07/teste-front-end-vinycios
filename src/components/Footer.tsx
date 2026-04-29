import '../styles/footer.scss';
import logoImg from '../assets/logo.png';
import instagramImg from '../assets/icons/instagram.png';
import facebookImg from '../assets/icons/facebook.png';
import linkedinImg from '../assets/icons/linkedin.png';

export function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        <div className="footer__brand">
          <img src={logoImg} alt="Econverse" className="footer__logo-img" />


          <p className="footer__description">
            A melhor plataforma para encontrar produtos com os melhores preços do mercado.
          </p>

          <div className="footer__social">
            <a href="#">
              <img src={instagramImg} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebookImg} alt="Facebook" />
            </a>
            <a href="#">
              <img src={linkedinImg} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer__columns">

          <div className="footer__column">
            <h3>Institucional</h3>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Movimento</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Ajuda</h3>
            <ul>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Fale conosco</a></li>
              <li><a href="#">Perguntas frequentes</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3>Termos</h3>
            <ul>
              <li><a href="#">Termos e condições</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Troca e devolução</a></li>
            </ul>
          </div>

        </div>

      </div>

      <div className="footer__bottom">
        <p>© 2026 Econverse. Todos os direitos reservados.</p>
      </div>

    </footer>
  );
}