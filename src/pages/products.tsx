import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getData } from "../utils/fetch";
import useLogin from "../hooks/useLogin";

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

  const [card, setCard] = useState<CardItem[]>([]); // State untuk menyimpan item yang ada di card
  const [totalPrice, setTotalPrice] = useState(0); // State untuk menyimpan total harga
  const [dataProducts, setDataProducts] = useState<Product[]>([]); // State untuk menyimpan data products

  // sebelum menggunakan custom hook useLogin
  // const [username, setUsername] = useState<string | null>(null);

  const { username } = useLogin(); // Menggunakan custom hook useLogin

  // Load card from local storage
  useEffect(() => {
    setCard(JSON.parse(localStorage.getItem("card") || "[]"));
  }, []);

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

  // Update total price when card changes
  useEffect(() => {
    if (card.length > 0) {
      const total = card.reduce((acc, item) => {
        const product = dataProducts.find((product) => product.id === item.id);
        return acc + (product ? product.price * item.qty : 0);
      }, 0);
      setTotalPrice(total);
      localStorage.setItem("card", JSON.stringify(card));
    }
  }, [card, dataProducts]);

  // Implement event handler for logout button
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleAddToCard = (id: number) => {
    if (card.find((item) => item.id === id)) {
      // cek apakah item sudah ada di card
      setCard(
        card.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item,
        ),
      ); // jika sudah ada, tambahkan qty
    } else {
      setCard([...card, { id, qty: 1 }]); // jika belum ada, tambahkan item ke card
    }
  };

  // Menambahkan ref ke element total price untuk mengatur display none ketika card kosong
  const totalPriceRef = useRef<HTMLTableRowElement>(null); // Ref bisa digunakan untuk mengakses element HTML atau manipulasi DOM seperti di JavaScript biasa
  useEffect(() => {
    if (totalPriceRef.current) {
      if (card.length > 0) {
        totalPriceRef.current.style.display = "table-row";
      } else {
        totalPriceRef.current.style.display = "none";
      }
    }
  }, [card]);

  return (
    <>
      <div className="flex justify-end items-center h-20 bg-violet-500 text-white px-10">
        {username && <span>{username}</span>}
        <Button type="button" className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6">
          {dataProducts.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header images={product.image} />
              <CardProduct.Content title={product.title}>
                {product.description}
              </CardProduct.Content>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCard={handleAddToCard}
              />
            </CardProduct>
          ))}
        </div>

        {/* Card */}
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Card</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {card.map((item) => {
                const product = dataProducts.find(
                  (product) => product.id === item.id,
                );
                return product ? (
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                ) : null;
              })}
              <tr ref={totalPriceRef}>
                {/* Menambahkan ref ke element */}
                <td colSpan={3}>Total Price</td>
                <td>
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
