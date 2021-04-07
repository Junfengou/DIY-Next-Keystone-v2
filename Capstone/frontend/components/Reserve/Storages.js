import React from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Loader from "../Loader";
import Location from "./Location";
import Item from "./Item";
import Pagination from "../Pagination/Pagination";
import { perPage } from "../../config";

const ALL_STORAGE_QUERY = gql`
	query ALL_STORAGE_QUERY($skip: Int = 0, $first: Int) {
		storages: allStorages(first: $first, skip: $skip) {
			id
			unitSize
			description
			unitNum
			price
			status
		}
	}
`;

function Storages({ page }) {
	const { data, error, loading } = useQuery(ALL_STORAGE_QUERY, {
		variables: {
			skip: page * perPage - perPage,
			first: perPage,
		},
	});
	if (loading) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;
	const { storages } = data;

	return (
		<StorageStyles>
			<div className="pagination">
				<Pagination page={page || 1} />
			</div>
			<div className="contents">
				<div className="sideBar">
					<Location />
				</div>

				<div className="items">
					{storages.map((item) => (
						<Item key={`${data.id} - item`} item={item} />
					))}
				</div>
			</div>
		</StorageStyles>
	);
}

export default Storages;

const StorageStyles = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 20rem max-content;
	justify-content: center;

	.pagination {
		margin-top: 8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
	}

	.contents {
		display: flex;
		justify-content: center;
		gap: 5rem;
		padding: 5rem;

		.items {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
	}
`;
