import log from 'log'
import {
    WILL_CLOSE_FORM,
    WILL_OPEN_FORM,
} from '../const'

export function openForm(form) { // action is intention
    return {
        type: WILL_OPEN_FORM,// the type represents this
        form,
    }
}

export function closeForm(form) { // action is intention
    return {
        type: WILL_CLOSE_FORM,
        form,
    }
}

// export function willOpenForm(form) {
//     return {
//         type: WILL_OPEN_FORM,
//         form,
//     }
// }

// export function willCloseForm(form) {
//     return {
//         type: WILL_CLOSE_FORM,
//         form,
//     }
// }
