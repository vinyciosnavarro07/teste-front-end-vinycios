import '../styles/topbar.scss';

import shieldIcon from '../assets/icons/ShieldCheck.png';
import truckIcon from '../assets/icons/Truck.png';
import creditIcon from '../assets/icons/CreditCard.png';

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-item">
        <img src={shieldIcon} alt="Shield" />
        <p>Compra <span className='span-topbar-color'>100% segura</span></p>
      </div>

      <div className="topbar-item">
        <img src={truckIcon} alt="Truck" />
        <p><span className='span-topbar-color'>Frete grátis</span> acima de R$ 200</p>
      </div>

      <div className="topbar-item">
        <img src={creditIcon} alt="Credit Card" />
        <p><span className='span-topbar-color'>Parcele</span> suas compras</p>
      </div>
    </div>
  );
}