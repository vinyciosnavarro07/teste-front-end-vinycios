import type { Product } from '../types/Product';
import '../styles/product-card.scss';

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: Props) {
  return (
    <article
      className="product-card"
      onClick={() => onClick(product)}
    >
      <img src={product.photo} alt={product.productName} />

      <h2 className="product-card__title">
        {product.productName}
      </h2>

      <p className="product-card__price">
        R$ {product.price}
      </p>

      <button
        className="product-card__button"
        onClick={(e) => {
          e.stopPropagation();
          onClick(product);
        }}
      >
        Ver mais
      </button>
    </article>
  );
}