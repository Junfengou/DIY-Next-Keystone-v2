import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Loader from "../Loader";
import SickButton from "../styles/SickButton";
/*

const CREATE_RENTAL_MUTATION = gql`
    mutation CREATE_RENTAL_MUTATION(
        $paymentAmount: Int
        $startDay: String
        $startMonth: String
        $startYear: String
        $unitSize: String
        $unitNum: String
        $status: String
        $user: UserRelateToOneInput
    ) {
        createRental($paymentAmount: )

    }
`

*/

function Checkout({ cart }) {
	console.log({ cart });
	return (
		<CheckoutFormStyles>
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
