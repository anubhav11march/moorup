function CustomerReviews()
{
    return (
        <div className="main-div">
            <div className="review">
            Customer reviews
            </div>
            
            <div style={{flexDirection:"row",display:'flex',marginLeft:'5%'}}>
                <div className="customCont"  style={{marginLeft:"10%"}}>
                <div className="customCont-1" >
                    <div>
                    <p className="date">6th, June 2021</p>
                    <p className="name">Trili Echoff</p>
                    </div>
                    <img src={require("../images/ellipse-24@1x.png").default}/> 
                </div >
                <p className="customR">Lorem ipsum dolor sit amet, consectetur adipiscing elitfficitur lacus. Class aptent taciti sociosqu ad litora torquent per</p>
                </div>
                <div className="customCont2">
                <div className="customCont-2">
                    <div>
                    <p className="date2">6th, June 2021</p>
                    <p className="name2">Trili Echoff</p>
                    </div>
                    <img src={require("../images/ellipse-24@1x.png").default}/> 
                </div >
                <p className="customR2">Lorem ipsum dolor sit amet, consectetur adipiscing elitfficitur lacus. Class aptent taciti sociosqu ad litora torquent per</p>
                </div>
                <div className="customCont4">
                <div className="customCont-1">
                    <div>
                    <p className="date">6th, June 2021</p>
                    <p className="name">Trili Echoff</p>
                    </div>
                    <img src={require("../images/ellipse-24@1x.png").default}/> 
                </div >
                <p className="customR">Lorem ipsum dolor sit amet, consectetur adipiscing elitfficitur lacus. Class aptent taciti sociosqu ad litora torquent per</p>
                </div>
                <div className="customCont3">
                <div className="customCont-2">
                    <div>
                    <p className="date2">6th, June 2021</p>
                    <p className="name2">Trili Echoff</p>
                    </div>
                    <img src={require("../images/ellipse-24@1x.png").default}/> 
                </div >
                <p className="customR2">Lorem ipsum dolor sit amet, consectetur adipiscing elitfficitur lacus. Class aptent taciti sociosqu ad litora torquent per</p>
                </div>
                
            </div>
        </div>
    )
}

export default CustomerReviews