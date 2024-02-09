import React from 'react'
import classes from './Header.module.css'

const Header = () =>{
    return(
        <div className={classes.main_div}>
            <div className={classes.left_nav}> 
                <div className={classes.logo}>
                <img src="https://i.postimg.cc/qvn5JNK8/logo1.png" className={classes.logo_img} alt="logo"/>
                </div>
                <div className={classes.title}>
                    Idea2Market-AI
                </div>
            </div>
            <div className={classes.right_nav}>
                Contact us
            </div>
        </div>
    )
}

export default Header