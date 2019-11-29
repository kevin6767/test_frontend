import React from 'react'
import img from '../assets/store.jpg'
import '../modules/helper.module.scss'

const Header = () =>
    <div {...{
        className: 'header_top'
    }}>
        <img src={img}  />
    </div>

export default Header
