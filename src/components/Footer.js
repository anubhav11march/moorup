import React from 'react'
import { NavLink } from "react-router-dom"


const Footer = () => {
    return (
        <div className="footer">
            <div style={{alignSelf:"center",width:"50%",marginLeft:"10%"}}>
                <img style={{width:"30%"}} src={require("../images/moorup-dark-green--2--10@1x.png").default} alt="" srcset="" />
            </div>
            <div style={{width:"50%"}} className="footer-list">
                <ul className="listStyle">
                    <li>
                    <NavLink className="link"  activeClassName="activeLink" to="/teams"> About</NavLink>
                    </li>
                    <li>
                    <NavLink className="link"  activeClassName="activeLink" to="/partner"> Partners</NavLink>
                    </li>
                    <li>
                    <NavLink className="link"  activeClassName="activeLink" to="/contactUs">Contact</NavLink>
                    </li>
                </ul>
                <ul className="listStyle">
                    <li>
                    <NavLink className="link" activeClassName="activeLink" to="/whatAbout"> What to Expect</NavLink>
                    </li>
                    <li>
                    <NavLink  className="link"  activeClassName="activeLink" to="/warranty"> Warranty</NavLink>
                    </li>
                </ul>
                <ul className="listStyle">
                    <li>Careers</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
