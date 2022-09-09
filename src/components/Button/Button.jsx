import "./Button.scss";

export function Button({ onClick, className, children, ...rest }) {
  return (
    <button className={`btn ${className}`} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
