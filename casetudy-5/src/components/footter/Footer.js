import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <section style={sectionStyle}>
        <div style={socialLinksStyle}>
          <span>Get connected with us on social networks:</span>
          <a href="#" style={socialLinkStyle}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" style={socialLinkStyle}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" style={socialLinkStyle}>
            <i className="fab fa-google"></i>
          </a>
          <a href="#" style={socialLinkStyle}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" style={socialLinkStyle}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" style={socialLinkStyle}>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={columnStyle}>
            <h6 style={columnHeadingStyle}>
              <i className="fas fa-gem me-3"></i>Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div style={columnStyle}>
            <h6 style={columnHeadingStyle}>Products</h6>
            <p>
              <a href="#!" style={textLinkStyle}>
                Angular
              </a>
            </p>
            <p>
              <a href="#!" style={textLinkStyle}>
                React
              </a>
            </p>
            <p>
              <a href="#!" style={textLinkStyle}>
                Vue
              </a>
            </p>
            <p>
              <a href="#!" style={textLinkStyle}>
                Laravel
              </a>
            </p>
          </div>
          <div style={columnStyle}>
            <h6 style={columnHeadingStyle}>Useful links</h6>
            <p>
              <a href="#!" style={textLinkStyle}>
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" style={textLinkStyle}>
                Settings
              </a>
            </p>
            <p>
              <a href="#!" style={textLinkStyle}>
                Orders
              </a>
            </p>
            <p>
              <a href="#!" style={textLinkStyle}>
                Help
              </a>
            </p>
          </div>
          <div style={columnStyle}>
            <h6 style={columnHeadingStyle}>Contact</h6>
            <p>
              <i className="fas fa-home me-3"></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3"></i> + 01 234 567 89
            </p>
          </div>
        </div>
      </section>
      <div style={copyrightStyle}>
        © 2021 Copyright:
        <a href="https://mdbootstrap.com/" style={textLinkStyle}>
          MDBootstrap.com
        </a>
      </div>
    </footer>
  );
}

const footerStyle = {
  textAlign: "center",
  background: "#343a40",
  color: "#ffffff",
  padding: "1rem 0",
};

const sectionStyle = {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #555",
  padding: "1rem 0",
};

const socialLinksStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const socialLinkStyle = {
  margin: "0.25rem",
  color: "#ffffff",
  textDecoration: "none",
};

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

const columnStyle = {
  flex: "0 0 25%",
  margin: "0 1rem",
};

const columnHeadingStyle = {
  fontWeight: "bold",
};

const textLinkStyle = {
  textDecoration: "none",
  color: "#007bff",
};

const copyrightStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  padding: "1rem",
  color: "#ffffff",
  fontSize: "0.8rem",
};

export default Footer;
