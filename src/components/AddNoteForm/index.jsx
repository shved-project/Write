import {useState} from "react";
import {createPortal} from "react-dom";

import "./add-note-form.scss";

export default function AddNoteForm({openAddNoteForm, setOpenAddNoteForm, notesData, setNotesData}) {
	const colorsNote = ["#9effab", "#ff9ec5", "#9ea6ff", "#fff59e", "#ffd39e", "#9eeaff"];
	const [currentColorNote, setCurrentColorNote] = useState(colorsNote[0]);

	function handleSubmitNote(event) {
		event.preventDefault();

		const target = event.target;
		let targetData = {};

		targetData.title = target.noteTitle.value;
		targetData.text = target.noteDescription.value;
		targetData.bgColor = target.noteColor.value;
		targetData.deadline = target.noteDeadline.value;

		setNotesData([...notesData, targetData]);
		setOpenAddNoteForm(false);
	}

	return createPortal(
		<div
			className='add-note-form__wrapper'
			onMouseDown={() => setOpenAddNoteForm(false)}
			style={{animation: openAddNoteForm ? "bgFormWrapper 0.2s forwards" : "bgFormWrapper 0.2s forwards reverse"}}
		>
			<form
				className='add-note-form'
				name='addNoteForm'
				onMouseDown={(event) => event.stopPropagation()}
				onSubmit={handleSubmitNote}
				style={{
					animation: openAddNoteForm
						? "appearanceForm 0.2s forwards"
						: "appearanceForm 0.2s forwards reverse",
				}}
			>
				<div className='add-note-form__colors'>
					{colorsNote.map((color) => (
						<div className='add-note-form__color-wrapper' key={color}>
							<label>
								<input
									className='add-note-form__color hide-elem'
									type='radio'
									name='noteColor'
									value={color}
									checked={currentColorNote === color}
									onChange={() => setCurrentColorNote(color)}
								/>
								<span className='add-note-form__color-custom' style={{backgroundColor: color}}></span>
							</label>
						</div>
					))}
				</div>
				<div className='add-note-form__block' style={{backgroundColor: currentColorNote}}>
					<input
						className='add-note-form__input add-note-form__title'
						type='text'
						name='noteTitle'
						placeholder='Запиши'
						autoFocus
					/>
					<textarea
						className='add-note-form__input add-note-form__description'
						name='noteDescription'
						placeholder='Поясни'
					></textarea>
					<div className='add-note-form__deadline'>
						Дедлайн: <input className='add-note-form__date' type='date' name='noteDeadline' />
					</div>
					<div className='add-note-form__buttons'>
						<button
							className='add-note-form__button add-note-form__button-cancel'
							type='button'
							onClick={() => setOpenAddNoteForm(false)}
						>
							Отменить
						</button>
						<button className='add-note-form__button add-note-form__button-save' type='submit'>
							Сохранить
						</button>
					</div>
				</div>
			</form>
		</div>,
		document.querySelector("#modal")
	);
}
