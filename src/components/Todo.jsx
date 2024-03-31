// import { useState } from "react";
// import { updateTodo } from "../app/features/todo/todoSlice";
// import { useDispatch } from "react-redux";

const Todo = () => {

    // const dispatch = useDispatch();

    // const [input,setInput] = useState('')

    const handleUpdate =(e)=>{
        e.preventDefault();
        // dispatch(updateTodo({id:prop.id,text:input}))
        // setInput('')
    }
    return (
        <>
            <form action="" onSubmit={handleUpdate}>
                <input type="text"/>
                <button>Update</button>
            </form>
        </>
    )
}

export default Todo;