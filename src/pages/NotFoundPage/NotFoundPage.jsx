import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.containerTitle}>
        Page you visited doesn&apos;t exist.
      </h1>
      <Link to="/" className={css.link}>
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
