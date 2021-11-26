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
            <h2 style={{fontSize:'20pt',fontWeight:'700'}} className='contactH'>Get in touch:</h2>
            <p style={{width:"30%",marginLeft:"35%",fontSize:'16pt',}} className='contactP'>Leave us a message, and we will get in touch as soon as possible.</p>
        </div>
        <div className="formCard">
            <div className="formLeft">
              <div>
                  <h3 style={{marginTop:"2rem"}}>Contact information</h3>
                  <div className="lFt">
                     <img src={require('../images/path-61-1@1x.png').default} style={{height:'.8rem',width:'.8em',marginRight:'1rem'}}/>
                      Phone : +4799446688
                  </div>
                  <div className="lFt">
                  <img src={require('../images/path-60-1@1x.png').default} style={{height:'.8rem',width:'1rem',marginRight:'1rem'}}/>
                      Email : contact@moorup.no
                  </div>
                  <div style={{marginTop:"1rem"}}>
                      **Please note that email will be responded to within 24 hours
                  </div>
              </div>
            </div>
            <div className="formRight">
            { count?
            <div style={{width:"100%",height:"100%",textAlign:"center"}}> <h1 style={{fontWeight:"bold",fontFamily:'Axiforma',fontSize:"50pt"}}>Thank You !</h1></div>:
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
                
                <button type='submit' style={{backgroundColor:"#008B8B",color:"white",padding:".5rem 1rem",border:"none",width:"100px",borderRadius:"15px",alignSelf:"center",alignItems:'center',display:'flex'}}>Submit
                 <img src={require('../images/path-238@1x.png').default} style={{height:'1rem',width:'1rem',marginLeft:'1rem'}}/>
                </button>
            
                
            </form>
            </div>}
            </div>
        </div>
        
        </>
    )
}
export default Form;
