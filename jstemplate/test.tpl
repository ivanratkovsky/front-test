<div class="services">
    {{#data}}
        <div class="services_card" id="card" data_id={{ID}}>
            <p class="services_card__title">{{{Name}}}</p>
            <div class="services_card__img">
                <img src="https://ilogik.planfix.ru{{Ico}}" alt="{{Name}}">
            </div>
            <hr>
            <div class="services_card__switch-btn"></div>
	    </div>
    {{/data}}
</div>
<div class="modal">
		<div class="modal_title">
			<p>Для того, чтобы найти API Key, необходимо зайти: Мой офис - настройки - API</p>
		</div>
		<form class="modal_form">
				<div class="modal_form__group">
					<label class="info" for="api_key" id="key"></label>
					<input type="text" id="api_key">
				</div>
				<div class="modal_form__group">
					<label class="info" for="name" id="name"></label>
					<input type="text" id="name">
				</div>
				<div class="modal_form__buttons">
					<button id="modal_close" class="modal_form__buttons__close">Отмена</button>
					<button id="modal_close" class="modal_form__buttons__close">Сохранить</button>
				</div>
		</form>
</div>