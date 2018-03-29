import log from '../../log';
export var OPEN_FORM = 'OPEN_FORM';
export var CLOSE_FORM = 'CLOSE_FORM';
export var WILL_OPEN_FORM = 'WILL_OPEN_FORM';
export var WILL_CLOSE_FORM = 'WILL_CLOSE_FORM';
export var REQUESTED_DATA = 'REQUESTED_DATA';

export function openForm(form) {
    // action is intention
    return {
        type: WILL_OPEN_FORM, // the type represents this
        form: form
    };
}

export function closeForm(form) {
    // action is intention
    return {
        type: WILL_CLOSE_FORM,
        form: form
    };
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
//# sourceMappingURL=buttler.js.map