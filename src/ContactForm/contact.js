import React from 'react'

import '../css/contact.css'
 const Form = () => {
    return (
        <>
        
        <div style={{textAlign:'center'}}>
            <h2>Get in touch:</h2>
            <p style={{width:"20%",marginLeft:"40%",fontWeight:'600'}}>Leave us a message and we will get in touch as soon as pssible.</p>
        </div>
        <div className="formCard">
            <div className="formLeft">
              <div>
                  <h3 style={{marginTop:"2rem"}}>Contact information</h3>
                  <p>
                      Phone : +4799446688
                  </p>
                  <p>
                      Email : abc@gmail.com
                  </p>
                  <p>
                      **Please note that email will be responded to within 24 hours
                  </p>
              </div>
            </div>
            <div className="formRight">

            <h3>Send us a message</h3>
            <form  action="">
                <div className="inputElements">
                    <label htmlFor="">First Name</label>
                    <input type="text" />
                </div>
                <div className="inputElements">
                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                </div>
                <div className="inputElements">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="inputElements">
                    <label htmlFor="">Phone</label>
                    <input type="text" />
                </div>
                <div style={{width:"100%"}} className="inputElements">
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
                
                <button style={{backgroundColor:"#008B8B",color:"white",padding:".5rem 1rem",border:"none",width:"100px",borderRadius:"15px"}}>Submit</button>
            
                
            </form>
            </div>
        </div>
        
        </>
    )
}
export default Form;
