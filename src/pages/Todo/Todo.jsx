import { useState } from 'react'

export default function Todo() {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    const addTodo = (event) => {
        event.preventDefault();
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo }]);
            setNewTodo('');
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const toggleComplete = (index) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (<>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Add Your Todo List in Your Data ...
                </h2>
            </div>


            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={addTodo}>
                    <div>
                        <label htmlFor="todo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo List</label>
                        <textarea rows={5} id="todo" placeholder="Add Your Todo List" value={newTodo} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 my-5 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Add Todo</button>
                    </div>

                    
                    {todos.length ? <div className="bg-gray-25 border border-gray-100 shadow-sm rounded-lg hover:border-gray-300 hover:bg-gray-100 block w-full p-2.5">
                        {todos.map((todo, index) => (

                            <div key={index}
                                // className={` flex items-center text-black justify-between ${todo.completed ? 'bg-black' : ''}
                                className={`bg-gray-50 border border-gray-300 text-black sm:text-sm shadow-sm rounded-lg hover:border-black hover:bg-gray-200 block w-full p-2.5  `} >
                                <span className={`${todo.completed ? 'line-through' : ''}`}>{todo.text}</span>
                                <button onClick={() => toggleComplete(index)} className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Compeleted</button>
                                <button onClick={() => deleteTodo(index)} className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Delete</button>
                            </div>
                        ))}


                    </div> : ''}
                </form>

            </div>
        </div>
    </>
    )
}
