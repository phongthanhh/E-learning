import React from 'react'
import { NavLink } from 'react-router-dom'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined'
import { ROUTES_NAME } from 'constant'
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons'
import { StyledFooter } from './styled'

function Footer() {
  return (
    <StyledFooter>
      <div className="footerbody">
        <div>
          <div className="row">
            <div className="p-2 col-md-4 col-sm-6">
              <NavLink to="/" className="mr-2 textLogo">
                <span className="textE">E</span>
                learning
                <KeyboardAltOutlinedIcon className="icon__logo" />
              </NavLink>
              <ul className="menuFooter">
                <li>
                  <span className="menuFooter__icon"><LocalPhoneIcon /></span>
                  <span>0934 965 559</span>
                </li>
                <li>
                  <span className="menuFooter__icon"><MailOutlineOutlinedIcon /></span>
                  <span>tangthanh.phong99@gmail.com</span>
                </li>
                <li>
                  <span className="menuFooter__icon"><LocationOnOutlinedIcon /></span>
                  <span>Đà Nẵng</span>
                </li>
              </ul>
            </div>
            <div className="p-2 col-md-2 col-sm-3 col-6">
              <h3 className="textFooterTitle">Liên kết</h3>
              <ul className="menuFooter">
                <li>
                  <NavLink to={ROUTES_NAME.HOME}>
                    <KeyboardArrowRightOutlinedIcon />
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right" />
                  <NavLink to={ROUTES_NAME.BLOG}>
                    <KeyboardArrowRightOutlinedIcon />
                    Blog
                  </NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right" />
                  <NavLink to={ROUTES_NAME.EVENT}>
                    <KeyboardArrowRightOutlinedIcon />
                    Sự kiện
                  </NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right" />
                  <NavLink to={ROUTES_NAME.INFO}>
                    <KeyboardArrowRightOutlinedIcon />
                    Thông tin
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="p-2 col-md-2 col-sm-3 col-6">
              <h3 className="textFooterTitle">Khóa học</h3>
              <ul className="menuFooter">
                <li>
                  <NavLink to={`${ROUTES_NAME.CATEGORY}/FrontEnd`}>
                    <KeyboardArrowRightOutlinedIcon />
                    Front End
                  </NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right" />
                  <NavLink to={`${ROUTES_NAME.CATEGORY}/BackEnd`}>
                    <KeyboardArrowRightOutlinedIcon />
                    Back End
                  </NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right" />
                  <NavLink to={`${ROUTES_NAME.CATEGORY}/FullStack`}>
                    <KeyboardArrowRightOutlinedIcon />
                    Full stack
                  </NavLink>
                </li>
                <li>
                  <i className="fas fa-chevron-right" />
                  <NavLink to={`${ROUTES_NAME.CATEGORY}/Design`}>
                    <KeyboardArrowRightOutlinedIcon />
                    Web
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="p-2 col-md-4">
              <h3 className="textFooterTitle">Đăng kí tư vấn</h3>
              <form action="true">
                <input className="formFooter" type="text" placeholder="Họ và tên" />
                <input className="formFooter" type="text" placeholder="Email" />
                <input className="formFooter" type="text" placeholder="Số điện thoại" />
              </form>
              <button type="button" className="custom-btn btn__global mt-3">Đăng kí</button>
            </div>
          </div>
        </div>
      </div>
      <div className="extrafooter">
        <div className="textCardTitle">
          <p>Copyright © 2023 by Phong Thanh với mục đích học tập</p>
        </div>
        <div className="divGlobal p-0">
          <span className="menuFooter__icon iconSize"><InstagramOutlined /></span>
          <span className="menuFooter__icon iconSize"><FacebookOutlined /></span>
          <span className="menuFooter__icon iconSize"><YoutubeOutlined /></span>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
