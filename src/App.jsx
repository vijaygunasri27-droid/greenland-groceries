
import './App.css'
import { products } from './products'

const categories = [
  {
    name: 'Rice & Grains',
    slug: 'rice-grains',
    tamilName: 'அரிசி மற்றும் தானியங்கள்',
    detail: 'Everyday essential staples',
    image: '/categories/rice-grains.jpg',
  },
  {
    name: 'Flour & Atta',
    slug: 'flour-atta',
    tamilName: 'மாவு வகைகள்',
    detail: 'Flour for every kitchen',
    image: '/categories/flour-atta.jpeg',
  },
  {
    name: 'Pulses & Lentils',
    slug: 'pulses-lentils',
    tamilName: 'பருப்பு வகைகள்',
    detail: 'A variety of pantry staples',
    image: '/categories/pulses-lentils.jpg',
  },
  {
    name: 'Spices & Masalas',
    slug: 'spices-masalas',
    tamilName: 'மசாலா வகைகள்',
    detail: 'Flavour for every kitchen',
    image: '/categories/spices-masalas.jpeg',
  },
  {
    name: 'Oils & Ghee',
    slug: 'oils-ghee',
    tamilName: 'எண்ணெய் மற்றும் நெய்',
    detail: 'Everyday cooking essentials',
    image: '/categories/oils-ghee.webp',
  },
  {
    name: 'Beverages',
    slug: 'beverages',
    tamilName: 'பானங்கள்',
    detail: 'Drinks for every occasion',
    image: '/categories/beverages.jpeg',
  },
  {
    name: 'Snacks & Sweets',
    slug: 'snacks-sweets',
    tamilName: 'தின்பண்டங்கள் மற்றும் இனிப்புகள்',
    detail: 'A range of treats',
    image: '/categories/snacks-sweets.jpg',
  },
  {
    name: 'Sauces & More',
    slug: 'sauces-more',
    tamilName: 'சாஸ் மற்றும் இதர பொருட்கள்',
    detail: 'More kitchen essentials',
    image: '/categories/sauces-more.png',
  },
]

function App() {
  return (
    <div className="website">
      <div className="announcement">
        Wholesale grocery supply for businesses across France
      </div>

      
<header className="header">
  <a className="brand" href="#home" aria-label="Greenland Groceries home">
    <img
      className="brand-logo"
      src="/logo.png"
      alt="Greenland Groceries logo"
    />
    <span className="brand-name">
      Greenland
      <small>GROCERIES · WHOLESALE</small>
    </span>
  </a>

  <nav className="navigation" aria-label="Main navigation">
    <a href="#home">Home</a>
    <a href="#categories">Categories</a>
    <a href="#about">About us</a>
  </nav>

  <a className="header-link" href="#contact">
    Wholesale enquiries <span>↗</span>
  </a>
</header>


      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              YOUR WHOLESALE GROCERY PARTNER
            </span>

            <h1>
  Fresh Choices.
  <br />
  <span>Stronger Business.</span>
</h1>

<p>
  From everyday essentials to quality favourites,
  discover a world of groceries at wholesale value.
  Your trusted grocery partner, proudly serving
  businesses across France.
</p>

            <a className="primary-button" href="#categories">
  Discover our collection <span>→</span>
</a>

            <div className="hero-note">
              <span className="note-dot"></span>
              Wholesale grocery catalogue · France
            </div>
          </div>

          <div className="hero-art" aria-label="Grocery illustration" role="img">
            <div className="art-circle"></div>
            <div className="art-label">GOOD FOOD, GOOD BUSINESS</div>
            <div className="grocery-bag">
              <span>GG</span>
              <small>GREENLAND<br />GROCERIES</small>
            </div>
            <div className="floating-item item-one">🌾</div>
            <div className="floating-item item-two">🥫</div>
            <div className="floating-item item-three">🌶️</div>
            <div className="floating-item item-four">🫘</div>
            <div className="art-caption">Your everyday essentials, all in one place.</div>
          </div>
        </section>

        <section className="benefits" aria-label="Our service">
          <div>
            <span className="benefit-icon">✦</span>
            <span>Wholesale focused</span>
          </div>
          <div>
            <span className="benefit-icon">⌖</span>
            <span>Serving France</span>
          </div>
          <div>
            <span className="benefit-icon">◇</span>
            <span>Wide product range</span>
          </div>
        </section>

        <section className="categories section" id="categories">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPLORE OUR RANGE</span>
              <h2>Everything your business needs.</h2>
              <p>Explore our grocery product categories.</p>
            </div>
            <span className="category-count">OUR PRODUCT RANGE</span>
          </div>

          
<div className="category-grid">
  {categories.map((category) => (
    <a
      className="category-card"
      key={category.name}
      href={`#products-${category.slug}`}
      style={{ backgroundImage: `url("${category.image}")` }}
    >
      <div className="category-overlay"></div>

      <div className="category-content">
        <h3>{category.name}</h3>
        <p>{category.tamilName}</p>
        <span>{category.detail}</span>
      </div>

      <span className="category-arrow">↗</span>
    </a>
  ))}
</div>

        </section>

        <section className="products-section section" id="products">
  <div className="section-heading">
    <div>
      <span className="eyebrow">OUR PRODUCTS</span>
      <h2>Our Grocery Collection</h2>
      <p>Explore our quality grocery products.</p>
    </div>
    <span className="category-count">PRODUCT CATALOGUE</span>
  </div>

  {categories.map((category) => {
  const categoryProducts = products.filter(
    (product) => product.category === category.name
  )

  return (
    <div
      className="product-category-group"
      id={`products-${category.slug}`}
      key={category.slug}
    >
      <h3 className="product-category-title">
        {category.name}
      </h3>

      {categoryProducts.length > 0 ? (
        <div className="product-grid">
          {categoryProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.tamilName}</p>
{product.quantity && (
  <span>{product.quantity}</span>
)}              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="coming-soon">Products coming soon.</p>
      )}
    </div>
  )
})}
</section>

        <section className="about-section" id="about">
          <div className="about-decoration">GG</div>
          <div className="about-content">
            <span className="eyebrow">ABOUT GREENLAND GROCERIES</span>
            <h2>Bringing grocery essentials closer to your business.</h2>
            <p>
              Greenland Groceries is a wholesale grocery business serving
              customers in France. Explore our product catalogue and discover
              the range of everyday grocery essentials available for your business.
            </p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">GREENLAND GROCERIES</span>
          <h2>Looking for wholesale grocery supplies?</h2>
          <p>Explore our catalogue and discover our product range.</p>
          <a className="primary-button" href="#categories">
            Browse catalogue <span>→</span>
          </a>
        </section>
      </main>

      <footer className="footer">
  <a className="brand footer-brand" href="#home" aria-label="Greenland Groceries home">
    <img
      className="brand-logo"
      src="/logo.png"
      alt="Greenland Groceries logo"
    />
    <span className="brand-name">
      Greenland
      <small>GROCERIES · WHOLESALE</small>
    </span>
  </a>

  <p>Wholesale groceries · France</p>
  <span>© {new Date().getFullYear()} Greenland Groceries</span>
</footer>
    </div>
  )
}

export default App
