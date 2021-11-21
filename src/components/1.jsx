import React from 'react'
import "./style.css"

const Todo = () => {
   const [inputdata,setInputData]=React.useState("");
   const [items,setItems]=React.useState([]);
    const addItem=()=>{
        if(!inputdata){
            console.log("Fill")
        }
        else{
            const myNewInputData={
                id: new Date().getTime().toString(),
                name:inputdata,
            }
            setItems([...items,inputdata])
            setInputData("");
        }
    }
    const deleteItem=(index)=>{
        const updatedItems=items.filter((curElem)=>{
            return curElem.id != index;
        })
        setItems(updatedItems);
    }
    return (
        <div className="main-div">
        <div className="child-div">
            <fiqure>
                <img className="figureImg" src="./images/todo.svg" alt="todo logo" />
                <figcaption className="figCaption">Add Your List Here ∑</figcaption>
            </fiqure>
            <div className="addItems">
                <input type="text" placeholder ="✍ Add Item"className="form-control" value={inputdata}
                onChange={(e)=>setInputData(e.target.value)} />
                <i className="fa fa-plus-square add-btn" onClick={addItem}></i>
            </div>
            {/* show or items */}
            <div className="showItems">
                {items.map((props,index)=>{
                    return <div className="eachItem" key={index}>
                    <h3>{props.name}</h3>
                    <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn"
                    onClick={()=>deleteItem(props.id)}></i>
                    </div>
                    </div>})}
                
                
            </div>
            
            
            <div className="showItems">
                <button className="btn effect04" data-sm-link-text="Remove All"><span>Check List</span></button>
            </div>
        </div>
            
        </div>
    )
}

export default Todo
