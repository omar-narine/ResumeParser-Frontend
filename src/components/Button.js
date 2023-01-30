import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <div>
      <button className="Button" onClick={onClick}>
        {" "}
        Search{" "}
      </button>
    </div>
  );
};

export default Button;
