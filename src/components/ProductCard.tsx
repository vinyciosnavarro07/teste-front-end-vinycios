import type { Product } from '../types/Product';
import '../styles/product-card.scss';

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: Props) {
  const oldPrice = product.price * 1.2;

  return (
    <article
      className="product-card"
      onClick={() => onClick(product)}
    >
      <img src={product.photo} alt={product.productName} />

      <p className="product-card__description">
        {product.descriptionShort}
      </p>

      <div className="product-card__price-wrapper">
        <span className="product-card__old-price">
          R$ {oldPrice}
        </span>

        <span className="product-card__price">
          R$ {product.price}
        </span>

        <span className="product-card__installment">
          ou 2x de R$ {(product.price / 2).toFixed(2)}
        </span>

        <span className="product-card__shipping">
          Frete grátis
        </span>
        
      </div>

      <button
        className="product-card__button"
        onClick={(e) => {
          e.stopPropagation();
          onClick(product);
        }}
      >
        Comprar
      </button>
    </article>
  );
}