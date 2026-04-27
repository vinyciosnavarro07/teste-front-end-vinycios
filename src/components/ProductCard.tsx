import type { Product } from '../types/Product';
import '../styles/product-card.scss';

interface Props {
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: Props) {
  return (
    <article className="product-card" onClick={() => onClick(product)}>
      <img src={product.photo} alt={product.productName} />

      <h2>{product.productName}</h2>

      <p className="price">R$ {product.price}</p>

      <button>Ver mais</button>
    </article>
  );
}