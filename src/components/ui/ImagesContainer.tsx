import { useReadLocalStorage } from 'usehooks-ts'
import { Theme } from '@/types'

const MOBILE_SCREEN:number = 650
const CUSTOM_CLASS = 'w-full max-h-[200px] lg:max-h-[300px] object-cover'
const BASE_URL = import.meta.env.BASE_URL

export const ImagesContainer = () => {
    const theme = useReadLocalStorage<Theme>('theme')
    
    return (
        <div className="absolute top-0 -z-10 w-full">
            {
                theme === 'dark' ? (
                    <picture>
                        <source media={`(min-width:${MOBILE_SCREEN}px)`} srcSet={`${BASE_URL}images/bg-desktop-dark.jpg`} />
                        <img className={ CUSTOM_CLASS } src={`${BASE_URL}/images/bg-mobile-dark.jpg`} alt="bg-dark image" />
                    </picture>
                ) : (
                    <picture>
                        <source media={`(min-width:${MOBILE_SCREEN}px)`} srcSet={`${BASE_URL}images/bg-desktop-light.jpg`} />
                        <img className={ CUSTOM_CLASS } src={`${BASE_URL}/images/bg-mobile-light.jpg`} alt="bg-light image" />
                    </picture>
                )
            }
        </div>
    )
}