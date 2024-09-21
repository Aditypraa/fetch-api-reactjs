import Button from "../Elements/Button"

function CardProduct({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow mx-2">
            {children}
        </div>
    )
}

const Header = ({ images }: { images: string }) => {
    return (
        <a href="#">
            <img src={images} className="p-8 rounded-t-lg" alt={images} />
        </a>
    )
}

const Content = ({ title, children }: { title: string, children: React.ReactNode }) => {
    return (
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {title}
                </h5>
                <p className="text-sm text-white">{children}</p>
            </a>
        </div>
    )
}

const Footer = ({ price }: { price: string }) => {
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">Rp. {price}</span>
            <Button type="button" className="bg-blue-600">Add To Card</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Content = Content
CardProduct.Footer = Footer

export default CardProduct