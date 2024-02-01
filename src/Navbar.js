// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
} from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
                    <NavLink to="/" >
						Home
					</NavLink>
					<NavLink to="/about" >
						About
					</NavLink>
					<NavLink to="/math" activeStyle>
						Math
					</NavLink>
					<NavLink to="/portfolio" activeStyle>
						Portfolio
					</NavLink>
					<NavLink to="/contact" activeStyle>
						Contact
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
