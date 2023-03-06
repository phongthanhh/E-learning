import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyleHeader } from './styled'

function Header() {
  return (
    <StyleHeader>
      <div className="header__left">
        <NavLink to="/home"> CyberSoft</NavLink>
        <a href="/home"> abc</a>
      </div>
      <div className="header__right">
        <ul className="menu__header">
          <li>Danh mục</li>
          <li>Khóa học</li>
          <li>Blog</li>
          <li>Sự kiện</li>
        </ul>
      </div>
      <div className="header__showIcon">
        <button type="button" className="btn__global">
          Đăng nhập
        </button>
      </div>
    </StyleHeader>
  )
}

export default Header
