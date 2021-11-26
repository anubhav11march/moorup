import React from "react";
import Footer from "../components/Footer"
import "../css/partner.css"
 
const Partner =()=>{
  return(
      <>
   
      <div className="main">
          <div className="banner">
              <div className="banner-text">
                  <div>In Moorup we strongly believe in order to choose a preowned products as an alternative to new, we must make available a 'toolkit' of products and services that make it convenient and more affordable for our partners' end customers
                      <br/>
                      <br/>
                  </div>
                  <div>Partnering with Moorup will allow you to focus on day to day priorities, while still  being able to participate and capture the value in the fast growing prewoned consumer electronics category. With our deep commitment to the enviornment and sustanbility focus, you can be sure to  grow your business through our support in a credible and compliant matter.</div>
              </div>
              <div className="banner-img">
                  <img src={require("../images/woman-3083379-1920--1-@1x.png").default}/>
              </div>
          </div>
          <div className="body-1">
              <h2>How is Moorup differnet ?</h2>
              <p>We understand how hard it is to find a partner easy to work with. To manage the pre-owned category requires experienced partners to help you, so you can focus on creating market differentiaion and customer value. We've been there! We get it! Moorup provides solution at speed, meaning <b>WE</b> do the hard work, so <b>YOU</b> can focus your customer proposition</p>
          </div>
          <div className="body-2">
              <div className="body-2-img">
                  <img className="img-1" src={require("../images/piceasoft-logo-1@1x.png").default}/>
                  <img className="img-1" src={require("../images/easy2you@1x.png").default}/>
                  <img className="img-1" src={require("../images/cell@1x.png").default}/>
                  <img className="img-1" src={require("../images/clt-logo@1x.png").default}/>
              </div>
              <div className="body-2-text">
                  <p>Together  with  our  amazing  partners,  we're  proving  the  way  towards  a  sustainable  future  for  technology. Check out some of whom we're tearing up with   </p>
              </div>
          </div>
            <div className="body-3">
                <div style={{textAlign:'center'}}>
                <h1>Our Services</h1>

                </div>
                <div className="body-3-1">
                    <div className="body-3-2">
                        <h2>
                            Moorup Verified Pre-Owned
                        </h2>
                        <p>
                            We offer a wide range of preowned consumer electronic products such as mobile phones,tablets and smartwatches under the Moorup Verfied Pre-Owned/ or your own brand. All products are returns from trade in and buy back programs, either from mobile operators or vendors directly
                        </p>
                    </div>
                    <div className="body-3-2">
                        <h2>Insurance/Warranty</h2>
                        <p>We offer our partners insurance products made specifically for the preowned category so that you can ensure your customers feel equally protected as uf buyinf a new product</p>
                    </div>
                    <div className="body-3-2">
                        <h2>Financial Services</h2>
                        <p> We deliver various financial services to make preowned products a financially attractive proposition in the market. Including but not limited to Early Upgarde programs</p>
                    </div>
                </div>
            
                    <div className="body-3-1">
                        <div className="body-3-2">
                          <h2>
                              Trade-In and BuyBack
                          </h2>
                          <p>
                              To fuel the circular economy, we manage trade-in and buyback programs thus ensuring collected products fuel the circular economy 
                          </p>
                        </div>
                        <div className="body-3-2">
                            <h2>E-Commerce solutions</h2>
                            <p>For all our services to be enabled effectively, we deliver white-labelled storefront solutions for the partners who need an e-commerce solution built for the circular economy</p>
                        </div>
                        <div className="body-3-2">
                            <h2>
                                Customer Service Operations
                            </h2>
                            <p>From returns and warranty claims handling to fully outsourced customer services operations. We have you covered, so you can focus on your customers. If you want to know more about how we can enable you in taking a meaningful position in the circular economy, please <a style={{color:'black',fontWeight:"700"}} href="#"> contact us .</a></p>
                        </div>
                    </div>
                
               
            </div>

      </div>
         <Footer/>
      </>
  )
}
export default Partner;
