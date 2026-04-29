import '../styles/brand-section.scss';
import brandImg from '../assets/logo.png';

export function BrandSection() {
  const brands = [
    { name: 'Econverse' },
    { name: 'Econverse' },
    { name: 'Econverse' },
    { name: 'Econverse' },
    { name: 'Econverse' }
  ];

  return (
    <section className="brand-section">

      <header className="brand-section__header">
        <h2>Navegue por marcas</h2>
      </header>

      <div className="brand-section__list">
        {brands.map((brand) => (
          <div key={brand.name} className="brand-section__item">
            <div className="brand-section__circle">
              <img src={brandImg} alt={brand.name} />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}