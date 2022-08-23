import React,{useState} from "react"

const AddDataForm=(props)=>{
    const initialFormState={id:null,name:""}
    const[user,setUser]=useState(initialFormState)
    const handleInputChange=event=>{
        const {name,value}=event.target
        setUser({...user,[name]:value})
    }
    return(
       <div>
<form onSubmit={event=>{event.preventDefault();if(!user.name)return;props.addData(user),setUser(initialFormState)}}>
    <input type="text" name="name" value={user.name} onChange={handleInputChange} ></input>
    <button> Add</button>
</form>
       </div> 
    )
}
export default AddDataForm