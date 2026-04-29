import '../styles/hero-banner.scss';

import bannerImg from '../assets/banner.png';

export function HeroBanner() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="hero__content">

        <h1 className="hero__title">
          Venha conhecer nossas<br></br>promoções
        </h1>

        <p className="hero__subtitle">
          <span className='hero__span__color'>50% off</span> nos produtos
        </p>

        <button className="hero__button">
          Ver Produto
        </button>

      </div>
    </section>
  );
}