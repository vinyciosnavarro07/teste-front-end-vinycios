import type { Product } from '../types/Product';
import '../styles/product-modal.scss';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <article
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose}>
          X
        </button>

        <img src={product.photo} alt={product.productName} />

        <h2>{product.productName}</h2>

        <p>{product.descriptionShort}</p>

        <p className="price">R$ {product.price}</p>
      </article>
    </div>
  );
}