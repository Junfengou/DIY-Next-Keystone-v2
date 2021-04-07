import React from "react";
import { useCart } from "../../lib/CartState";
import useUser from "../auth/User";
import CartStyles from "../styles/CartStyles";
import CloseButton from "../styles/CloseButton";
import UsernameStyles from "../styles/UsernameStyles";
// import CartItem from "./CartItem";
import { BiRightArrow } from "react-icons/bi";
import CartItem from "./CartItem";

function Cart() {
	const { cartOpen, toggleCart } = useCart();
	const thisUser = useUser();

	if (!thisUser) return null;

	return (
		<CartStyles open={cartOpen}>
			<header>
				<UsernameStyles>{`${thisUser.username}'s Cart`}</UsernameStyles>
				<div className="info">
					<p>Size</p>
					<p>price</p>
					<p>Unit #</p>
					<p>Remove</p>
				</div>
			</header>

			<CloseButton onClick={toggleCart}>
				<BiRightArrow onClick={toggleCart} />
			</CloseButton>

			<ul>
				{thisUser.cart.map((item) => (
					<CartItem key={item.storage.id} item={item} />
				))}
			</ul>
		</CartStyles>
	);
}

export default Cart;
