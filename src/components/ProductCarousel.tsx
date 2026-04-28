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
}: ProductCarouselProps) {
    return (
        <section className="carousel">

            {/* HEADER */}
            <div className="carousel__header">
                <h2 className="carousel__title">{title}</h2>
                {/* <a href="#" className="carousel__link">Ver todos</a> */}
            </div>

            {/* CATEGORIAS */}
            {showCategories && (
                <div className="carousel__categories">
                    {categories.map((item, index) => (
                        <span key={`${item}-${index}`} className="carousel__chip">
                            {item}
                        </span>
                    ))}
                </div>
            )}

            {/* SWIPER */}
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={16}
                slidesPerView={5}
                grabCursor
                breakpoints={{
                    320: { slidesPerView: 1.2 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
            >
                {products.map((product) => (
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