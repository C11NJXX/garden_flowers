// 导入App组件样式
import './App.css'
//组件化，导入不同子组件
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'

// 导入实现路由需要的相关依赖
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// 导入路由页面
import Home from './pages/Home'
import Catalog from './pages/Catalog';
import Comment from './pages/Comment';
import Personal from './pages/Personal';
import ProductDetail from './pages/ProductDetail'
import Register from './pages/register'
import WishList from './pages/WishLists'

// redux相关
import { Provider } from 'react-redux' 
import store from './redux/store'

export default function App() {
  return (
    // 使用redux
    <Provider store={store}>
      <Router>
        <div className="container-principal">
          {/* 页面顶部栏，包括logo，注册，心愿单和时间展示 */}
          <Header />
          {/* 二级导航栏，实现主页，产品区，反馈信息，个人主页的功能 */}
          <Nav />
          {/* 统一配置路由 */}
          <Routes>
            {/* 主页 */}
            <Route path='/' exact Component={Home} />
            {/* 产品区 */}
            <Route path='/catalog' exact Component={Catalog} />
            {/* 通过不同的产品id进行跳转 */}
            <Route path="/product/:id" exact element={<ProductDetail />} />
            {/* 反馈信息(暂未实现提交功能) */}
            <Route path='/comment' exact Component={Comment} />
            {/* 个人主页（暂未设计） */}
            <Route path='/personal' exact Component={Personal} />
            {/* 注册(暂未实现注册信息保存和登录) */}
            <Route path='/register' exact Component={Register} />
            {/* 心愿单 */}
            <Route path='/wishList' exact Component={WishList} />
          </Routes>
          {/* 底部展示项目标题 */}
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}