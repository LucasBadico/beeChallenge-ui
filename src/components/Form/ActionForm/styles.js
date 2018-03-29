import { StyleSheet } from 'aphrodite'

const style = (valid) => StyleSheet.create({
    actionForm: {
        opacity: valid ? '1' : '0.6',
    },
  
})
export default style