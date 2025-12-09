//函数组件中的defaultProps类型定义：方法一；联合类型 + tyof defaultProps
//定义默认属性
const defaultProps = {
  size: 'medium' as const,
  variant: 'primary' as const,
  disabled: false,
}
console.log(typeof defaultProps); //和普通 JavaScript 一样，typeof 用来获取变量或表达式的类型字符串，返回 "string"、"number"、"object" 等。

//创建联合类型
type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
} & typeof defaultProps //类型层面的 typeof（TypeScript特有）TypeScript 中的 typeof 可以用来获取某个变量或表达式的类型，而不是运行时的值类型。它是一个类型查询操作符。

const Button3 = (props: ButtonProps) => {
  const {size, variant, disabled, onClick, children} = props;
  console.log(props.children);
  //需要在函数体内处理默认值

  return (
    <button 
      className={`btn-${size} ${variant}`} 
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

//设置defaultProps
Button3.defaultPros = defaultProps;
export default Button3;