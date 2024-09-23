import "./note.scss";

export default function Note({title, text, bgColor, deadline}) {
	return (
		<article className='note'>
			<div className='note__buttons'>
				<button className='note__button' type='button' title='Закрыть задачу'>
					<svg
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 512.000000 512.000000'
						preserveAspectRatio='xMidYMid meet'
					>
						<metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata>
						<g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' stroke='none'>
							<path
								d='M4365 4451 c-156 -45 -87 18 -1285 -1177 -711 -710 -1114 -1105
-1130 -1108 -103 -22 -73 -46 -554 433 -431 429 -443 439 -526 480 -159 77
-308 89 -467 36 -147 -50 -267 -151 -337 -285 -47 -89 -66 -170 -66 -282 0
-111 17 -182 66 -280 34 -69 79 -116 757 -794 664 -663 728 -724 793 -757 103
-53 187 -70 314 -64 123 6 198 29 292 89 90 57 2749 2716 2806 2806 61 96 83
169 89 297 9 193 -38 317 -172 450 -87 87 -162 131 -271 159 -82 21 -231 20
-309 -3z'
							/>
						</g>
					</svg>
				</button>
				<button className='note__button' type='button' title='Редактировать задачу'>
					<svg
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 512.000000 512.000000'
						preserveAspectRatio='xMidYMid meet'
					>
						<metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata>
						<g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' stroke='none'>
							<path
								d='M4120 5104 c-136 -29 -174 -57 -423 -303 l-229 -227 554 -552 553
-552 216 216 c232 232 273 286 310 407 18 56 20 86 17 180 -8 206 -42 264
-322 542 -221 220 -262 249 -402 285 -89 23 -181 24 -274 4z'
							/>
							<path
								d='M1737 2842 l-1419 -1419 -159 -634 c-92 -370 -159 -654 -159 -682 0
-69 38 -107 107 -107 28 0 312 67 682 159 l634 159 1419 1419 c780 780 1418
1422 1418 1428 0 13 -1082 1095 -1095 1095 -6 0 -648 -638 -1428 -1418z'
							/>
						</g>
					</svg>
				</button>
				<button className='note__button' type='button' title='Удалить задачу'>
					<svg
						version='1.0'
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 512.000000 512.000000'
						preserveAspectRatio='xMidYMid meet'
					>
						<metadata>Created by potrace 1.16, written by Peter Selinger 2001-2019</metadata>
						<g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' stroke='none'>
							<path
								d='M425 5101 c-196 -56 -359 -222 -409 -417 -21 -80 -21 -228 0 -308 9
-33 32 -92 52 -131 32 -64 103 -138 841 -877 l806 -808 -806 -807 c-738 -740
-809 -814 -841 -878 -49 -95 -68 -175 -68 -285 0 -169 55 -304 170 -420 116
-115 251 -170 420 -170 110 0 190 19 285 68 64 32 138 103 877 841 l808 806
808 -806 c739 -738 813 -809 877 -841 95 -49 175 -68 285 -68 169 0 304 55
420 170 115 116 170 251 170 420 0 110 -19 190 -68 285 -32 64 -103 138 -841
878 l-806 807 806 808 c738 739 809 813 841 877 49 95 68 175 68 285 0 169
-55 304 -170 420 -116 115 -251 170 -420 170 -110 0 -190 -19 -285 -68 -64
-32 -138 -103 -878 -841 l-807 -806 -808 806 c-739 738 -813 809 -877 841 -38
20 -98 43 -131 52 -83 21 -240 20 -319 -3z'
							/>
						</g>
					</svg>
				</button>
			</div>
			<div className='note__card transition-bg' title='Подробнее' style={{backgroundColor: bgColor}}>
				<h2 className='note__card-title'>{title}</h2>
				<p className='note__card-text'>{text}</p>
				<hr className='note__card-line' />
				<div className='note__card-deadline'>До: {deadline}</div>
			</div>
		</article>
	);
}
