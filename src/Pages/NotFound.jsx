import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";
import BackButton from "../components/BackButton";

function NotFound() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section premium-page-bg section-surface section-surface-light not-found-section">
      <div className="container">
        <BackButton />
        <motion.div
          className="card not-found-card liquid-glass"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className="not-found-icon"
            animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
            transition={prefersReducedMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaHeartbeat />
          </motion.div>
          <span className="tag premium-tag">404</span>
          <h1>Page Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
          <Link to="/" className="btn">Go to Home</Link>
        </motion.div>
      </div>
    </section>
  );
}

export default NotFound;
