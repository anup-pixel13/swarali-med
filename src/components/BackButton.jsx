import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length <= 1) {
      navigate("/");
    } else {
      navigate(-1);
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
