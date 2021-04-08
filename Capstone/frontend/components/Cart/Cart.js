import React, { useState, useEffect } from "react";
import { useCart } from "../../lib/CartState";
import useUser from "../auth/User";
import CartStyles from "../styles/CartStyles";
import CloseButton from "../styles/CloseButton";
import UsernameStyles from "../styles/UsernameStyles";
import { BiRightArrow } from "react-icons/bi";
import CartItem from "./CartItem";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import formatMoney from "../../lib/FormatMoney";
import Checkout from "./Checkout";

function Cart() {
	const { cartOpen, toggleCart } = useCart();
	const [startDate, setStartDate] = useState(new Date());
	const [month, setMonth] = useState("");
	const [day, setDay] = useState("");
	const [year, setYear] = useState("");
	const thisUser = useUser();

	if (!thisUser) return null;

	const CalculateTotal = thisUser.cart.reduce((tally, item) => {
		return tally + item.storage.price;
	}, 0);

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
			<footer>
				<p>Total: {`${formatMoney(CalculateTotal)}`} </p>
				<Checkout cart={thisUser.cart} />
			</footer>
		</CartStyles>
	);
}

export default Cart;

/*
	const priceArr = [];
	thisUser.cart.map((item) => {
		{
			priceArr.push(item.storage.price);
		}
	});

	useEffect(() => {
		priceArr.reduce((item, accum) => {
			setTotal((accum += item));
		});
	}, [thisUser.cart]);

	console.log({ total });

*/
