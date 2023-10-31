
type MenuButtonProps = {
    title: string;
    onClick: () => void;
    isActive?: boolean;
}

export const MenuButton = ({ title, onClick, isActive = false }: MenuButtonProps) => (
    <button
        onClick={onClick}
        className={`${isActive ? "text-[#4479da]" : ""} transition-colors hover:text-primary-dark dark:hover:text-primary-light`}
    >
        {title}
    </button>
)