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
                  <div className="drop2item1">
                      <img style={{marginRight:'1rem'}} src={require('../images/norway.png').default}/>
                       Norway</div>
                  <div className="drop2item1"> 
                  <img style={{marginRight:'1rem'}} src={require('../images/sweden.png').default}/>
                  Sweden</div>
                  <div className="drop2item1"> 
                  <img style={{marginRight:'1rem'}} src={require('../images/denmark.png').default}/>
                  Denmark</div>
                  <div className="drop2item1">
                  <img style={{marginRight:'1rem'}} src={require('../images/iceland.png').default}/>
                       Iceland</div>
                  <div className="drop2item1">
                  <img style={{marginRight:'1rem'}} src={require('../images/united-kingdom.png').default}/>
                       England</div> 
            </div>:null}
                  </div> 
        </div>
    )
}

export default ChooseCountry
