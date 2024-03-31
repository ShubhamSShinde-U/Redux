
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../app/features/todo/apiSlice'
// import Todo from './Todo';

// import reactRou

const AddTodo = () => {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.api);

    const { todos } = useSelector((state) => state.todo);
    // console.log(todos);

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])




    return (
        <>
            <h1>Todo</h1>
            {

                todos.map(todoA => {
                    // console.log("todoA" + todoA.text);
                    return <li key={todoA.id}>{todoA.text}  </li>
                })
            }


            <h1>All fetched data</h1>

            {status === 'loading' && <div>Loading...</div>}
            {status === 'failed' && <div>Error: {error}</div>}
            {status === 'succeeded' && (
                <div>
                    <h1>Posts</h1>
                    {status}
                    {console.log(posts)}
                    {/* {posts[0]} */}
                    <ul>
                        {posts[0].map((post, index) => (
                            <li key={index}>{post.title}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}

export default AddTodo;