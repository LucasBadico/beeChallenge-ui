import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'
import Select from 'react-select'
import log from 'log'

import {
    ModuleCel,
    ActionForm,
    Button,
    TextInput,
    SelectInput,
} from 'components'

import {
    closeForm,
    sendForm,
    NOT_FINDED_DDD,
} from 'store/actions'

import styles from './styles'

const CalcWrapped = ({ buttler, dispatch }) => {
    const FORM = 'calculator'
    if (!buttler.forms[FORM]) return <span className="Calc_PlaceHolder" />
    return (
    <ModuleCel
        inline
        absolute
        tooltip={{
            text: 'fechar',
            onClick: () => dispatch(closeForm(FORM))
        }}
        width="90%"
    >
        <h3> Calcule aqui </h3>
        <div>
            <h4 className={css(styles.h4)}> DDD de origem</h4>
            <SelectInput
                form={FORM}
                name="origin"
                field="origin"
                options={[
                    { value: '011', label: '011' },
                    { value: '016', label: '016' },
                    { value: '018', label: '018' },
                    { value: NOT_FINDED_DDD, label: 'Não encontrei o DDD' },
                ]}
            />
        </div>
        <div>
            <h4 className={css(styles.h4)}> DDD de destino</h4>
            <SelectInput
                name="destination"
                form={FORM}
                field="destination"
                options={[
                    { value: '011', label: '011' },
                    { value: '016', label: '016' },
                    { value: '018', label: '018' },
                    { value: NOT_FINDED_DDD, label: 'Não encontrei o DDD' },
                ]}
            />
        </div>
        <div>
            <h4 className={css(styles.h4)}> Duração da chamada</h4>
            <TextInput form={FORM} field="totalTime" type="number" placeholder="Em minutos"/>
        </div>
        <p className={css(styles.hint)}>* Preencha todos os campos.</p>
        <ActionForm
            validate={(form) => true}
            component={props => <Button {...props}>Calcular</Button>}
            validProps={{ onClick: () => dispatch(sendForm(FORM)) }}
        />
    </ModuleCel>
)
}

const Calc = connect(
    ({ buttler }) => ({ buttler }),
    (dispatch) => ({ dispatch })
  )(CalcWrapped)

export default Calc