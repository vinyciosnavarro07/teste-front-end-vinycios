import '../styles/footer.scss';

export function Footer() {
  return (
    <footer className="footer">

      <div className="footer__container">

        <div className="footer__brand">
          <h2 className="footer__logo">Econverse</h2>

          <p className="footer__description">
            A melhor plataforma para encontrar produtos com os melhores preços do mercado.
          </p>

          <div className="footer__social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
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