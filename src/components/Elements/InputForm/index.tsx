import Input from './Input'
import Label from './Label'

function InputForm({ type, placeholder, name, label }: { type: string, placeholder: string, name: string, label: string }) {
    return (
        <div className='mb-6'>
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name} />
        </div>
    )
}

export default InputForm