import React from "react";
import Loader from "../Loader/Loader";
import style from "./RenderIfTrue.module.css";
interface IProps {
  children: React.ReactNode;
  condition: boolean;
}
const RenderIfTrue = ({ children, condition }: IProps) => {
  if (!condition)
    return (
      <div className={style.makeLoaderToCenter}>
        <Loader />
      </div>
    );
  return <>{children}</>;
};

export default RenderIfTrue;
