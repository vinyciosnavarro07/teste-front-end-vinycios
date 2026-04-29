import type { Product } from '../types/Product';
import { useState } from 'react';
import '../styles/product-modal.scss';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: Props) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <article
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close" onClick={onClose}>
          X
        </button>

        <div className="modal-body">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className="modal-info">
            <h2>{product.productName}</h2>

            <p className="price">R$ {product.price}</p>

            <p>{product.descriptionShort}</p>

            <p className="detail">
              Veja mais detalhes do produto &gt;
            </p>

            <div className="modal-actions">
              
              <div className="quantity">
                <button onClick={decrease}>-</button>

                <span>{String(quantity).padStart(2, '0')}</span>

                <button onClick={increase}>+</button>
              </div>

              <button className="buy-button">
                Comprar
              </button>

            </div>

          </div>
        </div>

      </article>
    </div>
  );
}