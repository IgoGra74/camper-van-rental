import Modal from "react-modal";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  bookingDate: Yup.date().required("Required"),
  comment: Yup.string(),
});

const CamperModal = ({ isOpen, onRequestClose, camper }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <button onClick={onRequestClose}>Close</button>
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: "",
          comment: "",
        }}
        validationSchema={BookingSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Booking:", values);
          alert("Booking successful");
          resetForm();
          onRequestClose();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Name</label>
              <Field name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              <label htmlFor="bookingDate">Booking Date</label>
              <Field name="bookingDate" type="date" />
              {errors.bookingDate && touched.bookingDate ? (
                <div>{errors.bookingDate}</div>
              ) : null}
            </div>
            <div>
              <label htmlFor="comment">Comment</label>
              <Field name="comment" as="textarea" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CamperModal;
