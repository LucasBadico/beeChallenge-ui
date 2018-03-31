import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'
import Select from 'react-select'
import log from 'log'

import {
    TableCel,
    TableRow,
    TitleModule,
} from 'components'
import styles from './styles'

const ResultWrapped = ({ items, buttler }) => {
    const results = R.path(['calculator'], buttler)
    if (R.isNil(results) || R.isEmpty(results)) return <span />

    const { data } = R.last(results)
    const { origin, destination, totalTime } = R.path([0, 'sendedData'], data)

    const defaultValue = R.last(buttler.price)[origin][destination]
    const defaultCost = defaultValue * parseInt(totalTime, 10)
    const plans = R.reduce((acc, item) => ({
        ...acc,
        [R.path(['sendedData', 'plan'], item)]: R.path(['data'], item)
    }), {  }, data)

    return (
    <TableRow>
        <TitleModule>Resultados</TitleModule>
        <p>Confira os resultados e confirme, com <b>BeePhonica</b> você ganha sempre!</p>
        <p>
            Você pesquisou por uma ligação do <b>DDD {origin}</b>
            para o <b>DDD {destination}</b>
            com a duração de <b>{totalTime} minutos</b>
        </p>
        <TableCel
            title="#Padrão"
            value={defaultCost}
            subitems={[
                <span><b>R${defaultValue}</b> preço do minuto</span>,
            ]}
        />
        {R.pipe(
            R.mapObjIndexed((value, plan) => {
                const freeTime = parseInt(plan.match(/(\d+)/)[0], 10)
                const excededTime = parseInt(totalTime, 10) - freeTime
                const minuteCost = value/parseInt(totalTime, 10)
                return ({
                    title: `#${plan}`,
                    value,
                    subitems: [
                        <span><b>R${minuteCost <= 0 ? '0,00' : minuteCost}</b> preço do minuto final</span>,
                        <span><b>{excededTime <= 0 ? '0,00' : excededTime}</b> tempo excedido do plano </span>,
                    ],
                })
            }),
            R.values,
            R.map(props =>  <TableCel {...props} />),
        )(plans)}
    </TableRow>
)
}
const Result = connect(
    ({ buttler }) => ({ buttler }),
    (dispatch) => ({ dispatch })
  )(ResultWrapped)

export default Result