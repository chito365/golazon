import style from "./ErrorServer.module.css";

const ErrorServer = () => {
  return (
    <div className={style.container}>
      <h1>500</h1>
      <p>Sorry, server error please try again later</p>
    </div>
  );
};

export default ErrorServer;
