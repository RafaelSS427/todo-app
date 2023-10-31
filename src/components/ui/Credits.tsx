import Balancer from 'react-wrap-balancer'

export const Credits = () => {
    return (
        <div className="text-xs !text-[black] dark:!text-primary-light lg:max-w-xs text-center 2xl:max-w-lg tracking-wider font-normal text-foreground text-opacity-70 hidden md:block lg:fixed lg:bottom-0 lg:right-0 lg:mr-4 lg:mb-4">
            <Balancer>
                Challenge by <a className="text-xs font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.frontendmentor.io/profile/RafaelSS427" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
                Coded by <a className="text-xs font-medium text-blue-600 dark:text-blue-500 hover:underline" href="https://www.rafael-sequeira-sandoval.dev" target="_blank" rel="noopener noreferrer">Rafael Sequeira Sandoval</a>
            </Balancer>
        </div>
    )
}