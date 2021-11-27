import React, { useState } from "react";
import Footer from "../components/Footer"

import "../css/warranty.css"

const Warranty =()=>{ 
    const[click,setClick]=useState(false);
    const toggleHandler=()=>{
        setClick(!click)
    }
    const[selected,setSelected]=useState()
    return(
        <>
        
        <div className="mainW" style={{width:"100%"}}>
            <div className="bannerW">
                <div className="banner-textW">
                    <h1>Warranty</h1>
                </div>
                    <img style={{width:'50%'}} src ={require("../images/mobile-phone-repair-service-london@1x.png").default}/>
            </div>
             
            <div className ="bodyW">
                <img src ={require("../images/ben-kolde-xdlxpic3wfk-unsplash@1x.png").default}/>
                <div className="body-1W">
                    <p> We provide extended warranty to all  Moorup Verified Pre-Owned products to ensure confidence in the quality in the products we offer. </p>
                    <p> As the warrnaty conditions varies dependent on which channel or county you have bought the product, so if you face any issues, check with the channel you have bought the product through on how we best can help you</p>
                </div>
            </div>
            
            <div className="body-2W">
                <img src={require("../images/tisemobile@1x.png").default}/>
                  <div className="body-2-textW">
                       <p>
                        If you have any problems with your product, please contact Tise Mobile on <a style={{color:'#1782ff'}} href="#">shop@tisemobile.com</a> or phone number; 994 46 999</p>
                  </div>
            </div>
            <div className="body-2-1W">
                <img src={require("../images/nortel-logo-gronn-2x@1x.png").default}/>
                  <div className="body-2-1-textW">
                       <p>
                        If you have any problems with your product, please contact Moorup on <a style={{color:'#1782ff'}} href="#">contact@moorup.com</a> or phone number; 994 46 688</p>
                  </div>
            </div>
            <div className="body-2-1W">
                <img src={require("../images/power2@1x.png").default}/>
                  <div className="body-2-1-textW">
                    <div className="dropdown" onClick={toggleHandler}>
                        Choose Country
                        <img src={require('../images/icons8-expand-arrow-90.png').default}/>
                    </div>
                    {click?
            <div className="dropdown2">
                <ul className="dropdownUl">
                    <li className="dropDownLi">Norway</li>
                    <li>Sweden</li>
                    <li>Denmark</li>
                    <li>Iceland</li>
                    <li>England</li>
                </ul>
            </div>:null}
                  </div>
            </div>
            
           
        </div>
         <Footer/>
        </>
    )
}
export default Warranty;