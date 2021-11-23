function CustomerReviews()
{
    return (
        <div className="main-div">
            <p style={{fontSize:"2rem",fontWeight:'bold'}}> Customer Reviews</p>
            <div style={{flexDirection:"row",display:'flex'}}>
                <div style={{display:"flex",marginLeft:"10rem"}}>
                <img src={require("../images/group-14@1x.png").default} style={{width:"300px",height:"400px",}}/>
                </div >
                <div style={{display:"flex"}}>
                <img src={require("../images/group-14@1x.png").default} style={{width:"300px",height:"400px"}}/>
                </div>
                <div style={{display:"flex"}}>
                <img src={require("../images/group-14@1x.png").default} style={{width:"300px",height:"400px"}}/>
                </div>
                <div style={{display:"flex"}}>
                <img src={require("../images/group-14@1x.png").default} style={{width:"300px",height:"400px"}}/>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviews