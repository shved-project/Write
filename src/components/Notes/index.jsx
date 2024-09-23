import {useState} from "react";

import Note from "../Note";

import NOTES_DATA from "../../js/notes-data";

import "./notes.scss";
import "./add-note.scss";

export default function Notes() {
	const [notesData, setNotesData] = useState(NOTES_DATA);

	const reverseNotesData = notesData.slice().reverse();

	function handleAddNote() {
		setNotesData([...notesData, {title: "test", text: "test", bgColor: "#fafafa", deadLine: "12.12.12"}]);
	}

	function AddNoteCard({onAddNote}) {
		return (
			<button onClick={onAddNote} className='add-note' title='Создать записку'>
				+
			</button>
		);
	}

	return (
		<section className='notes'>
			<AddNoteCard onAddNote={handleAddNote} />

			{reverseNotesData.map((note) => {
				const {title, text, bgColor, deadLine} = note;

				return <Note title={title} text={text} bgColor={bgColor} deadline={deadLine} />;
			})}
		</section>
	);
}
