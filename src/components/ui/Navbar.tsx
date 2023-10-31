import { useThemeContext } from '@/hooks'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export const Navbar = () => {
    const { theme, toggleTheme } = useThemeContext()

    return (
        <nav className="my-8 lg:my-14">
            <header className="flex">
                <div className="flex-1">
                    <span className="tracking-[.5em] text-white font-bold text-3xl">TODO</span>
                </div>
                <button onClick={toggleTheme} className="text-white">
                    {
                        theme === 'dark' ? (
                            <SunIcon className="w-6 h-6" />
                            ) : (
                            <MoonIcon className="w-6 h-6" />
                        )
                    }
                </button>
            </header>
        </nav>
    )
}
