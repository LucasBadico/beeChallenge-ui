import { StyleSheet } from 'aphrodite'

const style = ({ maxWidth, formPadding, inline }) => StyleSheet.create({
    module: {
        position: 'relative',
        background: '#ffffff',
        maxWidth: !inline && `${maxWidth || 320}px`,
        width: inline ? `${maxWidth}%` : '100%',
        borderTop: '5px solid #33b5e5',
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.1)',
        margin: '0 auto',
        display: inline ? 'table-cell' : 'block'
    },
    form: {
        padding: `${formPadding || 40}px`,
        display: inline ? 'table-cell' : 'block'
    },
  
})
export default style