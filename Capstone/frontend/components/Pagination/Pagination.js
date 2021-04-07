import React from "react";
import PaginationStyles from "../styles/PaginationStyles";
import Link from "next/link";
import { perPage } from "../../config";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import DisplayError from "../ErrorMessage";

export const PAGINATION_QUERY = gql`
	query PAGINATION_QUERY {
		_allStoragesMeta {
			count
		}
	}
`;

function Pagination({ page }) {
	const { data, error, loading } = useQuery(PAGINATION_QUERY);
	if (loading) return <p>Loading...</p>;
	if (error) return <DisplayError error={error.message} />;
	const { count } = data._allStoragesMeta;
	const pageCount = Math.ceil(count / perPage);
	return (
		<PaginationStyles>
			<Link href={`/reserve/${page - 1}`}>
				<a aria-disabled={page <= 1}>⏪ Prev</a>
			</Link>

			<p>
				Page {page} of {pageCount}
			</p>

			<p> {count} items total</p>

			<Link href={`/reserve/${page + 1}`}>
				<a aria-disabled={page >= pageCount}>Next ⏩</a>
			</Link>
		</PaginationStyles>
	);
}

export default Pagination;
