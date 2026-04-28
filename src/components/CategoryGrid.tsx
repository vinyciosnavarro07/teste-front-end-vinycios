import '../styles/category-grid.scss';

type Category = {
  name: string;
  icon: string;
};

const categories: Category[] = [
  { name: 'Tecnologia', icon: '💻' },
  { name: 'Supermercado', icon: '🛒' },
  { name: 'Bebidas', icon: '🍹' },
  { name: 'Ferramentas', icon: '🔧' },
  { name: 'Saúde', icon: '💊' },
  { name: 'Esporte e Fitness', icon: '🏋️' },
  { name: 'Moda', icon: '👕' },
];

export function CategoryGrid() {
  return (
    <section className="category-grid">

      {categories.map((item) => (
        <div key={item.name} className="category-grid__item">

          <div className="category-grid__icon">
            {item.icon}
          </div>

          <span className="category-grid__label">
            {item.name}
          </span>

        </div>
      ))}

    </section>
  );
}