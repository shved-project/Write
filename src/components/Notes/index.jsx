import {useState} from "react";

import Note from "../Note";
import AddNoteForm from "../AddNoteForm";

import NOTES_DATA from "../../js/notes-data";

import "./notes.scss";
import "./add-note.scss";

export default function Notes() {
	const [notesData, setNotesData] = useState(NOTES_DATA);
	const [openAddNoteForm, setOpenAddNoteForm] = useState(false);

	const reverseNotesData = notesData.slice().reverse();

	return (
		<section className='notes'>
			<AddNoteCard />

			{reverseNotesData.map((note) => {
				const {title, text, bgColor, deadLine} = note;

				return (
					<Note
						key={title + text + bgColor + deadLine}
						title={title}
						text={text}
						bgColor={bgColor}
						deadline={deadLine}
					/>
				);
			})}
		</section>
	);

	function AddNoteCard() {
		function handleOpenAddNoteForm() {
			setOpenAddNoteForm(true);
		}

		return (
			<>
				<button onClick={handleOpenAddNoteForm} className='add-note' title='Создать записку'>
					+
				</button>
				{openAddNoteForm && <AddNoteForm setOpenAddNoteForm={setOpenAddNoteForm} />}
			</>
		);
	}
}
