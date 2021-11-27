import React, { useState } from 'react'
const ChooseCountry = () => {
    const[click,setClick]=useState(false);
    const toggleHandler=()=>{
        setClick(!click)
    }
    return (
        <div className="chooseCountry">
        <div className="textCountry">
                Where to buy a
            <br/>
                Verified Pre-Owned Product ?
                </div>
                <div className="body-2-1-textW">
                    <div className="dropdownC" onClick={toggleHandler}>
                        Choose Country
                        <img src={require('../images/icons8-expand-arrow-90.png').default}/>
                    </div>
                    {click?
            <div className="dropdown2C">
                <ul className="dropdownUlC">
                    <li className="dropDownLiC">Norway</li>
                    <li>Sweden</li>
                    <li>Denmark</li>
                    <li>Iceland</li>
                    <li>England</li>
                </ul>
            </div>:null}
                  </div> 
        </div>
    )
}

export default ChooseCountry
