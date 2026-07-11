import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { HAS_NAV_KEY } from "./ScrollRestoration";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    let hasNav = false;
    try {
      hasNav = window.sessionStorage.getItem(HAS_NAV_KEY) === "1";
    } catch {
      // ignore
    }

    if (hasNav) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button
      type="button"
      className="page-back-btn"
      onClick={handleBack}
      aria-label="Go back"
    >
      <FaChevronLeft aria-hidden="true" />
      Back
    </button>
  );
}

export default BackButton;
