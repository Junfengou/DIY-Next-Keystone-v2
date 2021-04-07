import React from "react";
import CartStyles from "../styles/CartStyles";
import { useCart } from "../../lib/CartState";

function CartButton() {
	const { toggleCart } = useCart();

	return (
		<button type="button" className="uppercase" onClick={toggleCart}>
			Cart
		</button>
	);
}

export default CartButton;
