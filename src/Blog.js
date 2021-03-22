import React from 'react'
import './Blog.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Blog() {
    return (
        <div className='blog-container'>
            <div className='blog-title'>
            3 Profitable Side Hustles No One’s Talking About
            </div>
            <div className='blog-author'>
            Matt Lane in Making of a Millionaire
            </div>
            <img src="https://miro.medium.com/fit/c/338/254/0*GEb9vVxrflKw8-KT" className='blog-image'/>
            
            <div className='blog-body'>
                kjdgkhfgk sdjhgbhsjg sdjgjdkg jdkghkjsdg sdhbgjhsbg jsdbgkjsdgb sjdghkjds jhdgjk
                Search Engine Project
Smart Card System
School Management Project
Online Tour Management Project
Online Mobile Shop Project
Online Sales  Inventory Management System Project
Social Networking Website Project
Online Planning Project
Online Phone Tracing Project
Online Making 
            </div>
            <div className='blog-reactions'>
            <FavoriteBorderIcon/>
            <span className='reactions-count'>34</span>
            </div>
        </div>
    )
}

export default Blog
