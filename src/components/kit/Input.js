const Input = (props) => {
  const { className, ...otherProps } = props;
  return (
    <input
      {...otherProps}
      className={`rounded border  p-2 text-sm text-slate-800  shadow ${className}`}
    />
  );
};

export default Input;
