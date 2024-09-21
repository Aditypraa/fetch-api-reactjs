
function Button({ children, className, type }: { children: React.ReactNode, className: string, type: "submit" | "button" }) {
    return (
        <button className={`${className} h-10 px-6 font-semibold rounded-md text-white`} type={type}>
            {children}
        </button>
    )
}

export default Button