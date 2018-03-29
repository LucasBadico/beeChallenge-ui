import log from 'log'
export const OPEN_FORM = 'OPEN_FORM'
export const CLOSE_FORM = 'CLOSE_FORM'
export const WILL_OPEN_FORM = 'WILL_OPEN_FORM'
export const WILL_CLOSE_FORM = 'WILL_CLOSE_FORM'
export const REQUESTED_DATA = 'REQUESTED_DATA'

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
