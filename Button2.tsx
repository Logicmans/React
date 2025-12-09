type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}
// 使用ES6默认参数
const Button2 = ({ 
  size = 'medium', 
  variant = 'primary', 
  disabled = false 
}: ButtonProps) => {
  return (
    <button className={`btn-${size} ${variant}`} disabled={disabled}>
      Click me
    </button>
  );
};

export default Button2;