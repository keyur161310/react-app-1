import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function siteHeader(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow">
    <div className="container">
      <a className="navbar-brand fw-bold fs-4" href="#">Spice <span className="text-warning">Haven</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
          <li className="nav-item"><a className="nav-link" href="#specials">Specials</a></li>
          <li className="nav-item"><a className="nav-link" href="#testimonials">Reviews</a></li>
          <li className="nav-item"><a className="nav-link" href="#gallery">Gallery</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
    )
}
function home(){
    return(
         <section id="home" className="hero d-flex align-items-center text-center">
    <div className="container">
      <h1 className="display-3 fw-bold mb-3">Welcome to Spice Haven</h1>
      <p className="lead fs-4 mb-4">Where tradition meets flavor in every bite</p>
      <a href="#menu" className="btn btn-lg btn-warning text-dark px-5 py-3 fw-bold">View Menu</a>
    </div>
  </section>
    )
}
function aboutUs(){
    return(
        <section id="about" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center section-title display-5">About Us</h2>
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="img-fluid rounded shadow" alt="Restaurant interior" />
        </div>
        <div className="col-lg-6">
          <h3 className="mb-4">A Passion for Authentic Flavors</h3>
          <p className="lead">Since 2012, Spice Haven has been serving the most authentic Indian and Indo-Chinese cuisine in Bhavnagar.</p>
          <p>We believe food is not just something to fill your stomach — it's an experience, a memory, a celebration of culture and love.</p>
          <p className="mb-4">Every dish is prepared with fresh ingredients and traditional techniques passed down through generations.</p>
          <div className="row g-4 text-center">
            <div className="col-4">
              <h3 className="text-primary fw-bold">12+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="col-4">
              <h3 className="text-primary fw-bold">250k+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="col-4">
              <h3 className="text-primary fw-bold">4.8</h3>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
function MenuItem(props) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card card-dish shadow h-100">
        <img src={props.image} className="card-img-top" alt={props.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <p className="text-muted">₹ {props.price}</p>
        </div>
      </div>
    </div>
  );
}
function Menu() {

  const dishes = [
    {
      title: "Butter Chicken",
      price: 380,
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84"
    },
    {
      title: "Paneer Tikka",
      price: 320,
      image: "https://images.unsplash.com/photo-1563245372-f460e9a8448c"
    },
    {
      title: "Hyderabadi Dum Biryani",
      price: 420,
      image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9"
    }
  ];

  return (
    <section id="menu" className="py-5">
      <div className="container">
        <h2 className="text-center section-title display-5">
          Our Popular Dishes
        </h2>
        <div className="row g-4">
          {dishes.map((dish, index) => (
            <MenuItem
              key={index}
              title={dish.title}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
function todaySpc(){
    return(
 <section id="specials" className="py-5 bg-dark text-white">
    <div className="container">
      <h2 className="text-center section-title display-5 text-white">Today's Specials</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-5">
          <div className="card bg-dark border-warning shadow">
            <div className="card-body text-center p-5">
              <h3 className="text-warning">Family Thali Feast</h3>
              <h4 className="my-4">Only ₹999 for 4 persons</h4>
              <p className="lead">Valid today only • 7 PM – 10:30 PM</p>
              <a href="#" className="btn btn-warning text-dark mt-3 px-5 py-3">Book Table</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

 function TestimonialCard(props) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card testimonial-card h-100">
        <div className="card-body text-center p-4">
          <img src={props.image} className="avatar mb-3" alt={props.name} />
          <p className="fst-italic mb-4">"{props.message}"</p>
          <h6>{props.name}</h6>
          <p className="text-muted small">{props.role}</p>
        </div>
      </div>
    </div>
  );
}
function Testimonials() {

  const reviews = [
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      message: "Best butter chicken ever!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      name: "Rahul Patel",
      role: "Food Blogger",
      message: "Paneer tikka was amazing!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center display-5">
          What Our Guests Say
        </h2>

        <div className="row g-4 mt-4">
          {reviews.map((review, index) => (
            <TestimonialCard
              key={index}
              {...review}
            />
          ))}
        </div>
      </div>
    </section>
  );
}  


function GalleryItem(props) {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <img src={props.image} className="img-fluid rounded shadow" alt="Food" />
    </div>
  );
}

function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    "https://images.unsplash.com/photo-1606491956689-2ea866880c84"
  ];

  return (
    <section id="gallery" className="py-5">
      <div className="container">
        <h2 className="text-center display-5">Gallery</h2>

        <div className="row g-3">
          {images.map((img, index) => (
            <GalleryItem key={index} image={img} />
          ))}
        </div>
      </div>
    </section>
  );
}
function conatctUs(){
    return(
         <section id="contact" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center section-title display-5">Get In Touch</h2>
      <div className="row g-5 mt-4">
        <div className="col-lg-6">
          <h4>Visit Us</h4>
          <p className="lead">123 Flavor Street, Foodie Nagar<br />Bhavnagar, Gujarat 364001</p>
          <h4 className="mt-4">Opening Hours</h4>
          <p>Monday – Sunday<br />12:00 PM – 11:00 PM</p>
          <h4 className="mt-4">Contact</h4>
          <p className="fs-5">+91 98765 43210<br />spicehaven@email.com</p>
        </div>
        <div className="col-lg-6">
          <iframe className="w-100 rounded shadow" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.678901234567!2d72.153456!3d21.764789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f4e!!!!!!!!!!0x0!2zMjHCsDQ1JzUzIjIuMiJOIDcywrAwOScxMi40IkU!5e0!3m2!1sen!2sin!4v1699999999999" height={320} style={{"border":"0"}} allowFullScreen loading="lazy" />
        </div>
      </div>
    </div>
  </section>
    )
}
function siteFooter(){
    return(
         <footer className="footer py-4 text-center">
    <div className="container">
      <p className="mb-1">© 2026 Spice Haven Restaurant. All rights reserved.</p>
      <p className="text-muted small">Made with love &amp; Bootstrap • Bhavnagar</p>
    </div>
  </footer>
    )
}
function Resturant() {
  return (
    <div>
      <siteHeader />
      <home />
      <aboutUs />
      <Menu />
      <todaySpc />
      <Testimonials />
      <Gallery />
      <conatctUs />
      <siteFooter />
    </div>
  );
}

root.render(<Resturant />);