import './index.css'

import logo from "../../resources/icons/logo.png"
import userSvg from "../../resources/icons/user.svg"
import heartSvg from "../../resources/icons/heart.svg"
import shoppingCartSvg from "../../resources/icons/shopping-cart.svg"

import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useEffect } from 'react'

export default function Header() {

  const [time, setTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString() + ' 星期' + '日一二三四五六'.charAt(new Date().getDay()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header>
      <div className="logo-header">
        <img src={logo} />
      </div>
      <div className="options-header">
        {/* <!-- TODO:此处要使用路由实现 --> */}
        <ul className="nav-list">
          <li>
            <Link to='/register' className='nav-item'><img src={userSvg} />Register</Link>
          </li>
          {/* <!-- TODO:此处心愿单未实现 --> */}
          <li><Link to='/wishList' className='nav-item'><img src={heartSvg}/>WishList</Link></li>
          {/* <!-- TODO:此处购物车未实现 -->
          <li><a href="#" className="nav-item"><img src={shoppingCartSvg} sizes="16px" />Cart</a>
          </li> */}
          {/* <!-- TODO:此处搜索框未实现 --> */}
          <li><p id="time">{time}</p></li>
        </ul>
      </div>
    </header>
  )
}