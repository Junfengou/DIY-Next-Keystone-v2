import React from "react";
import styled from "styled-components";
import formatMoney from "../../lib/FormatMoney";
import useUser from "../auth/User";
import AddItem from "../Cart/AddItem";
// import AddItem from "../Cart/AddItem";

function Item(item) {
	const { id, description, price, unitNum, unitSize, status } = item.item;
	return (
		<UnitStyle>
			<div className="tagHeader">
				<h1>Size: {unitSize}</h1>
				<p>{formatMoney(price)}</p>
			</div>

			<div className="tagBody">
				<h3>{description}</h3>
			</div>

			<div className="tagFooter">
				<h1>Unit #{unitNum}</h1>
				<p>{status}</p>
				<AddItem id={id} />
			</div>
		</UnitStyle>
	);
}

export default Item;

const UnitStyle = styled.div`
	border: solid var(--orange);
	background-color: rgba(205, 205, 205, 0.6);
	max-width: 1500px;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 3rem 1fr max-content;
	gap: 1rem;
	padding: 1rem 0;

	.tagHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0 2rem;
	}

	.tagBody {
		margin: 0 2rem;
	}

	.tagFooter {
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* border: solid red; */
	}

	button {
		width: 10rem;
		height: 4rem;
		background: var(--orange);
		float: right;
		margin: 1rem;
	}
`;
