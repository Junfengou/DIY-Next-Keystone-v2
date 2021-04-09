import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import styled from "styled-components";
import Loader from "../Loader";
import SickButton from "../styles/SickButton";
import { CURRENT_USER_QUERY } from "../auth/User";
import { useCart } from "../../lib/CartState";

const CHECK_OUT_MUTATION = gql`
	mutation CHECK_OUT_MUTATION($day: String!, $month: String!, $year: String!) {
		checkOut(day: $day, month: $month, year: $year) {
			paymentAmount
		}
	}
`;

function Checkout({ month, day, year }) {
	const [loading, setLoading] = useState(false);
	console.log({ day }, { month }, { year });
	const { closeCart } = useCart();
	const [checkOut, { error }] = useMutation(CHECK_OUT_MUTATION, {
		variables: { day, month, year },
		refetchQueries: [{ query: CURRENT_USER_QUERY }],
	});

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);

		await checkOut();
		setLoading(false);
		// closeCart();
	}

	function emptyInput(e) {
		alert("Pick a move in date!!");
		e.preventDefault();
	}

	return (
		<CheckoutFormStyles onSubmit={day === "" ? emptyInput : handleSubmit}>
			{loading && <p>Loading...</p>}
			{error && <p style={{ fontSize: 12 }}>{error.message}</p>}
			<SickButton>Check Out Now</SickButton>
		</CheckoutFormStyles>
	);
}

export default Checkout;

const CheckoutFormStyles = styled.form`
	box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
	border: 1px solid rgba(0, 0, 0, 0.06);
	border-radius: 5px;
	padding: 1rem;
	display: grid;
	grid-gap: 1rem;
`;
