import React, { useState } from "react";
import Footer from "../components/Footer"

import '../css/team.css';
;


const Teams =()=>{

    return(
        <>
        
         <div className="mainT">
                 <div className="bannerT">
                     <div className="banner-imgT">
                             <div className="border1"></div>
                             <div className="border2"></div>
                             <img  className="bImgT" src={require('../images/joseph-gruenthal-xgc-1eh-zgi-unsplash@1x.png').default}/>
                     </div>
                     <div className="banner-textT">
                           <div className="textTh2">Who are we ? </div>
                           <p>We are Norwegian based circular economy company with a mission to extend the life of contribute to resolve the environmnetal challenges created by the production of billions of electronic products produced every year. The way we do this is to deliver products and services that enables a true circular economy business for  the partners we work with.</p>
                     </div>
                 </div>
             <div className="body-1T">
                 <div className="bH2T">
                 <h2 >
                      Our Mission
                  </h2>
                 </div>
                  <div className="bPT">
                  
                      Our mission of 'Saving the planet one smartphone at a time' might sound trivial, but we actually believe that our efforts, big or small, have a postive contribution to the world around us  
                  
                  </div>    
             </div>
             <div className="body-2T">
                 <div className="th2"> Meet the Team</div>
                 <div className="tp">We are highly experienced global team from telecon and consulting sector, giving the assurance we are trusted partner to rely on.</div>
             </div>
             <div className="body-3T">
                 <h3>Management</h3>
                 <div className="Main-colT">
                     <div className="col-1T">
                     <div className="body-3-1T">
                     <img src={require("../images/andersbw-1@1x.png").default}/>
                     <div className="subBodyT">
                         <div style={{display:"flex",alignItems:"center"}}>
                         <p className="p1T">Anders<br/>
                         Landergren
                         </p>
                         <img src={require("../images/linkedin-1@1x.png").default} style={{height:"1rem",width:'.8rem'}}/>
                         </div>
                         <p style={{color:"#007e690",fontWeight:"bold",fontSize:'1.2rem'}}>Co-Founder & CEO </p>
                         <p className="p3T">25 year commercial experience from Telecom, recently as Global Head of Devices in Telenor Group. Anders has worked across Europe and Asia for Telenor and Brightstar and held multiple commercial management positions</p>
                     </div>
                 </div>
                 <div className="body-3-1T">
                     <img src={require("../images/sundarabw-1@1x.png").default}/>
                     <div className="subBodyT">
                     <div style={{display:"flex",alignItems:"center"}}>
                         <p className="p1T">Sundara<br/>
                         Rajan
                         </p>
                         <img src={require("../images/linkedin-1@1x.png").default} style={{height:"1rem",width:'.8rem'}}/>
                         </div>
                         <p style={{color:"#007e690",fontWeight:"bold",fontSize:'1.2rem'}}>CTO </p>
                         <p className="p3T">Sundara's background spans accross multiple companies and sector as CTO and as a consultant. Before joining Moorup he was CTO in Admincontrol AS - part of Visma.</p>
                     </div>
                 </div>
                     </div>
                     <div className="body-3-2T">
                     <img src={require("../images/sameerbw-1@1x.png").default}/>
                     <div className="subBodyT">
                     <div style={{display:"flex",alignItems:"center"}}>
                         <p className="p1T">Sameer<br/>
                         Sikandar
                         </p>
                         <img src={require("../images/linkedin-1@1x.png").default} style={{height:"1rem",width:'.8rem'}}/>
                         </div>
                         <p style={{color:"#007e690",fontWeight:"bold",fontSize:'1.2rem'}}>COO </p>
                         <p className="p3T"> Sameer has a long global track record from the Telecom industry within commercial and supply chain management. Last 10 years in Brightstar where he recently has managed Brightstars buy back business out of Hong Kong</p>
                     </div>
                 </div>
                     
                 </div>
               

                 <h3>The Board</h3>
                 <div className="img-bodyT">
                     <div className="img-body-1T">
                          <img src={require("../images/anderslierbw@1x.png").default}/> 
                          <p>Anders Lier </p>
                         <p className="p2T">Chairman</p>    
                     </div>
                  <div  className="img-body-1T">
                 <img src={require("../images/rolv-erikbw@1x.png").default}/>
                 <p>Rolv-erik Spilling</p>
                 </div>
                  <div  className="img-body-1T">
                 <img src={require("../images/nicolaibw@1x.png").default}/>
                 <p>Nicolai Halbo</p>
                 <p className="p2T">Director</p>
                 </div>
                 <div  className="img-body-1T">
                 <img src={require("../images/raj-j-bw@1x.png").default}/>
                 <p>Raj Kapoor</p>
                 <p className="p2T">Director</p>
                 </div>
                 <div  className="img-body-1T">
                 <img src={require("../images/john-chambersbw@1x.png").default}/>
                 <p>John Chambers</p>
                 <p className="p2T">Director</p>
                 </div>
                 </div>
                 <h3>Advisors</h3>
                 <div className="img-bodyT">
                     <div className="img-body-2T">
                     <img src={require("../images/abrahambw@1x.png").default}/>
                     <p> Abhram Foss</p>
                     <p className="p2T">Advisor</p>
                     </div>
                     <div className="img-body-2T">
                     <img src={require("../images/david-012-edited--1-@1x.png").default}/>
                     <p>David Nanayakkara</p>
                     </div>
                 
                 </div>
             </div>
         </div>
           <Footer/>
        </>
    )
}
export default Teams;