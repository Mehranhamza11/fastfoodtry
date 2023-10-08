import logo from './logo.svg';
import './App.css';

function App() {

  let products = [
    {
      id: 1,
      title: 'Krunch Burger',
      price: 270,
      desc: 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
      img: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch_variant_0-2023-05-31115706.png'
    },
    {
      id: 2,
      title: 'Mighty Zinger',
      price: 700,
      desc: 'Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun',
      img: 'https://www.kfcpakistan.com/images/33685b40-0461-11ee-911c-497570899609-Mighty_variant_0-2023-06-06115641.png'
    },
    {
      id: 3,
      title: 'Hot Wings Bucket',
      price: 610,
      desc: '10 Pcs of our Signature Hot & Crispy Wings',
      img: 'https://kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-HotWings_variant_0-2023-05-31115706.png'
    },

    {
      id: 4,
      title: 'Krunch Combo',
      price: 520,
      desc: '1 Krunch burger + 1 Regular fries + 1 Regular drink',
      img: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png'
    },
    {
      id: 5,
      title: 'Krunch Combo',
      price: 1250,
      desc: 'Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks',
      img: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png'
    },
    {
      id: 6,
      title: 'Twister Combo',
      price: 670,
      desc: 'Twister + 1 Regular fries + 1 Regular drink',
      img: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png'
    },
   
  ]
  return (
    <div>
              <nav class="navbar navbar-dark bg-dark">
              <div class="container-fluid">
    <a class="navbar-brand" href="#">kfcpakistan</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
      </nav>
      <div className='container'>

        <div className="row">
            {
              products.map((product) => (
                <div key={product.id} className="col-md-4 col-sm-6">
                <div className="card">
                  <img src={product.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.desc}</p>
                      <h4>Price {product.price}</h4>
                      <a href="#" className="mt-2 btn btn-primary">Add to cart</a>
                    </div>
                </div>
                </div>
              ))
            }

          </div>

        </div>
      </div>
  );
}

export default App;
