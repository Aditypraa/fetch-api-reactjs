import CardProduct from "../components/Fragments/CardProduct"

function ProductsPage() {
    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header images="images/laptop.avif" />
                <CardProduct.Content title="Laptop">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci eius quod qui ea sunt placeat tempora obcaecati itaque perspiciatis. Obcaecati, nostrum ipsam. Labore minus dignissimos harum veritatis ducimus distinctio!
                </CardProduct.Content>
                <CardProduct.Footer price="6.000.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header images="images/laptop.avif" />
                <CardProduct.Content title="Laptop">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci eius quod qui ea sunt placeat tempora obcaecati itaque perspiciatis. Obcaecati, nostrum ipsam. Labore minus dignissimos harum veritatis ducimus distinctio!
                </CardProduct.Content>
                <CardProduct.Footer price="6.000.000" />
            </CardProduct>
        </div>
    )
}

export default ProductsPage
