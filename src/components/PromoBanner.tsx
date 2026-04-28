import '../styles/promo-banner.scss';

interface PromoBannerProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
}

export function PromoBanner({
  image,
  title,
  description,
  buttonText = 'Confira',
}: PromoBannerProps) {
  return (
    <section className="promo-banner">
      <div
        className="promo-banner__card"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="promo-banner__content">
          <h2>{title}</h2>
          <p>{description}</p>
          <button>{buttonText}</button>
        </div>
      </div>
    </section>
  );
}