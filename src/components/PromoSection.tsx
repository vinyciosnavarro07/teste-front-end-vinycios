import { PromoBanner } from './PromoBanner';
import '../styles/promo-section.scss';

export function PromoSection() {
  return (
    <section className="promo-section">

      <PromoBanner
        image="/images/banner1.jpg"
        title="Super ofertas"
        description="Os melhores produtos com desconto"
      />

      <PromoBanner
        image="/images/banner2.jpg"
        title="Novidades"
        description="Confira os lançamentos"
      />

    </section>
  );
}