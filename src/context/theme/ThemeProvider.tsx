import { PropsWithChildren, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { Theme } from '@/types'
import { ThemeContext } from './ThemeContext'

const INITIAL_VALUE: Theme = 'light'

export const ThemeProvider = ({ children }:PropsWithChildren) => {
    const [theme, setTheme] = useLocalStorage<Theme>('theme', INITIAL_VALUE)

    const toggleTheme = () => {
        setTheme(theme => theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}
