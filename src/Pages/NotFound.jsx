import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section page-banner">
      <div className="container">
        <div className="card" style={{ textAlign: "center" }}>
          <span className="tag">404</span>
          <h1 style={{ margin: "16px 0" }}>Page Not Found</h1>
          <p style={{ marginBottom: "20px" }}>
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to="/" className="btn">Go to Home</Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;