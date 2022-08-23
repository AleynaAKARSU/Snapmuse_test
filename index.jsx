import React from "react"
import AddDataForm from "../Tables/addDataForm"
import ListData from "../Tables/listData"


const Home=()=>{
const data=[{id:0,name:"Nextjs"},{id:1,name:"React"},{id:2,name:"Vuejs"}]
const [users,setUsers]=React.useState(data)
const addData=user=>{
    user.id=users.length+1,
    setUsers([...users,user])
}
const deleteData=(id)=>{
    setUsers(users.filter(user=>user.id!==id))
    console.log(users)
}

return(
<>
    <div>
<AddDataForm addData={addData} />
<ListData users={users} deleteData={deleteData}  setUsers={setUsers}/>
    </div>
    </>
)

}

export default Home