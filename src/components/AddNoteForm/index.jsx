export default function AddNoteForm() {
	return (
		<div className='add-note-form__wrapper'>
			<form className='add-note-form' name='addNoteForm'>
				<div className='add-note-form__colors'>
					<input className='add-note-form__color' type='radio' name='noteColor' />
					<input className='add-note-form__color' type='radio' name='noteColor' />
					<input className='add-note-form__color' type='radio' name='noteColor' />
					<input className='add-note-form__color' type='radio' name='noteColor' />
					<input className='add-note-form__color' type='radio' name='noteColor' />
					<input className='add-note-form__color' type='radio' name='noteColor' />
				</div>
				<input type='text' name='noteTitle' placeholder='Запиши' />
				<textarea name='noteText' placeholder='Поясни'></textarea>
				<div className='add-note-form__deadline'>
					Дедлайн: <input type='date' name='noteDeadline' />
				</div>
				<div className='add-note-form__buttons'>
					<button className='add-note-form__button add-note-form__button-cancel' type='button'>
						Отменить
					</button>
					<button className='add-note-form__button add-note-form__button-save' type='button'>
						Сохранить
					</button>
				</div>
			</form>
		</div>
	);
}
