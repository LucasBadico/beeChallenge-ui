import log from 'log'
import {
    WILL_SAVE_FORM_FIELD,
    WILL_SEND_FORM,
} from '../const'

export function saveFormField(form, field, value) {
    return {
        type: WILL_SAVE_FORM_FIELD,
        form,
        field,
        value,
    }
}
// just say what form to send ex: calculator
export function sendForm(form) {
    return {
        type: WILL_SEND_FORM,
        form,
    }
}