import { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { ProductCard } from '../components/ProductCard';
import type { Product } from '../types/Product';
import '../styles/home.scss';
import { ProductModal } from '../components/ProductModal';

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch(console.error);
    }, []);

    const handleClick = (product: Product) => {
        setSelectedProduct(product);
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedProduct(null);
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <main>
            <h1>Vitrine de Produtos</h1>

            <section className="products-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.productId}
                        product={product}
                        onClick={handleClick}
                    />
                ))}
            </section>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </main>
    );
}