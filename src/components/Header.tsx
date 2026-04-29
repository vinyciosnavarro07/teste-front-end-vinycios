import '../styles/header.scss';

import logoImg from '../assets/logo.png';

import searchIcon from '../assets/icons/MagnifyingGlass.png';
import vectorIcon from '../assets/icons/Vector.png';
import heartIcon from '../assets/icons/Heart.png';
import userIcon from '../assets/icons/UserCircle.png';
import shoppingIcon from '../assets/icons/ShoppingCart.png';

export function Header() {
    return (
        <header className="header">
            <div className="container header__content">

                <div className="header__logo">
                    <img src={logoImg} alt="Econverse logo" />
                </div>

                <div className="header__search">
                    <input
                        type="text"
                        placeholder="O que você está buscando?"
                    />
                    <img src={searchIcon} alt="Buscar" />
                </div>

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
        </header>
    );
}