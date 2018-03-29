import log from 'log'
export const SAVE_FORM_FIELD = 'SAVE_FORM_FIELD'
export const NOT_FINDED_DDD = 'NOT_FINDED_DDD'
export const WILL_SAVE_FORM_FIELD = 'WILL_SAVE_FORM_FIELD'

export function saveFormField(form, field, value) {
    return {
        type: WILL_SAVE_FORM_FIELD,
        form,
        field,
        value,
    }
}
