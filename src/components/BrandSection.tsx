import '../styles/brand-section.scss';

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: 'Nike', logo: '/brands/nike.png' },
  { name: 'Adidas', logo: '/brands/adidas.png' },
  { name: 'Apple', logo: '/brands/apple.png' },
  { name: 'Samsung', logo: '/brands/samsung.png' },
  { name: 'Xiaomi', logo: '/brands/xiaomi.png' },
];

export function BrandSection() {
  return (
    <section className="brand-section">

      <header className="brand-section__header">
        <h2>Navegue por marcas</h2>
      </header>

      <div className="brand-section__list">
        {brands.map((brand) => (
          <div key={brand.name} className="brand-section__item">
            <div className="brand-section__circle">
              <img src={brand.logo} alt={brand.name} />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}