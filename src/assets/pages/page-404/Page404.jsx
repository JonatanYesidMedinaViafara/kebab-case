import Header from "../header/Header";
import "./Page404.css";

const Page404 = () => {
  return (
    <>
      <Header />
      <div className="container">
        <p>Lo sentimos, la página que buscas no existe.</p>
      </div>
    </>
  );
};

export default Page404;
