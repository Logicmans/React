// 基础示例：没有defaultProps的组件
type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};
 
const Button1 = ({ size, variant, disabled }: ButtonProps) => {
  // 需要在函数体内处理默认值
  const actualSize = size ?? 'medium';
  const actualVariant = variant ?? 'primary';
  
  return (
    <button className={`btn-${actualSize} ${actualVariant}`} disabled={disabled}>
      Click me
    </button>
  );
};

export default Button1;