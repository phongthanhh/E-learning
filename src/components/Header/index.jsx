import { BarsOutlined } from '@ant-design/icons'
import { LOGO } from 'assets'
import { ROUTES_NAME } from 'constant'
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCategoryAction } from 'stores'
import { StyleHeader } from './styled'

function Header() {
  const { categoryArr } = useSelector((state) => state.categoryReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategoryAction())
  }, [])

  const renderCategory = useMemo(() => categoryArr?.map(((item) => (
    <li key={item.maDanhMuc}>
      <NavLink to={`${ROUTES_NAME.CATEGORY}/${item.maDanhMuc}`}>{item.tenDanhMuc}</NavLink>
    </li>
  ))), [categoryArr])

  return (
    <StyleHeader>
      <div className="header__left">
        <NavLink to="/home">
          <img src={LOGO} alt="logo" width={250} />
        </NavLink>
        <form>
          <input type="text" className="searchForm ml-4" placeholder="Tìm kiếm" />
        </form>
      </div>
      <div className="header__right">
        <ul className="header__right__menu">
          <li className="courseCate">
            <BarsOutlined className="mr-1" />
            <NavLink className="menu__name" to="/">Danh mục</NavLink>
            <ul className="courseCateList">
              {renderCategory}
            </ul>
          </li>
          <li>
            <NavLink className="menu__name" to="/">Khóa học</NavLink>
          </li>
          <li><NavLink className="menu__name" to="/">Blog</NavLink></li>
          <li><NavLink className="menu__name" to="/">Sự kiện</NavLink></li>
          <li><NavLink className="menu__name" to="/">Thông tin</NavLink></li>
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
