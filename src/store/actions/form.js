import log from 'log'
export const SAVE_FORM_FIELD = 'SAVE_FORM_FIELD'

export function saveFormField(form, field, value) {
    return {
        type: SAVE_FORM_FIELD,
        form,
        field,
        value,
    }
}
