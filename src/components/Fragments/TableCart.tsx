import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function TableCart({ dataProducts }) {
    const card = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);

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
    )
}
