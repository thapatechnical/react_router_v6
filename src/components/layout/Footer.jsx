export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <img src="./images/logo.png" alt="logo" />
          <p>
            Welcome to Thapa EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_2">
          <h4>SHOPPING</h4>
          <a href="#">Computer Store</a>
          <a href="#">Laptop Store</a>
          <a href="#">Accessories</a>
          <a href="#">Sales & Discount</a>
        </div>
        <div className="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">
            Payment Method
          </a>
          <a href="" target="_blank">
            Delivery
          </a>
          <a href="" target="_blank">
            Return and Exchange
          </a>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code by Thapa Technical</p>
        </div>
      </div>
    </footer>
  );
};
