import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css.home}>
      <h1 className={css.title}>Welcome to Camper Rental</h1>
      <p className={css.text}>
        We offer a wide range of campers for rent to make your adventure
        unforgettable. Our campers are equipped with everything you need for a
        comfortable and exciting journey.
      </p>
      <p className={css.text}>
        Whether you&apos;re planning a weekend getaway or a cross-country
        expedition, our fleet of modern and well-maintained campers will provide
        you with the freedom to explore at your own pace.
      </p>
      <p className={css.text}>
        Book your camper today and embark on a memorable journey with your
        family and friends. Our friendly team is here to assist you with any
        questions or special requirements you may have.
      </p>
    </div>
  );
};

export default HomePage;
