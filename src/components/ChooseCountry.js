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
            <div className="dropdown21">
                  <div className="drop2item1"> Norway</div>
                  <div className="drop2item1"> England</div>
                  <div className="drop2item1"> Iceland</div>
                  <div className="drop2item1"> Germany</div>
                  <div className="drop2item1"> Norway</div>
                  <div className="drop2item1"> Norway</div>
                  <div className="drop2item1"> Norway</div>
                  <div className="drop2item1"> Norway</div>
                   
               
            </div>:null}
                  </div> 
        </div>
    )
}

export default ChooseCountry
