const Button = ({ text, className, link, colour = "bg-purple-600" }) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`} href={link}>
      <div className="cta-button-no-arrow group ">
        <div className={`bg-circle ${colour}`} />
        <p className="text text-white">{text}</p>
        <div className="arrow-wrapper">
          </div>
      </div>
    </a>
  );
};

export default Button;
