import React from "react";
import Storages from "../../components/Reserve/Storages";
import { useRouter } from "next/dist/client/router";

function reserve() {
	const { query } = useRouter();
	const page = Number(query.page);
	return (
		<div>
			<Storages page={page} />
		</div>
	);
}

export default reserve;
