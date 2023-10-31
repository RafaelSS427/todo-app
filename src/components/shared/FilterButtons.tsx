import { Dispatch, FC, SetStateAction } from 'react'
import { MenuButton } from './MenuButton'
import { ListFilter } from '@/types'

export type FilterButtonsProps = {
    activeFilter: ListFilter;
    setFilter: Dispatch<SetStateAction<ListFilter>>
}

export const FilterButtons:FC<FilterButtonsProps> = ({ activeFilter, setFilter }) => (
    <div className="font-semibold flex gap-2 items-center">
        <MenuButton isActive={activeFilter === 'all'} title="All" onClick={() => setFilter('all')} />
        <MenuButton isActive={activeFilter === 'active'} title="Active" onClick={() => setFilter('active')} />
        <MenuButton isActive={activeFilter === 'completed'} title="Completed" onClick={() => setFilter('completed')} />
    </div>
)