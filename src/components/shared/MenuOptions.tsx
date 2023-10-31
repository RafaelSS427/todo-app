import { useCallback } from 'react'
import { useTodosContext } from '@/hooks'
import { MenuButton } from './MenuButton'
import { FilterButtons, FilterButtonsProps } from './FilterButtons'

type Props = FilterButtonsProps

export const MenuOptions = ({ activeFilter, setFilter }: Props) => {

    const { todos, clearCompleted } = useTodosContext()

    const itemsLeft = useCallback(() => todos.filter(todo => !todo.isChecked).length, [todos])

    return (
        <div className="text-sm text-gray-500/80 bg-primary-light dark:bg-primary-dark p-3 flex justify-between items-center">
            <p>{itemsLeft()} items left</p>

            <div className="hidden lg:block">
                <FilterButtons activeFilter={activeFilter} setFilter={setFilter} />
            </div>

            <MenuButton title="Clear completed" onClick={clearCompleted} />
        </div>
    )
}