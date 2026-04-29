import { PromoBanner } from './PromoBanner';
import '../styles/promo-section.scss';

import banner1 from '../assets/parceiros.png';

export function PromoSection() {
  return (
    <section className="promo-section">

      <PromoBanner
        image={banner1}
        title="Parceiros"
        description="Confira nossos parceiros e aproveite as ofertas."
      />
      <PromoBanner
        image={banner1}
        title="Parceiros"
        description="Confira nossos parceiros e aproveite as ofertas."
      />

    </section>
  );
}