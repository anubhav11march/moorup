import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div style={{alignSelf:"center",width:"50%"}}>
                <img style={{width:"150px"}} src={require("../images/moorup-dark-green--2--10@1x.png").default} alt="" srcset="" />
            </div>
            <div style={{width:"50%"}} className="footer-list">
                <ul className="listStyle">
                    <li>About</li>
                    <li>Partners</li>
                    <li>Contact</li>
                </ul>
                <ul className="listStyle">
                    <li>What To Expect</li>
                    <li>Warranty</li>
                </ul>
                <ul className="listStyle">
                    <li>Careers</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
