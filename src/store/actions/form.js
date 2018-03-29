import log from 'log'
export const SAVE_FORM_FIELD = 'SAVE_FORM_FIELD'
export const NOT_FINDED_DDD = 'NOT_FINDED_DDD'

export function saveFormField(form, field, value) {
    return {
        type: SAVE_FORM_FIELD,
        form,
        field,
        value,
    }
}
