import React from "react"
import { Link } from "react-router-dom"
function Navigation()
{
    return (
        <div className="navigation">
            <ul className="listStyle navigation-inside">
                <li>
                   <Link className="link" to="/whatAbout"> What to Expect</Link>
                </li>
                <li>
                <Link  className="link" to="/warranty"> Warranty</Link>
                </li>
            </ul>
            <div >
            <Link className="link" to="/"> 
            <img style={{width:"100px",marginTop:"20px"}} src={require("../images/moorup-dark-green--2--10@1x.png").default} alt="" srcset="" />
            </Link>
            </div>
            <ul className="listStyle navigation-inside">
                <li>
                <Link className="link" to="/teams"> About</Link>
                </li>
                <li>
                <Link className="link" to="/partner"> Partners</Link>
                </li>
                <li>
                <Link className="link" to="/contactUs">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation