import { PropsWithChildren } from 'react'
import { TodosContext } from './TodosContext'
import { useLocalStorage } from 'usehooks-ts'
import { Todo } from '@/types'


export const TodosProvider = ({ children }: PropsWithChildren) => {
    const [todos, setTodos] = useLocalStorage<Todo[]>('todos', [])

    const createTodo = (todo: Todo) => {
        setTodos([...todos, todo])
    }

    const removeTodo = (id: string) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const checkTodo = (id: string) => {
        const newTodos = todos.map(todo => {

            if(todo.id === id){
                todo.isChecked = !todo.isChecked
            }

            return todo
        })

        setTodos(newTodos)
    }

    const clearCompleted = () => {
        const newTodos = todos.filter(todo => todo.isChecked !== true)
        setTodos(newTodos)
    }

    const reorder = (startIndex: number, endIndex: number) => {
        const result = [...todos]; // we create a copy of the array
        const [ removed ] = result.splice(startIndex, 1) // we remove the selected item from the list 
        result.splice(endIndex, 0, removed) // and then, we add the removed item with the new position in the list
        
        setTodos([...result]) // and we set the new list
    }

    return (
        <TodosContext.Provider value={{
            todos,
            createTodo,
            removeTodo,
            checkTodo,
            clearCompleted,
            reorder
            // setTodos
        }}>
            {children}
        </TodosContext.Provider>
    )
}