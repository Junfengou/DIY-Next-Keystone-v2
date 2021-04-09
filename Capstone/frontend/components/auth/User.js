import React from "react";
import { gql, useQuery } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
	query {
		authenticatedItem {
			... on User {
				id
				name
				username
				email
				cart {
					storage {
						unitSize
						price
						unitNum
						description
					}
					id
				}
			}
		}
	}
`;

function useUser() {
	const { data } = useQuery(CURRENT_USER_QUERY);
	return data?.authenticatedItem;
}

export default useUser;
