import '../styles/topbar.scss';

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-item">
        <span>🔒</span>
        <p>Compra 100% segura</p>
      </div>

      <div className="topbar-item">
        <span>🚚</span>
        <p>Frete grátis acima de R$ 200</p>
      </div>

      <div className="topbar-item">
        <span>💳</span>
        <p>Parcele suas compras</p>
      </div>
    </div>
  );
}