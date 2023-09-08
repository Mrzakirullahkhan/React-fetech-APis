// import css
import "./component.css"
import { useState } from "react"
// commeent me aik function aega
function App(){
    const [data, setData]=useState([]);
    const Apis = ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(res => {
            // console.log(res)
            setData(res)
        })
        .catch((err)=>console.log(err))
    
    }
    return (
        <div className="container">
            <h1 className="header">Fetch Apis </h1>
            <h2>Click button for fetching the Apis </h2>
            <button className="btn" onClick={Apis}>Click me</button>
           <Todolist data={data}/>
        </div>
    )
}

function Todolist({data}){
    return(
        <ul className="ullist">
            {
                data.map((todoItem)=>(

                <li className="mylist">{todoItem.title}</li>
                ))
            }
        </ul>
    )
}


export default App;