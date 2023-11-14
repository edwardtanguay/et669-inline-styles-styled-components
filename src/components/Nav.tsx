import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-3 bg-slate-500 py-1 px-2 content">
			<li><NavLink to="/inline-styles">Inline Styles</NavLink></li>
			<li><NavLink to="/styled-components">styled-components</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
	</nav>;
};
