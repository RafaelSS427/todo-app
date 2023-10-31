import { PropsWithChildren } from 'react'
import { ThemeProvider, TodosProvider } from './context'

export const Providers = ({ children }:PropsWithChildren) => {
  return (
    <ThemeProvider>
      <TodosProvider>
        { children }
      </TodosProvider>
    </ThemeProvider>
  )
}