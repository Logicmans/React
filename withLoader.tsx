import React from 'react'
import axios from 'axios'

// 定义组件状态的接口
interface ILoaderState {
  data: any, // 存储获取的数据
  isLoading: boolean // 加载状态
}

// 定义组件属性的接口
interface ILoaderProps {
  data: any // 传递给包装组件的数据
}

/**
 * HOC-Higher order component高阶组件：就是一个函数，接受一个组件作为参数，返回一个新组件
 * @param WrappedComponent 
 * @param url 
 * @returns 
 */
// 高阶组件函数，接收一个组件和一个 URL 作为参数
const withLoader = <P extends ILoaderState>(WrappedComponent: React.ComponentType<P>, url: string) => {
  // 返回一个新的组件
  return class LoaderComponent extends React.Component<Partial<ILoaderProps>, ILoaderState> {
    constructor(props: any) {//构造函数
      super(props)
      // 初始化状态
      this.state = {
        data: null,
        isLoading: false
      }
    }

    // 组件挂载后获取数据
    componentDidMount(): void {
      this.setState({
        isLoading: true, // 设置加载状态为 true
      })
      // 使用 axios 获取数据
      axios.get(url).then(result => {
        // 更新状态，设置获取到的数据和加载状态
        this.setState({
          data: result.data,
          isLoading: false // 加载完成
        })
      })
    }

    render() {
      const { data, isLoading } = this.state
      return (
        <>
          {/* 根据加载状态决定显示内容 */}
          {(isLoading || !data) ? (
            <p>数据加载中...</p> // 显示加载提示
          ) : (
            <WrappedComponent {...this.props as P} data={data} /> // 渲染包装的组件并传递数据
          )}
        </>
      )
    }
  }
}

export default withLoader; // 导出高阶组件