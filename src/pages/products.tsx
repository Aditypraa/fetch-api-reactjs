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

function ProductsPage() {
    return (
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
    )
}

export default ProductsPage
