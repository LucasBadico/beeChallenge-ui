import { StyleSheet } from 'aphrodite/no-important'

const style = ({ maxWidth, formPadding, inline }) => StyleSheet.create({
    module: {
        position: 'relative',
        background: '#ffffff',
        maxWidth: `${maxWidth||320}px`,
        width: '100%',
        borderTop: '5px solid #33b5e5',
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.1)',
        margin: '0 auto',
        display: inline ? 'inline-block' : 'block'
    },
    form: {
        padding: `${formPadding || 40}px`,
    },
    moduleRow: {
        marginBottom: '10px',
        display: 'table-row',
    }
  
})
export default style