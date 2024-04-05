import {useState,useEffect} from 'react';

function TodoList()
{
  const [todo,setTodo] = useState("");
  const [todos,setTodos] = useState([]);
  const onSubmit = (e) => {
    e.preventDefault();
    if(todo==="")
    {
      return;
    }
    setTodos((currentArray)=>[...currentArray,todo]);
    setTodo("");    
  };
  
  useEffect(() => {    
    console.log(todos);
  },[todos]);

  return (
    <div>
      <h1>My To Dos ( {todos.length} )</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={(e) => setTodo(e.target.value)} 
          value={todo} 
          type="text" placeholder='write your to do' 
        />
        <button>Add to do</button>
      </form>
      <hr/>
      <ul>
        {todos.map((item,idx)=>(
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;