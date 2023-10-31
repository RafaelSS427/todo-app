
import { useMemo, useState } from 'react'
import { Task } from '../'
import { MenuOptions } from './MenuOptions'
import { useTodosContext } from '@/hooks'
import { ListFilter, Todo } from '@/types'
import { DragDropContext, Droppable, DropResult, Draggable } from 'react-beautiful-dnd'
import { FilterButtons } from './FilterButtons'

const getTodosToShow = (filter: ListFilter, todos: Todo[]): Todo[] => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => todo.isChecked === false)

    case 'completed':
      return todos.filter(todo => todo.isChecked === true)

    default:
      return todos
  }
}

export const TodosList = () => {
  const { todos, reorder } = useTodosContext()
  const [filter, setFilter] = useState<ListFilter>('all')

  const getTodos = useMemo(() => getTodosToShow(filter, todos), [filter, todos])

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    reorder(result.source.index, result.destination.index)
  }

  return (
    <div className="flex flex-col gap-4">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {
            (provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`flex flex-col transition-colors shadow-lg rounded-md overflow-hidden border ${snapshot.isDraggingOver ? "border-dashed bg-primary-light/70 dark:bg-primary-dark/70" : "border-primary-dark/10 dark:border-primary-light/10"}`}
              >
                {
                  getTodos.map((todo, i) => (
                    <Draggable key={todo.id} draggableId={todo.id} index={i}>
                      {
                        (provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="relative"
                          >
                            <span className={`absolute h-full w-full bg-primary-light dark:bg-primary-dark opacity-75 ${snapshot.isDragging ? "block animate-pulse" : "hidden "}`} />
                            <Task todo={todo} />
                          </div>
                        )
                      }
                    </Draggable>
                  ))
                }

                {provided.placeholder}
                <MenuOptions
                  activeFilter={filter}
                  setFilter={setFilter}
                />
              </div>
            )
          }
        </Droppable>
      </DragDropContext>

          <div className="text-gray-500/80 shadow-lg bg-primary-light dark:bg-primary-dark p-3 flex justify-center items-center rounded-md border-primary-dark/10 dark:border-primary-light/10 lg:hidden">
            <FilterButtons activeFilter={filter} setFilter={setFilter} />
          </div>
    </div>
  )
}