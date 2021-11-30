import React from "react"
import { NavLink,useLocation } from "react-router-dom"
function Navigation()
{
    const location=useLocation()
    console.log(location.pathname);

    return (
        <div className="navigation">
            <ul className="listStyle navigation-inside">
                <li>
                   <NavLink  exact className={`navlinks ${location.pathname.includes('/whatAbout')?'activeclass':''}`}  activeClassName="activeclass"   to="/whatAbout"
                               
                   > What to Expect</NavLink>
                </li>
                <li>
                <NavLink exact className={`navlinks ${location.pathname.includes('/warranty')?'activeclass':''}`}  activeClassName="activeclass" to="/warranty"
                
                          > Warranty</NavLink>
                </li>
            </ul>
            <div >
            <NavLink exact to="/"> 
            <img style={{width:"100px",marginTop:"20px"}} src={require("../images/moorup-dark-green--2--10@1x.png").default} alt="" srcset="" />
            </NavLink>
            </div>
            <ul className="listStyle navigation-inside">
                <li>
                <NavLink exact className={`navlinks ${location.pathname.includes('/teams')?'activeclass':''}`} activeClassName="activeclass" to="/teams"
               
                  > About</NavLink>
                </li>
                <li>
                <NavLink exact className={`navlinks ${location.pathname.includes('/partner')?'activeclass':''}`}   activeClassName="activeclass" to="/partner"
                                  > Partners</NavLink>
                </li>
                <li>
                <NavLink exact className={`navlinks ${location.pathname.includes('/contactUs')?'activeclass':''}`}   activeClassName="activeclass" to="/contactUs"
                                  >Contact</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation