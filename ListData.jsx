import React,{ useState } from "react"


const ListData=(props)=>{
    
    const handleInputChange=event=>{
        let id=event.target.id
        let elements = [...props.users];
       // console.log("elements,",elements)
        //console.log("props.users",props.users)
  let currentElementIndex = elements.find((x) => 
   
    x.id===parseInt(id)
  );
  let currentElementId=currentElementIndex.id
  console.log(currentElementId)
  if (currentElementIndex === -1) return;
  elements[currentElementId] = { id: parseInt(id), name: event.target.value };
props.setUsers(elements)
console.log(elements)
 

  
  


        
       
    }
return(
    <div>
        <ul >
{props.users.map(user=>(
    
    <li key={user.id}><input type="text" value={user.name} id={user.id} onChange={handleInputChange}/>

    <button onClick={event=>  (  event.preventDefault(),
props.deleteData(user.id))}> Sil</button>
    </li>
  
   
   


    ))}
</ul>
    </div>
)
}
export default ListData