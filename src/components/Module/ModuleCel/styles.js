import { StyleSheet } from 'aphrodite/no-important'

const style = ({
    width,
    formPadding,
    inline,
    table,
    absolute,
    tooltip,
    maxWidth,
}) => StyleSheet.create({
    module: {
        position: absolute ? 'absolute' : 'relative',
        background: '#ffffff',
        maxWidth: !table && maxWidth ?  maxWidth : undefined,
        width: width || '100%',
        borderTop: '5px solid #33b5e5',
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.1)',
        margin: '0 auto',
        zIndex: '10',
        display: inline ? 'inline-block' :
                 table ? 'table-cell' : 'block',
    },
    form: {
        padding: `${formPadding || 40}px`,
        display: table ? 'table-cell' : 'block',
    },
    upperButton: {
        display: tooltip ? 'block' : 'none',
    },
})
export default style