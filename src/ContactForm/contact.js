import React,{useState} from 'react'
import axios from 'axios'
import '../css/contact.css'
 const Form = () => {
     const primitiveData={
         firstname:'',
         lastname:'',
         email:'',
         phone:'',
         message:'',
         emailTo:'contact@moorup.no'
     }
     const [initialData,setinitialData] = useState(primitiveData)
     const [count,setCount] =useState(false)
     const submitHandler= async(e)=>{
         e.preventDefault()
         try{
             console.log(initialData)
           
            await axios.post('https://moorup.herokuapp.com/api/contact/email',
            initialData)
            setCount(true)
            
         }catch{
            console.log('there is error')
         }
     } 

     const changeHandler =(e)=>{
        const name = e.target.name
        const value = e.target.value
        setinitialData((initialData)=>({...initialData, [name]:value}))
     }

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
            { count? <h3>Thank You !</h3>:
             <div>
            <h3>Send us a message</h3>
            <form  onSubmit={submitHandler}>
                <div className="inputElements">
                    <label htmlFor="firstname">First Name</label>
                    <input name="firstname" type="text" onChange={changeHandler}/>
                </div>
                <div className="inputElements">
                    <label htmlFor="lastname">Last Name</label>
                    <input name="lastname" type="text" onChange={changeHandler}/>
                </div>
                <div className="inputElements">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={changeHandler} />
                </div>
                <div className="inputElements">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" onChange={changeHandler} />
                </div>
                <div style={{width:"100%"}} className="inputElements">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="10" onChange={changeHandler}></textarea>
                </div>
                
                <button type='submit' style={{backgroundColor:"#008B8B",color:"white",padding:".5rem 1rem",border:"none",width:"100px",borderRadius:"15px"}}>Submit</button>
            
                
            </form>
            </div>}
            </div>
        </div>
        
        </>
    )
}
export default Form;