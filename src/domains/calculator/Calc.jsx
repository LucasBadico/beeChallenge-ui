import React from 'react'
import * as R from 'ramda'
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
} from 'store/actions'

import { NOT_FINDED_DDD } from 'store/const'

import styles from './styles'

const CalcWrapped = ({ buttler, dispatch }) => {
    const FORM = 'calculator'
    if (!buttler.forms[FORM]) return <span className="Calc_PlaceHolder" />
    const getOptions = type => prices => {
           return R.pipe(
                R.last,
                R.path(['data']),
                priceList => {
                    if (type === 'origin') {
                        return R.pipe(
                            R.keys,
                            R.map(origin => ({
                                value: origin,
                                label: origin,
                            })),
                        )(priceList)
                    }
                    return R.pipe(
                        R.keys,
                        R.reduce((acc, origin) => ({
                          ...acc,
                          [origin]: [
                            ...(acc[origin] || {}),
                            ...(
                             R.pipe(
                              R.keys,
                              R.map(destination => ({
                                value: destination,
                                label: destination,
                              })),
                             )(priceList[origin]))
                          ]
                        }), {}),
                        data => (log('pricelist on destination', data), data)
                      )(priceList)
            },
        )(prices)
    }
    return (
    <ModuleCel
        inline
        absolute
        tooltip={{
            text: 'fechar',
            onClick: () => dispatch(closeForm(FORM))
        }}
        width="90%"
    >   {
        !buttler.prices ? (
            <span className="Calc_Content_PlaceHolder">
                <h3> Buscando a lista de preços... </h3>
                <p>
                    Tenha paciencia, é uma maquina de 1GB de ram,
                    rodando 2 microserviços, 1 app koa para exposição da api e mais um app express para servir o front.
                    E para completar temos uma database que registra os emails e guarda essa lista de preços...
                </p>
            </span>
        ) : (
            <span className="Calc_Content">
                <h3> Calcule aqui </h3>
                <div>
                    <h4 className={css(styles.h4)}> DDD de origem</h4>
                    <SelectInput
                        form={FORM}
                        name="origin"
                        field="origin"
                        append={{ value: NOT_FINDED_DDD, label: 'Não encontrei o DDD' }}
                        options={getOptions('origin')(buttler.prices)}
                    />
                </div>
                <div>
                    <h4 className={css(styles.h4)}> DDD de destino</h4>
                    <SelectInput
                        name="destination"
                        form={FORM}
                        field="destination"
                        filter={(form, options) => (log({form, options}), R.path(['origin'], form)) ? R.path([form.origin], options) : [{
                            value: '',
                            label: 'Escolha a origem primeiro',
                        }]}
                        append={{ value: NOT_FINDED_DDD, label: 'Não encontrei o DDD' }}
                        options={getOptions('destination')(buttler.prices)}
                    />
                </div>
                <div>
                    <h4 className={css(styles.h4)}> Duração da chamada</h4>
                    <TextInput form={FORM} field="totalTime" type="number" placeholder="Em minutos"/>
                </div>
                <p className={css(styles.hint)}>* Preencha todos os campos.</p>
                <ActionForm
                    validate={
                        (formState) => {
                            if (R.isNil(formState[FORM])) return false
                            const {
                                [FORM]: { totalTime, origin, destination }
                            } = formState
                            return ![totalTime, origin, destination].some(R.isNil)
                        }
                    }
                    component={props => <Button {...props}>Calcular</Button>}
                    validProps={{ onClick: () => dispatch(sendForm(FORM)) }}
                />
            </span>
        )
    }
    </ModuleCel>
)
}

const Calc = connect(
    ({ buttler }) => ({ buttler }),
    dispatch => ({ dispatch })
  )(CalcWrapped)

export default Calc
