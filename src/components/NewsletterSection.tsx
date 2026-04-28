import { useState } from 'react';
import '../styles/newsletter.scss';

export function NewsletterSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!accepted) {
      alert('Você precisa aceitar os termos');
      return;
    }

    console.log({ name, email });

    // reset
    setName('');
    setEmail('');
    setAccepted(false);
  };

  return (
    <section className="newsletter">

      <div className="newsletter__container">

        {/* TEXTO */}
        <div className="newsletter__content">
          <h2>Assine nossa newsletter</h2>
          <p>
            Receba ofertas exclusivas, novidades e descontos diretamente no seu e-mail.
          </p>
        </div>

        {/* FORM */}
        <form className="newsletter__form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="newsletter__checkbox">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span>
              Aceito os termos e condições
            </span>
          </label>

          <button type="submit">
            Inscrever
          </button>

        </form>

      </div>

    </section>
  );
}