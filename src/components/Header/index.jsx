import Logo from "../Logo";
import ColorTheme from "../ColorTheme";

import "./header.scss";

export default function Header() {
	return (
		<header className='header'>
			<Logo />
			<ColorTheme />
		</header>
	);
}
