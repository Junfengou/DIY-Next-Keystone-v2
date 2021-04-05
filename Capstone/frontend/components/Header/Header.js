import React from "react";
import styled from "styled-components";
import ButtonStyles from "../styles/ButtonStyles";
import Nav from "./Nav";
import Link from "next/link";
import useUser from "../auth/User";

function Header() {
	const user = useUser();
	console.log({ user });
	return (
		<NavStyles>
			<HeaderStyles>
				<LogoStyles>
					<Link href="/">
						<h1>
							<span>DIY</span> Storage
						</h1>
					</Link>
				</LogoStyles>
				<Nav />
				{user && (
					<div className="btns">
						<ButtonStyles>
							{/* <CartButton /> */}
							<p>cart</p>
						</ButtonStyles>
						<ButtonStyles>
							{/* <SignOut /> */}
							<p>signout</p>
						</ButtonStyles>
						{/* <Cart /> */}
					</div>
				)}
				{!user && (
					<>
						<ButtonStyles className="uppercase">Sign in</ButtonStyles>
						{/*
                        <Link href="/signin">
                            <ButtonStyles className="uppercase">Sign in</ButtonStyles>
                        </Link>
                     */}
					</>
				)}
			</HeaderStyles>
		</NavStyles>
	);
}

export default Header;

const HeaderStyles = styled.div`
	height: 8rem;
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	background: var(--gray);
	position: fixed;

	.btns {
		display: flex;
	}
`;

const LogoStyles = styled.h1`
	color: white;
	padding: 2rem;
	margin-left: 3rem;
	cursor: pointer;
	font-family: "post_no_bill";

	h1 {
		font-size: 3.5rem;
	}

	span {
		color: var(--orange);
	}
`;

const NavStyles = styled.nav`
	position: relative;
`;
