import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalCamper } from "../../redux/store";

const Modal = () => {
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.modalCamper);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        dispatch(setModalCamper(null));
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [dispatch]);

  if (!camper) return null;

  const closeModal = () => {
    dispatch(setModalCamper(null));
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>{camper.name}</h2>
        <p>{camper.description}</p>
        <h3>Reviews:</h3>
        <ul>
          {camper.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="date" required />
          <textarea placeholder="Comment"></textarea>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
