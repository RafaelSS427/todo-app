import { CheckIcon } from '@heroicons/react/24/solid'

interface Props {
  isCheck?: boolean;
  handleCheck?: () => void;
}

export const Circle = ({ isCheck = false, handleCheck = undefined }: Props) => {
  return (
    <div className={`${isCheck ? "bg-gradient-to-br from-[#57ddff] to-[#c058f3]" : handleCheck === undefined ? "" : "hover:bg-gradient-to-br hover:from-[#57ddff] hover:to-[#c058f3]"} transition-colors bg-primary-dark/20 dark:bg-primary-light/20 p-[1px] grid place-content-center rounded-full`}>
      <span
        role={handleCheck ? "button" : undefined}
        // className={`h-6 w-6 select-none relative ${isCheck ? "border-none bg-gradient-to-br from-[#57ddff] to-[#c058f3]" : "border border-primary-dark/20 dark:border-primary-light/20"} rounded-full grid place-content-center`}
        className={`h-6 w-6 select-none relative rounded-full grid place-content-center ${isCheck ? "bg-gradient-to-br from-[#57ddff] to-[#c058f3]" : "bg-primary-light dark:bg-primary-dark"}`}
        onClick={handleCheck}
      >
        <CheckIcon style={{ display: isCheck ? "block" : "none" }} className="h-3 w-3" />
      </span>

    </div>
  )
}