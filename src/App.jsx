import { useEffect, useRef, useState } from 'react'
import './App.css'
import { supabase } from './supabaseClient'

function App() {
  const videoRef = useRef(null)
const [showPlayButton, setShowPlayButton] = useState(false)
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadData() {
      const { data: categoryData, error: categoryError } = await supabase
        .from('categories')
        .select('*')
        .order('sort_order')

      const { data: productData, error: productError } = await supabase
        .from('products')
        .select('*')
        .order('sort_order')

      if (categoryError || productError) {
        console.error('Supabase error:', categoryError || productError)
        useEffect(() => {
  const video = videoRef.current

  if (!video) return

  video.play().catch(() => {
    setShowPlayButton(true)
  })
}, [])

const handleVideoPlay = () => {
  const video = videoRef.current

  if (video) {
    video.play()
      .then(() => setShowPlayButton(false))
      .catch(() => setShowPlayButton(true))
  }
}
        return
      }

      setCategories(
        categoryData.map((c) => ({
          id: c.id,
          name: c.name,
          slug: c.slug,
          tamilName: c.name_tamil,
          detail: c.detail,
          image: c.image_url,
        }))
      )

      setProducts(
        productData.map((p) => ({
          id: p.id,
          categoryId: p.category_id,
          name: p.name,
          tamilName: p.name_tamil,
          image: p.image_url,
          quantity: p.quantity,
          isAvailable: p.is_available,
        }))
      )
    }

    loadData()
  }, [])


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

          <div className="hero-art">
  <video
    ref={videoRef}
    className="hero-video"
    src="/videos/greenland-ad.mp4"
    autoPlay
    muted
    playsInline
    preload="auto"
onEnded={(e) => {
  const video = e.currentTarget
  video.pause()
  video.currentTime = Math.max(0, video.duration - 2)
}}
   onError={() => setShowPlayButton(true)}
  />

  {showPlayButton && (
    <button
      className="hero-play-button"
      onClick={() => {
  const video = videoRef.current
  if (video) {
    video.play()
      .then(() => setShowPlayButton(false))
      .catch(() => setShowPlayButton(true))
  }
}}
      type="button"
    >
      ▶ Play Advertisement
    </button>
  )}
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
    (product) => product.categoryId === category.id
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
<article
  className={`product-card ${product.isAvailable ? '' : 'out-of-stock'}`}
  key={product.id}
>              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

                            <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.tamilName}</p>
                {product.quantity && (
                  <span>{product.quantity}</span>
                )}
                <div
                  className={`availability ${
                    product.isAvailable ? 'in-stock' : 'no-stock'
                  }`}
                >
                  {product.isAvailable ? 'Available' : 'Out of stock'}
                </div>
              </div>
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
