import React from 'react'
import classes from './Header.module.css'
import logo1 from './logo1.png'

const Header = () =>{
    return(
        <div className={classes.main_div}>
            <div className={classes.left_nav}> 
                <div className={classes.logo}>
                <img src={logo1} className={classes.logo_img}/>
                </div>
                <div className={classes.title}>
                    Iterative AI
                </div>
            </div>
            <div className={classes.right_nav}>
                Contact us
            </div>
        </div>
    )
}

export default Header