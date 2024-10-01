import { useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getData } from "../utils/fetch";
import useLogin from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

function ProductsPage() {
  interface CardItem {
    id: number;
    qty: number;
  }
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  }

  const [dataProducts, setDataProducts] = useState<Product[]>([]); // State untuk menyimpan data products

  // sebelum menggunakan custom hook useLogin
  // const [username, setUsername] = useState<string | null>(null);

  useLogin(); // Menggunakan custom hook useLogin

  // sebelum menggunakan custom hook useLogin
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setUsername(getUsername(token));
  //   } else {
  //     window.location.href = "/";
  //   }
  // }, []);

  // Load data products from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("/products");
        setDataProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); // Panggil fungsi asinkron
  }, []);


  return (
    <>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6">
          {dataProducts.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header images={product.image} id={product.id} />
              <CardProduct.Content title={product.title}>
                {product.description}
              </CardProduct.Content>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
              />
            </CardProduct>
          ))}
        </div>

        {/* Card */}
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Card</h1>
          <TableCart dataProducts={dataProducts} />
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
