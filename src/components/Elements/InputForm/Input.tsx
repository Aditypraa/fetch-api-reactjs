function Input({ type, placeholder, name }: { type: string, placeholder: string, name: string }) {
    return (
        <input type={type}
            className="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50"
            placeholder={placeholder}
            name={name}
        />
    )
}

export default Input