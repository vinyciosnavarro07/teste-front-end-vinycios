import { useEffect, useState } from 'react';

import { getProducts } from '../services/api';
import type { Product } from '../types/Product';

import { TopBar } from '../components/TopBar';
import { Header } from '../components/Header';
import { CategoryMenu } from '../components/CategoryMenu';
import { HeroBanner } from '../components/HeroBanner';
import { CategoryGrid } from '../components/CategoryGrid';
import { ProductCarousel } from '../components/ProductCarousel';
import { ProductModal } from '../components/ProductModal';
import { PromoSection } from '../components/PromoSection';
import { BrandSection } from '../components/BrandSection';
import { NewsletterSection } from '../components/NewsletterSection';
import { Footer } from '../components/Footer';

import '../styles/global.scss';
import '../styles/home.scss';

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        getProducts()
            .then(setProducts)
            .catch(console.error);
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setSelectedProduct(null);
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="page">

            
            <TopBar />
            <Header />
            <CategoryMenu />

            
            <HeroBanner />

            
            <CategoryGrid />

            
            <main className="container">

                <ProductCarousel
                title="Produtos relacionados"
                products={products}
                showCategories
                onProductClick={handleProductClick}
                />


                <PromoSection />

                <ProductCarousel
                title="Produtos relacionados"
                products={products}
                onProductClick={handleProductClick}
                subtitle="Ver todos"
                />

                <PromoSection />

                <BrandSection />

                <ProductCarousel
                title="Produtos relacionados"
                products={products}
                onProductClick={handleProductClick}
                subtitle="Ver todos"
                />



            </main>
                <NewsletterSection />
                <Footer />
                
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

        </div>
    );
}