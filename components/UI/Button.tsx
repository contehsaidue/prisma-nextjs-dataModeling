
interface IButton {
    children: React.ReactNode,
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({children, handleClick, ...rest}:IButton){
    return(
        <button className="rounded py-2 px-4 bg-gradient-to-r from-purple-400 to pink-300" onClick={handleClick}>{children}</button>
    )
}