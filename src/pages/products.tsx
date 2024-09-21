import Button from "../components/Elements/Button"
import CardProduct from "../components/Fragments/CardProduct"

const dataProducts = [
    {
        id: 1,
        title: "Laptop",
        price: "6.000.000",
        images: "images/laptop.avif",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci eius quod qui ea sunt placeat tempora obcaecati itaque perspiciatis. Obcaecati, nostrum ipsam. Labore minus dignissimos harum veritatis ducimus distinctio!"
    },
    {
        id: 2,
        title: "Smartphone",
        price: "4.000.000",
        images: "images/laptop.avif",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci eius quod qui ea sunt placeat tempora obcaecati itaque perspiciatis. Obcaecati, nostrum ipsam. Labore minus dignissimos harum veritatis ducimus distinctio!"
    },
    {
        id: 3,
        title: "Headset",
        price: "1.000.000",
        images: "images/laptop.avif",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci eius quod qui ea sunt placeat tempora obcaecati itaque perspiciatis. Obcaecati, nostrum ipsam. Labore minus dignissimos harum veritatis ducimus distinctio!"
    },
    {
        id: 4,
        title: "Keyboard",
        price: "500.000",
        images: "images/laptop.avif",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci eius quod qui ea sunt placeat tempora obcaecati itaque perspiciatis. Obcaecati, nostrum ipsam. Labore minus dignissimos harum veritatis ducimus distinctio!"
    }

]

const email = localStorage.getItem("email")

function ProductsPage() {

    // Implement event handler for logout button
    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/"
    }

    return (
        <>
            <div className="flex justify-end items-center h-20 bg-violet-500 text-white px-10">
                {email}
                <Button type="button" className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
                {dataProducts.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header images={product.images} />
                        <CardProduct.Content title={product.title}>
                            {product.description}
                        </CardProduct.Content>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </>
    )
}

export default ProductsPage
