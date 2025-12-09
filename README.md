# React 1.关于typeof

在 TSX（TypeScript + JSX）中，typeof 依然是 JavaScript/TypeScript 中的关键字，它有两种常见用法：

1. 运行时的 typeof 操作符（JavaScript层面）
和普通 JavaScript 一样，typeof 用来获取变量或表达式的类型字符串，返回 "string"、"number"、"object" 等。


const value = 123;
console.log(typeof value); // "number"
这个用法在TSX中完全一样，通常用于调试或条件判断。

2. 类型层面的 typeof（TypeScript特有）
TypeScript 中的 typeof 可以用来获取某个变量或表达式的类型，而不是运行时的值类型。它是一个类型查询操作符。


const person = {
  name: "Alice",
  age: 30,
};

// 定义一个变量，它的类型和 person 一样
type PersonType = typeof person;

const anotherPerson: PersonType = {
  name: "Bob",
  age: 25,
};
这种用法在 TSX 中非常常用，尤其是在写 React 组件时，可以从已有的对象或组件中提取类型，增强类型安全。

总结
用法	作用	运行时/编译时	示例
typeof x	返回值的类型字符串	运行时（JavaScript）	typeof 123 // "number"
typeof X	获取变量或表达式的类型	编译时（TypeScript）	type T = typeof someObj;

#2.函数组件中defaultProps类型定义的方法：①联合类型 + typeof defaultProps(默认属性)
