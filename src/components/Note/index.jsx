import "./note.scss";

export default function Note() {
	return (
		<article className='note'>
			<div className='note__buttons'>
				<button type='button'>Галка</button>
				<button type='button'>Карандаш</button>
				<button type='button'>Закрыть</button>
			</div>
			<div className='note__card'>
				<h2 className='note__card-title'>Заголовок</h2>
				<p className='note__card-text'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos illum dolorum quas aspernatur
					ab asperiores aliquam reprehenderit tempora, odit dolorem ducimus non ullam totam cumque.
				</p>
				<hr />
				<div className='note__card-deadline'>До 30.09.2024</div>
			</div>
		</article>
	);
}
