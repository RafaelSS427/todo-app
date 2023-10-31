import { Todo } from './todo'
import { Theme } from './'

export type ITodosContext = {
    todos: Todo[];
    createTodo: (todo: Todo) => void;
    removeTodo: (id: string) => void;
    checkTodo: (id: string) => void;
    clearCompleted: () => void;
    reorder: (startIndex: number, endIndex: number) => void;
}

export type IThemeContext = {
    theme:Theme;
    toggleTheme: () => void;
}