import '../styles/header.scss';

export function Header() {
  return (
    <header className="header">

      <div className="header__logo">
        <h2>LOGO</h2>
      </div>

      <div className="header__search">
        <input type="text" placeholder="O que você está buscando?" />
      </div>
      
      <div className="header__icons">
        <span>👤</span>
        <span>❤️</span>
        <span>🛒</span>
        <span>🔔</span>
      </div>

    </header>
  );
}