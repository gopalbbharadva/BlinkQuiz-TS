import { PongSpinner } from "react-spinners-kit";
import "./Loader.css";

export const Loader = () => {
  const loaderColor = "#0ea5e9";
  return (
    <div className="loader-container">
      <PongSpinner color={loaderColor} size={150} />
    </div>
  );
};
