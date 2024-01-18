import './App.css'

function App() {

  return (
    <div className="card">
      <img src="image-product-desktop.jpg" alt="" className='img-desktop'/>
      <img src="image-product-mobile.jpg" alt="" className='img-mobile'/>
      <article>
        <h3>PERFUME</h3>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className="price">
          <h2>$149.99</h2>
          <p>$169.99</p>
        </div>
        <button>
          <img src="icon-cart.svg" alt="" />Add to Cart
        </button>
      </article>
    </div>
  )
}

export default App
