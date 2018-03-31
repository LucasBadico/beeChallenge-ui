import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'
import Select from 'react-select'

import {
    TitlePage,
    TitleModule,
    ModuleCel,
    ModuleRow,
    ActionForm,
    Button,
    Fetch,
} from 'components'

import { openForm } from 'store/actions'
import { WILL_OPEN_FORM, GET } from 'store/const'

import Result from './Result'
import Calc from './Calc'
import Lead from './Lead'
import styles from './styles'



export const CalculatorWrapped = ({ dispatch }) => {
    return (
        <div>
            <ModuleRow>
                <ModuleCel width="40%" table>
                    <TitlePage>Fale Mais</TitlePage>
                    <TitleModule> com a <b>BeePhonica!</b></TitleModule>
                    <Lead />
                </ModuleCel>
                <ModuleCel width="60%" table>
                    <p>Na BeePhonica você pode falar 30, 60 ou 120 minutos sem pagar nada a mais por isso.</p>
                    <p>Use nossa calculadora para descobrir o quanto você vai economizar.</p>
                    <Fetch url="/prices/all" method={GET} on='prices-raw'>
                        <Calc />
                    </Fetch> 
                    
                    <Button onClick={() => dispatch(openForm('calculator'))}>Calcule já</Button>
                </ModuleCel>
            </ModuleRow>   
            <Result />
        </div>
    )
}


CalculatorWrapped.propTypes = {
    dispatch: PropTypes.func,
    buttler: PropTypes.object,
}

export const Calculator = connect(
    () => ({}),
    (dispatch) => ({ dispatch })
  )(CalculatorWrapped)
  