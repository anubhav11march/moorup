import React from "react"
import { NavLink } from "react-router-dom"
function Navigation()
{
    return (
        <div className="navigation">
            <ul className="listStyle navigation-inside">
                <li>
                   <NavLink  activeClassName="underline"   to="/whatAbout"
                               
                   > What to Expect</NavLink>
                </li>
                <li>
                <NavLink    activeClassName="underline" to="/warranty"
                
                          > Warranty</NavLink>
                </li>
            </ul>
            <div >
            <NavLink  to="/"> 
            <img style={{width:"100px",marginTop:"20px"}} src={require("../images/moorup-dark-green--2--10@1x.png").default} alt="" srcset="" />
            </NavLink>
            </div>
            <ul className="listStyle navigation-inside">
                <li>
                <NavLink   activeClassName="underline" to="/teams"
               
                  > About</NavLink>
                </li>
                <li>
                <NavLink   activeClassName="underline" to="/partner"
                                  > Partners</NavLink>
                </li>
                <li>
                <NavLink   activeClassName="underline" to="/contactUs"
                                  >Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation