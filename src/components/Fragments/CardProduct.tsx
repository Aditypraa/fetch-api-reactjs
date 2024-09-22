import Button from "../Elements/Button"

function CardProduct({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col justify-between w-full max-w-xs bg-gray-800 border border-gray-200 rounded-lg shadow mx-2 my-2">
            {children}
        </div>
    )
}

const Header = ({ images }: { images: string }) => {
    return (
        <a href="#">
            <img src={images} className="p-8 rounded-t-lg h-60 w-full object-cover" alt={images} />
        </a>
    )
}

const Content = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {title}
                </h5>
                <p className="text-sm text-white">{children?.toString().substring(0, 100)}</p>
            </a>
        </div>
    )
}

const Footer = ({ price, id, handleAddToCard }: { price: number, id: number, handleAddToCard: (id: number) => void }) => {
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">{price.toLocaleString("id-ID", { style: 'currency', currency: 'IDR' })}</span>
            <Button type="button" className="bg-blue-600" onClick={() => handleAddToCard(id)}>Add To Card</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Content = Content
CardProduct.Footer = Footer

export default CardProduct