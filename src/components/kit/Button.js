const Button = (props) => {
  const { className, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={`bg-gradient-to-r from-blue-600  to-indigo-600  p-1 px-4 text-sm text-white rounded shadow ${className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
