import style from "./Loader.module.css";

interface IProps {
  height?: number;
  width?: number;
}
const Loader = ({ height = 120, width = 120 }: IProps) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={style.loader}
    />
  );
};

export default Loader;
