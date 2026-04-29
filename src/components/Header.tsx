import { useState } from 'react';
import '../styles/header.scss';

import logoImg from '../assets/logo.png';

import searchIcon from '../assets/icons/MagnifyingGlass.png';
import vectorIcon from '../assets/icons/Vector.png';
import heartIcon from '../assets/icons/Heart.png';
import userIcon from '../assets/icons/UserCircle.png';
import shoppingIcon from '../assets/icons/ShoppingCart.png';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="container header__content">
                    {/* Menu hambúrguer - Mobile */}
                    <button 
                        className="header__menu-toggle" 
                        onClick={toggleMenu}
                        aria-label="Abrir menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <div className="header__logo">
                        <img src={logoImg} alt="Econverse logo" />
                    </div>

                    <div className={`header__search ${isSearchOpen ? 'header__search--active' : ''}`}>
                        <input
                            type="text"
                            placeholder="O que você está buscando?"
                        />
                        <img src={searchIcon} alt="Buscar" />
                    </div>

                    <button 
                        className="header__search-toggle"
                        onClick={toggleSearch}
                        aria-label="Abrir busca"
                    >
                        <img src={searchIcon} alt="Buscar" />
                    </button>

                    <div className="header__icons">

                        <button className="header__icon" aria-label="Favoritos">
                            <img src={vectorIcon} alt="" />
                        </button>

                        <button className="header__icon" aria-label="Minha conta">
                            <img src={heartIcon} alt="" />
                        </button>

                        <button className="header__icon" aria-label="Carrinho">
                            <img src={userIcon} alt="" />
                        </button>

                        <button className="header__icon" aria-label="Carrinho">
                            <img src={shoppingIcon} alt="" />
                        </button>

                    </div>
                </div>

                {/* Menu Mobile */}
                {isMenuOpen && (
                    <nav className="header__mobile-menu">
                        <ul className="header__mobile-menu-list">
                            <li><a href="#" onClick={closeMenu}>Todas categorias</a></li>
                            <li><a href="#" onClick={closeMenu}>Supermercado</a></li>
                            <li><a href="#" onClick={closeMenu}>Livros</a></li>
                            <li><a href="#" onClick={closeMenu}>Moda</a></li>
                            <li><a href="#" onClick={closeMenu}>Lançamentos</a></li>
                            <li><a href="#" onClick={closeMenu}>Ofertas do dia</a></li>
                            <li><a href="#" onClick={closeMenu}>Assinatura</a></li>
                        </ul>
                    </nav>
                )}
            </header>

            {/* Overlay para fechar menu */}
            {isMenuOpen && (
                <div 
                    className="header__overlay" 
                    onClick={closeMenu}
                ></div>
            )}
        </>
    );
}