import PropTypes from "prop-types";

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button className="Button" onClick={onClick}>
        {" "}
        {text}{" "}
      </button>
    </div>
  );
};

export default Button;
