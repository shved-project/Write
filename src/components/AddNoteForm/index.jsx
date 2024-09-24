import {useState} from "react";
import {createPortal} from "react-dom";

import "./add-note-form.scss";

export default function AddNoteForm({setOpenAddNoteForm}) {
	const colorsNote = ["#9effab", "#ff9ec5", "#9ea6ff", "#fff59e", "#ffd39e", "#9eeaff"];
	const [currentColorNote, setCurrentColorNote] = useState(colorsNote[0]);

	return createPortal(
		<div className='add-note-form__wrapper' onMouseDown={() => setOpenAddNoteForm(false)}>
			<form className='add-note-form' name='addNoteForm' onMouseDown={(e) => e.stopPropagation()}>
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
						<button className='add-note-form__button add-note-form__button-save' type='button'>
							Сохранить
						</button>
					</div>
				</div>
			</form>
		</div>,
		document.querySelector("#modal")
	);
}
