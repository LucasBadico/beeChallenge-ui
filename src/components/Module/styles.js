import { StyleSheet } from 'aphrodite'

const style = StyleSheet.create({
    module: {
        position: 'relative',
        background: '#ffffff',
        maxWidth: '320px',
        width: '100%',
        borderTop: '5px solid #33b5e5',
        boxShadow: '0 0 3px rgba(0, 0, 0, 0.1)',
        margin: '0 auto',
    },
    form: {
        padding: '40px',
    }
  
})
export default style

/*
.form-module {
  position: relative;
  background: #ffffff;
  max-width: 320px;
  width: 100%;
  border-top: 5px solid #33b5e5;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
.form-module .form {
  display: none;
  padding: 40px;
}
.form-module .form:nth-child(2) {
  display: block;
}
*/