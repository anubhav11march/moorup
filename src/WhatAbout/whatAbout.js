import React, { useState } from "react";
import Footer from "../components/Footer"

import "../css/whatAbout.css"
const WhatAbout =()=>{
    const[open,setOpen]=useState(false)
  const  clickHandler =(e)=>{
      setOpen(!open)
  }
    return(
        <>
      
       <div className="mainWA">
        <div className="bannerWA">
            <div className="banner-textWA" style={{width:"80%"}}>
                <div className="whatHeader">What  to  Expect</div>
                <div className="Np">You must be wandering what is the meaning of Moorup? It simply means "LIFE" in the Wai Wurrung language of Australia's First Nations people. A name we share with our sister company Moorup Australia.
                  <br/>
                  <br/>
                
                    We are Norway-based technology company,whose mission is to extend the lives of consumer electronics, and by doing so, help to address the environmental challenges left behind from the production and the lack of solutions that make reuse and recycling convenient. Our team of telecommunication experts utilizes their networks to deliver tailored solutions to partners and channels across Europe.
                </div> 
                <button className="banner-btnWA">
                    <a  className="Np" href='#'>Where to purchase ?</a>
                </button>
            </div>
            <div className="banner-imgWA" style={{width:"90%"}} >
                <img  style={{width:'70%',marginLeft:'2rem'}}src={require('../images/moorup-lifecycleartwork-02--1-@1x.png').default}/>
            </div>
        </div>
        <div className="bodyWA">
             Frequently Asked Questions
            </div>
            <div className="inr-bodyWA">
             <div className="body-1WA" style={{display:"flex",alignItems:"center", cursor:"pointer"}} onClick={clickHandler}>
                 <h2>Why choose a Moorup Verified Pre-Owned product, instead of new one ? </h2>
                 {open?<img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem",transform:"rotate(180deg)"}} />: <img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem"}} />}
                 </div>
                 {open? <div className="body-1-1WA">
                     <p>Environment:Today, an estimated 1.5 billion telephones are produced every single year, which has significant environmental impact. It is as safe as buying new, but cheaper and immnesly beneficial for our planet </p>
                 </div>:null}  
        </div>
             <div className="inr-bodyWA">
                 <div className="body-1WA" style={{display:"flex",alignItems:"center", cursor:"pointer"}} onClick={clickHandler}>
                     <h2>Is is safe to buy preowned products ?</h2>
                     {open?<img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem",transform:"rotate(180deg)"}} />: <img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem"}} />}

                 </div> 
                 {open?
                     <div className="body-2WA">
                         <p>YES! It is just as safe to buy a Moorup Verified Per-Owned product as it is to buy a new one. All product has been through Moorup Quality Assuarence Process, and are sold with a warranty. If the product has been refurbished it has been with original parts and by service partners authorized by the manufacturer </p>
                     </div>:null
                     }
                 
             </div>
             <div className="inr-bodyWA">
                 <div className="body-1WA" style={{display:"flex",alignItems:"center", cursor:"pointer"}} onClick={clickHandler}>
                     <h2>Where do products come from?</h2>
                     {open?<img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem",transform:"rotate(180deg)"}} />: <img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem"}} />}

                 </div>   
                 { open?
                     <div className="body-2WA">
                         <p> All Moorup Verified Pre-Owned products are return from returns from trade in and buy back programs, either from mobile operators or vendors directlty  </p>
                     </div>:null
                     }
                 
             </div>
             <div className="inr-bodyWA">
                 <div className="body-1WA" style={{display:"flex",alignItems:"center", cursor:"pointer"}} onClick={clickHandler}>
                     <h2>What does the warranty cover ?</h2>
                     {open?<img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem",transform:"rotate(180deg)"}} />: <img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem"}} />}

                 </div>
                 {open?
                     <div className="body-2WA">
                         <p>Moorup Verified Pre-Owned products depends on product category and from which  partner its has been bought from. It has the same cover as issued by manufacturer when the product  was new. Though self-inflicted damage such as broken screen, etc. are naturally not covered </p>
                     </div>:null}
                 
             </div>
             <div className="inr-bodyWA">
                 <div className="body-1WA" style={{display:"flex",alignItems:"center", cursor:"pointer"}} onClick={clickHandler}>
                     <h2>What about battery capacity ?</h2>
                     {open?<img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem",transform:"rotate(180deg)"}} />: <img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem"}} />}

                 </div>    
                 {open?
                     <div className="body-2WA">
                         <p>Battey  is a degrading product. When buying a used electronic product, it is normal for hte battery capacity to somewhat reduced from when it was new. However, Moorup guarantees that all product has minimum 85% remaining battery capacity </p>
                     </div>:null}
                 
             </div>
             <div className="inr-bodyWA">
                 <div className="body-1WA" style={{display:"flex",alignItems:"center", cursor:"pointer"}} onClick={clickHandler}>
                     <h2> What is meant by the Quality Assuarence Process ?</h2>
                     {open?<img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem",transform:"rotate(180deg)"}} />: <img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem"}} />}

                 </div>  {open?   
                     <div className="body-2WA">
                         <p>First, product is cosmetically checked for usage marks or any damage. Only a finest slip through and undergo a through testing process to eventually be classified as Moorup Verified Pre-Owned</p>
                         <p>For testing, the product is connected ( if it is a phone or a tablet ) to Moorup's diagnostic tool to verify  all the functionalities such as camera, speaker, microphone, physical buttons, sensor and screen features are in good working order </p>
                         <p>The battery is checked and tested to confirm 85% remaining capacity</p>
                         <p>All content is deleted and operating system is reinstalled with the latest version</p>
                         <p>Finally, product is cleaned before packing it in recyclable box</p>
                     </div>:null}
                 
             </div>
             <div className="inr-bodyWA">
                 <div className="body-1WA" style={{display:"flex",alignItems:"center", cursor:"pointer"}} onClick={clickHandler}>
                     <h2> Still cant't find what you are looking for ?</h2>
                     {open?<img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem",transform:"rotate(180deg)"}} />: <img src={require('../images/dropD.png').default} style={{height:"2rem",width:"2rem"}} />}
                 </div>   
                    {open? <div className="body-2WA">
                     <h2> Contact us today:</h2>
                         <p>Phone Number: +47 994 688</p>
                         <p>Email: contact@moorup.no</p>
                     </div>:null}
                 
             </div>
             
        
       </div>
          <Footer/>
       </>
    )
}
export default WhatAbout;