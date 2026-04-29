import { useRef, useState } from 'react';
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
  const scrollContainerRef = useRef<HTMLUListElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="category-menu">
      <div className="category-menu__container">
        {showLeftArrow && (
          <button
            className="category-menu__arrow category-menu__arrow--left"
            onClick={() => scroll('left')}
            aria-label="Scroll esquerda"
          >
            ‹
          </button>
        )}

        <ul 
          className="category-menu__list"
          ref={scrollContainerRef}
          onScroll={handleScroll}
        >
          {categories.map((item) => (
            <li key={item} className="category-menu__item">
              {item}
            </li>
          ))}
        </ul>

        {showRightArrow && (
          <button
            className="category-menu__arrow category-menu__arrow--right"
            onClick={() => scroll('right')}
            aria-label="Scroll direita"
          >
            ›
          </button>
        )}
      </div>
    </nav>
  );
}