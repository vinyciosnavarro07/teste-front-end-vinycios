import '../styles/category-grid.scss';

import techIcon from '../assets/icons/tecnologia.png';
import marketIcon from '../assets/icons/supermercados.png';
import drinksIcon from '../assets/icons/whiskey.png';
import toolsIcon from '../assets/icons/ferramentas.png';
import healthIcon from '../assets/icons/cuidados-de-saude.png';
import fitnessIcon from '../assets/icons/corrida.png';
import fashionIcon from '../assets/icons/moda.png';

type Category = {
  name: string;
  icon: string;
};

const categories: Category[] = [
  { name: 'Tecnologia', icon: techIcon },
  { name: 'Supermercado', icon: marketIcon },
  { name: 'Bebidas', icon: drinksIcon },
  { name: 'Ferramentas', icon: toolsIcon },
  { name: 'Saúde', icon: healthIcon },
  { name: 'Esporte e Fitness', icon: fitnessIcon },
  { name: 'Moda', icon: fashionIcon },
];

export function CategoryGrid() {
  return (
    <section className="category-grid">

      {categories.map((item) => (
        <div key={item.name} className="category-grid__item">

          <div className="category-grid__icon">
            <img src={item.icon} alt={item.name} />
          </div>

          <span className="category-grid__label">
            {item.name}
          </span>

        </div>
      ))}

    </section>
  );
}