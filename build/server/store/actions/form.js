import log from '../../log';
export var SAVE_FORM_FIELD = 'SAVE_FORM_FIELD';
export var NOT_FINDED_DDD = 'NOT_FINDED_DDD';
export var WILL_SAVE_FORM_FIELD = 'WILL_SAVE_FORM_FIELD';
export var WILL_SEND_FORM = 'WILL_SEND_FORM';

export function saveFormField(form, field, value) {
    return {
        type: WILL_SAVE_FORM_FIELD,
        form: form,
        field: field,
        value: value
    };
}

export function sendForm(form) {
    return {
        type: WILL_SEND_FORM,
        form: form
    };
}
//# sourceMappingURL=form.js.map