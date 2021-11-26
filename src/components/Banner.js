import React from 'react'

const Banner = () => {
    return (
        <div className="bannerN">
            <div style={{width:"60%"}} className="banner-textN">
                <h2 style={{marginBottom:"-.3rem"}}>Moorup verified</h2>
                <h2 style={{margin:"0"}}>Pre Owned</h2>
                <p>
                In Moorup we believe the way to a more sustainable future is for all of us to keep the products we love longer, and choose a preowned one once we want or need to replace it. A Moorup Verified Pre-Owned product is a qualitative and trustworthy alternative to new in addition being more affordable.  
                </p>
            </div>
            <div style={{width:"40%"}}>
                <img style={{width:"100%"}}  src={require("../images/herophone@1x.png").default} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Banner
