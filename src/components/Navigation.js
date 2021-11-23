import React from "react"
import { NavLink } from "react-router-dom"
function Navigation()
{
    return (
        <div className="navigation">
            <ul className="listStyle navigation-inside">
                <li>
                   <NavLink className="link" activeClassName="activeLink" to="/whatAbout"> What to Expect</NavLink>
                </li>
                <li>
                <NavLink  className="link"  activeClassName="activeLink" to="/warranty"> Warranty</NavLink>
                </li>
            </ul>
            <div >
            <NavLink className="link" to="/"> 
            <img style={{width:"100px",marginTop:"20px"}} src={require("../images/moorup-dark-green--2--10@1x.png").default} alt="" srcset="" />
            </NavLink>
            </div>
            <ul className="listStyle navigation-inside">
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
        </div>
    )
}

export default Navigation