import './App.css'
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')


  // function clearTextBox(textBox){
  //   textBox.value =""
  // }

  // const [Delete, setDelete] = useState(toDos)

//    const Del =(id)=>{
//     // const newTask =[...toDos]
//     // newTask.splice(id,1)
//     setToDos(
      
//       toDos.filter((item)=>
    
      
   
//         toDos.splice(item.id,1)
//       )
//        )
    
    
   
// }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo}  onChange={(e) => { setToDo(e.target.value) }} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          if(toDo===""){
            alert("Text enter chey myre")
          }else{ setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} }} className="fas fa-plus"></i>
      </div>
      <div className="todos">

        {toDos.map((obj) => {


          return (<div className="todo">
            <div className="left">
              <input onChange={(e) => {

                // console.log(e.target.checked)
                // console.log(obj.id)

                setToDos(toDos.filter(obj2 => {
                  if (obj2.id === obj.id) {
                    // console.log(obj2.id)
                    obj2.status = e.target.checked
                  }
                  return obj2
                }))




              }} value={obj.status} type="checkbox" name="" id="" />

              {/* This p tag is used to display todo on clicking the add button */}
              <p>{obj.text}</p>

            </div>
            <div className="right">

              {/* delete button  */}
              <i 
               onClick={(e)=>

                {
                  let index= toDos.findIndex(obj=>{return obj.id==e.target.id})
                  // console.log(obj.id)
                  // console.log(e.target.id)
                  // console.log(index)
                  if (index !== -1) {
                    console.log("entered")
                    toDos.splice(index,1);
                    setToDos([...toDos]);
                }
                else{
                  console.log("Item not found")
                }
              }
              }
            
              id={obj.id}   className="fas fa-times"></i>

            </div>
          </div>)
        })}

        {/* map method for displaying todo on selecting checkbox */}

        {toDos.map((obj) => {
          if (obj.status) {
            return (<h1 key={obj.id}>{obj.text}</h1>)
          }
          return null
        })}


      </div>
    </div>
  );
}

export default App;



