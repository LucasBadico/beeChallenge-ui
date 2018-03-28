import { StyleSheet } from 'aphrodite'

const style = StyleSheet.create({
  textInput: {
    outline: 'none',
    display: 'block',
    width: '100%',
    border: '1px solid #d9d9d9',
    margin: '0 0 20px',
    padding: '10px 15px',
    boxSizing: 'border-box',
    fontWieght: '400',
    transition: '0.3s ease',
    ':focus':{
        border: '1px solid #33b5e5',
        color: '#333333',
    }
  },
})
export default style



/*
    outline: none,
    display: block;
    width: 100%;
    border: 1px solid #d9d9d9;
    margin: 0 0 20px;
    padding: 10px 15px;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
    font-wieght: 400;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
*/