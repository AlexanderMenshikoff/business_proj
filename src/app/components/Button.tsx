interface IButtonProps {
  className: string;
  text: string;
}

const Button: React.FC<IButtonProps> = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};

export default Button;
