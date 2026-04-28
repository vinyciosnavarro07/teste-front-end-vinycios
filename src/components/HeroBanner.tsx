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
          Super ofertas para você
        </h1>

        <p className="hero__subtitle">
          Os melhores produtos com os melhores preços do mercado
        </p>

        <button className="hero__button">
          Comprar agora
        </button>

      </div>
    </section>
  );
}