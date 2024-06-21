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
    <Provider store={store}>
      <Router>
        <div className="container-principal">
          <Header />
          <Nav />
          <Routes>
            <Route path='/' exact Component={Home} />
            <Route path='/catalog' exact Component={Catalog} />
            <Route path="/product/:id" exact element={<ProductDetail />} />
            <Route path='/comment' exact Component={Comment} />
            <Route path='/personal' exact Component={Personal} />
            <Route path='/register' exact Component={Register} />
            <Route path='/wishList' exact Component={WishList} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  )
}