import React from "react";
import styled from "styled-components";
import formatMoney from "../../lib/FormatMoney";
import DeleteItem from "./DeleteItem";

const CartItemStyles = styled.li`
	padding: 1rem 0;
	border-bottom: 1px solid var(--lightGrey);
	display: flex;
	justify-content: space-between;
	grid-template-columns: auto 1fr auto;
	img {
		margin-right: 1rem;
	}

	h3,
	p {
		margin: 0;
	}
`;

function CartItem({ item }) {
	if (!item) return null;
	return (
		<CartItemStyles>
			<h3>{item.storage.unitSize}</h3>
			<p>{formatMoney(item.storage.price)}</p>
			<p>{item.storage.unitNum}</p>
			<DeleteItem id={item.id} />
		</CartItemStyles>
	);
}

export default CartItem;
