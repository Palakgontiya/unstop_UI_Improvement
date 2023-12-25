const Button = ({ text, icon, btnStyle }) => {
  return (
    <>
      <div className={btnStyle}>
        {icon && <span>{icon}</span>} <span>{text}</span>
      </div>
    </>
  );
};

export default Button;
