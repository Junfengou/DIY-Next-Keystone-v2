import React from "react";
import styled from "styled-components";
// import AddItem from "../Cart/AddItem";

function Item(item) {
	const { id, description, price, unitNum, unitSize, status } = item.item;
	return (
		<UnitStyle>
			<div className="tagHeader">
				<h1>{unitSize}</h1>
				<p>${price}</p>
			</div>

			<div className="tagBody">
				<h3>{description}</h3>
			</div>

			<div className="tagFooter">
				<h1>{unitNum}</h1>
				<p>{status}</p>
				<button>Add to cart</button>
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
		margin: 0 2rem;
	}
`;

/*
const ItemStyles = styled.div`
	border: solid var(--orange);
	background-color: rgba(205, 205, 205, 0.6);
	max-width: 1500px;
	.cardWrapper {
		margin: 1rem;
	}

	.section {
		display: flex;
		justify-content: space-between;
	}

	button {
		width: 10rem;
		height: 4rem;
		background: var(--orange);
		float: right;
		margin: 1rem;
	}

	//@media only screen and (max-width: 1000px)
	@media (max-width: 700px) {
		width: 50rem;

		.cardWrapper {
			font-size: 1.2rem;
		}

		button {
			width: 8rem;
			height: 3rem;
			font-size: 1rem;
		}
	}

	@media (max-width: 550px) {
		width: 30rem;

		.cardWrapper {
			font-size: 1.2rem;
		}

		button {
			width: 6rem;
			height: 3rem;
			font-size: 1rem;
		}
	}
`;

<ItemStyles>
				<div className="cardWrapper">
					<div className="section">
						<h1>Size: {unitSize} </h1>
						<p>${price}</p>
					</div>

					<p>Features: {description}</p>
					 <AddItem id={id} />  
                </div>
</ItemStyles>

*/
