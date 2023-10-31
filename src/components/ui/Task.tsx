import { InputHTMLAttributes, useMemo } from 'react'
import { Circle } from './Circle'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { Todo } from '@/types'
import { useTodosContext } from '@/hooks'

const EMPTY_TODO = {
  id: '',
  isChecked: false,
  description: '',
}

interface Props {
  isInput?: boolean;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  todo?: Todo
}

export const Task = ({ isInput = false, inputProps, todo = EMPTY_TODO }: Props) => {
  const { removeTodo, checkTodo } = useTodosContext();
  const { isChecked, description } = todo;

  const todoIsValid = useMemo(() => todo.id.length > 0, [todo])

  const handleCheck = () => todoIsValid && checkTodo(todo.id)

  return (
    <div className={`task overflow-hidden flex gap-4 bg-primary-light dark:bg-primary-dark px-6 py-5 text-[#222] dark:text-[#c8cae3] ${isInput ? "rounded-md" : "border-b border-b-primary-dark/10 dark:border-b-primary-light/10"}`}>
      <div className="text-white">
        <Circle isCheck={isChecked} handleCheck={todoIsValid ? handleCheck : undefined} />
      </div>

      {
        isInput ? (
          <input
            className="w-full bg-transparent outline-none placeholder:text-gray-500"
            {...inputProps}
          />
        ) : (
          <div title={ todoIsValid ? description : undefined} className="flex-1">
            <p onClick={handleCheck} className={`cursor-pointer w-auto table ${isChecked ? "line-through text-gray-500/80" : ""}`}>{description}</p>
          </div>
        )
      }

      {
        !isInput && (
          <button
            onClick={() => todoIsValid && removeTodo(todo.id)}
            className="opacity-1 text-gray-500/80 lg:opacity-0 transition-opacity hover:text-primary-dark dark:hover:text-primary-light cursor-pointer btn-remove"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        )
      }
    </div>
  )
}