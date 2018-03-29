import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import Select from 'react-select'

import {
    TitlePage,
    TitleModule,
    ModuleCel,
    ModuleRow,
    ActionForm,
    Button,
} from 'components'

import Result from './Result'
import Calc from './Calc'
import Lead from './Lead'
import styles from './styles'

export const Calculator = ({ form, dispatch }) => {
    return (
        <div>
            <ModuleRow>
                <ModuleCel width="40%" table>
                    <TitlePage>Fale Mais</TitlePage>
                    <TitleModule> com a <b>BeePhonica!</b></TitleModule>
                    {/* <Lead /> */}
                </ModuleCel>
                <ModuleCel width="60%" table>
                    <p>Na BeePhonica você pode falar 30, 60 ou 120 minutos sem pagar nada a mais por isso.</p>
                    <p>Use nossa calculadora para descobrir o quanto você vai economizar.</p>
                    <Calc />
                    <ActionForm
                        validate={() => true}
                        component={action => <Button onClick={action}>Calcule</Button>}
                        action={console.log}
                    />
                </ModuleCel>
            </ModuleRow>   
            <Result />
        </div>
    )
}


Calculator.propTypes = {
    dispatch: PropTypes.func,
    form: PropTypes.object,
}

const CalculatorDomain = connect(
    ({ form }) => ({ form }),// usar outro reducer
    (dispatch) => ({ dispatch })
  )(Calculator)
  
  export default CalculatorDomain