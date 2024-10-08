import {useState} from "react";

import "./color-theme.scss";

export default function ColorTheme() {
	let isDarkLocalColorTheme = localStorage.getItem("darkTheme") === "true";

	const [darkTheme, setdarkTheme] = useState(isDarkLocalColorTheme);
	darkTheme && document.body.classList.add("dark-theme");

	function handleColorTheme() {
		document.body.classList.toggle("dark-theme");
		setdarkTheme(!darkTheme);

		localStorage.setItem("darkTheme", !darkTheme);
	}

	return (
		<div className='color-theme'>
			<svg
				version='1.0'
				xmlns='http://www.w3.org/2000/svg'
				width='30'
				height='30'
				viewBox='0 0 512.000000 512.000000'
				preserveAspectRatio='xMidYMid meet'
			>
				<metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata>
				<g
					transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
					fill='var(--text-color)'
					stroke='none'
				>
					<path
						d='M2475 5101 c-40 -24 -71 -60 -84 -94 -7 -18 -11 -139 -11 -325 0
    -341 4 -358 81 -409 90 -59 216 -25 260 70 17 38 19 69 19 339 0 186 -4 307
    -11 325 -13 34 -55 80 -91 99 -39 20 -127 18 -163 -5z'
					/>
					<path
						d='M773 4395 c-71 -43 -102 -141 -69 -218 20 -46 444 -464 479 -473 44
    -10 126 1 155 23 64 47 91 122 72 195 -10 37 -43 75 -223 257 -117 117 -226
    219 -244 227 -51 22 -122 18 -170 -11z'
					/>
					<path
						d='M4175 4406 c-16 -8 -125 -110 -242 -227 -180 -182 -213 -220 -223
    -257 -20 -77 10 -153 79 -199 37 -25 109 -31 158 -13 37 14 451 426 469 467
    34 77 2 176 -70 218 -49 28 -122 33 -171 11z'
					/>
					<path
						d='M2355 3836 c-38 -7 -104 -22 -145 -34 -460 -129 -813 -510 -917 -992
    -25 -119 -25 -381 0 -500 110 -511 500 -904 1007 -1015 106 -23 322 -31 429
    -15 425 61 780 312 975 690 93 179 134 334 143 539 14 318 -80 607 -281 857
    -182 227 -454 394 -746 459 -99 22 -370 28 -465 11z m356 -361 c347 -60 615
    -286 726 -610 96 -281 56 -581 -109 -830 -106 -158 -276 -288 -463 -352 -152
    -51 -306 -65 -456 -38 -205 36 -373 122 -510 262 -139 141 -219 300 -254 502
    -27 150 -13 304 38 456 146 426 586 688 1028 610z'
					/>
					<path
						d='M110 2729 c-32 -13 -78 -56 -96 -91 -8 -15 -14 -51 -14 -80 0 -71 31
    -124 89 -155 43 -23 49 -23 345 -23 274 0 305 2 343 19 131 60 131 262 0 322
    -38 17 -68 19 -342 18 -174 0 -310 -4 -325 -10z'
					/>
					<path
						d='M4343 2721 c-26 -12 -52 -35 -70 -62 -59 -90 -25 -216 70 -260 38
    -17 69 -19 339 -19 186 0 307 4 325 11 34 13 80 55 99 91 8 15 14 50 14 78 0
    28 -6 63 -14 78 -19 36 -65 78 -99 91 -18 7 -139 11 -325 11 -270 0 -301 -2
    -339 -19z'
					/>
					<path
						d='M1165 1406 c-40 -19 -451 -433 -465 -469 -28 -77 5 -171 74 -212 49
    -29 118 -33 169 -11 18 8 127 110 244 227 180 182 213 220 223 257 20 77 -10
    153 -79 199 -39 27 -117 31 -166 9z'
					/>
					<path
						d='M3795 1404 c-16 -8 -38 -23 -49 -32 -47 -42 -60 -145 -27 -210 25
    -47 404 -424 450 -447 45 -23 141 -17 178 11 48 36 66 70 71 132 3 45 0 67
    -16 98 -25 49 -417 439 -455 453 -41 16 -117 13 -152 -5z'
					/>
					<path
						d='M2501 870 c-47 -20 -84 -54 -102 -94 -17 -37 -19 -70 -19 -338 0
    -186 4 -307 11 -325 13 -34 55 -80 91 -99 35 -18 121 -18 156 0 36 19 78 65
    91 99 7 18 11 139 11 325 0 340 -4 358 -79 408 -45 30 -120 41 -160 24z'
					/>
				</g>
			</svg>
			<button className='color-theme__button' onClick={handleColorTheme}>
				<span
					className='color-theme__circle'
					style={{
						transform: darkTheme && "translateX(-100%)",
						left: darkTheme && "100%",
					}}
				></span>
			</button>
			<svg
				version='1.0'
				xmlns='http://www.w3.org/2000/svg'
				width='25'
				height='25'
				viewBox='0 0 512.000000 512.000000'
				preserveAspectRatio='xMidYMid meet'
			>
				<metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata>
				<g
					transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
					fill='var(--text-color)'
					stroke='none'
				>
					<path
						d='M1910 4756 c-684 -277 -1186 -852 -1365 -1563 -55 -216 -68 -354 -62
    -647 5 -261 13 -331 63 -529 299 -1187 1523 -1930 2690 -1632 565 144 1060
    511 1352 1002 46 77 52 93 52 142 0 66 -23 111 -72 141 -43 27 -120 23 -248
    -13 -168 -47 -271 -60 -455 -60 -314 0 -570 64 -865 214 -355 182 -642 467
    -824 819 -105 202 -158 359 -198 577 -26 145 -31 472 -9 623 30 219 109 463
    214 664 44 84 52 107 51 153 0 59 -19 93 -74 131 -53 35 -123 29 -250 -22z
    m-191 -523 c-127 -432 -130 -914 -8 -1338 182 -636 649 -1171 1256 -1439 306
    -135 689 -208 997 -191 l119 7 -22 -30 c-48 -68 -258 -239 -397 -323 -627
    -378 -1379 -358 -1999 56 -427 285 -722 731 -827 1248 -21 101 -23 140 -23
    387 1 260 2 282 27 400 98 456 332 848 678 1135 64 53 206 155 215 155 2 0 -5
    -30 -16 -67z'
					/>
				</g>
			</svg>
		</div>
	);
}
