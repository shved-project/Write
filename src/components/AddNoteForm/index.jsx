import {createPortal} from "react-dom";

import "./add-note-form.scss";

export default function AddNoteForm({setOpenAddNoteForm}) {
	function ColorNote({color}) {
		return (
			<div className='add-note-form__color-wrapper'>
				<label>
					<input className='add-note-form__color hide-elem' type='radio' name='noteColor' value={color} />
					<span className='add-note-form__color-custom' style={{backgroundColor: color}}></span>
				</label>
			</div>
		);
	}

	return createPortal(
		<div className='add-note-form__wrapper' onClick={() => setOpenAddNoteForm(false)}>
			<form className='add-note-form' name='addNoteForm' onClick={(e) => e.stopPropagation()}>
				<div className='add-note-form__colors'>
					<ColorNote color={"#9effab"} />
					<ColorNote color={"#ff9ec5"} />
					<ColorNote color={"#9ea6ff"} />
					<ColorNote color={"#fff59e"} />
					<ColorNote color={"#ffd39e"} />
					<ColorNote color={"#9eeaff"} />
				</div>
				<input type='text' name='noteTitle' placeholder='Запиши' />
				<textarea name='noteText' placeholder='Поясни'></textarea>
				<div className='add-note-form__deadline'>
					Дедлайн: <input type='date' name='noteDeadline' />
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
			</form>
		</div>,
		document.querySelector("#modal")
	);
}
