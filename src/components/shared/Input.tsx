import { FormEvent, useState } from 'react'
import { Task } from '../'
import { useTodosContext } from '@/hooks'

export const Input = () => {
    const { createTodo } = useTodosContext()
    const [value, setValue] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(value.length === 0) return;

        createTodo({
            id: crypto.randomUUID().toString(),
            isChecked: false,
            description: value
        })

        setValue('')
    }

    return (
        <form className="rounded-md border-primary-dark/10 dark:border-primary-light/10" onSubmit={handleSubmit} noValidate>
            <Task
                isInput
                inputProps={{
                    type: "text",
                    value,
                    onChange: (e) => setValue(e.target.value),
                    placeholder: "Create a new todo..."
                }}
            />
        </form>
    )
}
