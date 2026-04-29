import '../styles/category-menu.scss';

const categories = [
  'Todas categorias',
  'Supermercado',
  'Livros',
  'Moda',
  'Lançamentos',
  'Ofertas do dia',
  'Assinatura'
];

export function CategoryMenu() {
  return (
    <nav className="category-menu">
      <ul className="category-menu__list">
        {categories.map((item) => (
          <li key={item} className="category-menu__item">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}