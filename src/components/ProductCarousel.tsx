import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { ProductCard } from './ProductCard';
import type { Product } from '../types/Product';

import '../styles/product-carousel.scss';

interface ProductCarouselProps {
    title: string;
    products: Product[];
    showCategories?: boolean;
    onProductClick?: (product: Product) => void;
    subtitle?: string;
}

const categories = [
    'Celular',
    'Acessórios',
    'Tablets',
    'Notebooks',
    'TVs',
    'Ver todos',
];

export function ProductCarousel({
    title,
    products,
    showCategories = false,
    onProductClick,
    subtitle
}: ProductCarouselProps) {

    const productsWithDiscount = products.map((product) => ({
        ...product,
        oldPrice: product.price * 1.2, // simula desconto
    }));

    return (
        <section className="carousel">

            <div className="carousel__header">
                <h2 className="carousel__title">{title}</h2>
            </div>

            {showCategories && (
                <div className="carousel__categories">
                    {categories.map((item, index) => (
                        <span key={`${item}-${index}`} className="carousel__chip">
                            {item}
                        </span>
                    ))}
                </div>
            )}

            {subtitle && (
                <p className="carousel__subtitle">{subtitle}</p>
            )}

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={16}
                slidesPerView={4}
                grabCursor
                breakpoints={{
                    320: { slidesPerView: 1.2 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {productsWithDiscount.map((product) => (
                    <SwiperSlide key={`${product.productId}-${product.productName}`}>
                        <ProductCard
                            product={product}
                            onClick={() => onProductClick?.(product)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}