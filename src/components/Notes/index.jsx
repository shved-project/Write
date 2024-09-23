import Note from "../Note";

import "./notes.scss";
import "./add-note.scss";

export default function Notes() {
	function AddNoteCard() {
		return (
			<button className='add-note' title='Создать записку'>
				+
			</button>
		);
	}

	return (
		<section className='notes'>
			<AddNoteCard />
			<Note />
			<Note />
			<Note />
			<Note />
			<Note />
			<Note />
		</section>
	);
}
