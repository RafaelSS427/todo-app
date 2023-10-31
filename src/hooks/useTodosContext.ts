import { useContext } from 'react'
import { TodosContext } from '@/context'

export const useTodosContext = () => {
    const context = useContext(TodosContext)

    return {
        ...context
    }
}
