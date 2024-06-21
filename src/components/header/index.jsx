//导入Header样式
import './index.css'

//导入图片url
import logo from "../../resources/icons/logo.png"
import userSvg from "../../resources/icons/user.svg"
import heartSvg from "../../resources/icons/heart.svg"
// import shoppingCartSvg from "../../resources/icons/shopping-cart.svg"

//导入路由所需依赖
import { Link } from 'react-router-dom'

//导入状态维护和状态更改的钩子方法
import { useState } from 'react'
import { useEffect } from 'react'

export default function Header() {
// 时间状态
  const [time, setTime] = useState('');
// 每1s更新时间，创建新的计时器的同时删除旧计时器
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString() + ' 星期' + '日一二三四五六'.charAt(new Date().getDay()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
// 渲染
  return (
    <header>
        {/* Logo */}
      <div className="logo-header">
        <img src={logo} />
      </div>
      {/* 使用路由对注册，心愿单功能进行跳转,已在App组件统一配置跳转组件 */}
      <div className="options-header">
        <ul className="nav-list">
          <li>
            <Link to='/register' className='nav-item'><img src={userSvg} />Register</Link>
          </li>
          <li><Link to='/wishList' className='nav-item'><img src={heartSvg}/>WishList</Link></li>
          {/* <!-- TODO:此处购物车未实现 -->
          <li><a href="#" className="nav-item"><img src={shoppingCartSvg} sizes="16px" />Cart</a>
          </li> */}
          {/* 展示时间 */}
          <li><p id="time">{time}</p></li>
        </ul>
      </div>
    </header>
  )
}