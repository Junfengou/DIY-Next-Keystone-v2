import React, { useState } from "react";
import { useCart } from "../../lib/CartState";
import useUser from "../auth/User";
import CartStyles from "../styles/CartStyles";
import CloseButton from "../styles/CloseButton";
import UsernameStyles from "../styles/UsernameStyles";
// import CartItem from "./CartItem";
import { BiRightArrow } from "react-icons/bi";
import CartItem from "./CartItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Cart() {
	const { cartOpen, toggleCart } = useCart();
	const [startDate, setStartDate] = useState(new Date());
	const [month, setMonth] = useState("");
	const [day, setDay] = useState("");
	const [year, setYear] = useState("");
	const thisUser = useUser();

	console.log({ month }, { day }, { year });

	if (!thisUser) return null;

	return (
		<CartStyles open={cartOpen}>
			<header>
				<UsernameStyles>{`${thisUser.username}'s Cart`}</UsernameStyles>
				<div className="date">
					<h1>Start date:</h1>
					<DatePicker
						className="datePicker"
						selected={startDate}
						onChange={(date) => {
							setStartDate(date);
							const pickedDate = date.toString().split(" ");
							setMonth(pickedDate[1]);
							setDay(pickedDate[2]);
							setYear(pickedDate[3]);
						}}
					/>
				</div>
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
