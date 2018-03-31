import React from 'react'
import * as R from 'ramda'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'
import Select from 'react-select'
import log from 'log'
import numeral from 'numeral'

import {
    TableCel,
    TableRow,
    TitleModule,
} from 'components'
import styles from './styles'


// load a locale
numeral.register('locale', 'br', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    currency: {
        symbol: ''
    }
});

// switch between locales
numeral.locale('br');

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
    }), {}, data)

    return (
    <TableRow>
        <TitleModule><b>Resultados</b></TitleModule>
        <p>Confira os resultados e confirme, com <b>BeePhonica</b> você ganha sempre!</p>
        <p>
            Você pesquisou por uma ligação do <b>DDD {origin}</b>
            para o <b>DDD {destination}</b>
            com a duração de <b>{totalTime} minutos</b>
        </p>
        <TableCel
            title="#Padrão"
            value={numeral(defaultCost).format('$0.00')}
            subitems={[
                <span>
                    <b>
                        {numeral(
                            defaultValue <= 0 ? 0 : defaultValue
                        ).format('$0.00')}
                    </b> preço do minuto
                </span>,
            ]}
        />
        {R.pipe(
            R.mapObjIndexed((value, plan) => {
                const freeTime = parseInt(plan.match(/(\d+)/)[0], 10)
                const excededTime = parseInt(totalTime, 10) - freeTime
                const minuteCost = value/parseInt(totalTime, 10)
                return ({
                    key: plan,
                    title: `#${plan}`,
                    value: numeral(
                        value <= 0 ? 0 : value
                    ).format('$0.00'),
                    subitems: [
                        <span>
                            <b>
                                {numeral(
                                    minuteCost <= 0 ? 0 : minuteCost
                                ).format('$0.00')}
                            </b> preço do minuto final
                        </span>,
                        <span>
                            <b>
                                {excededTime <= 0 ? 0 : excededTime}
                            </b> minutos excedido da franquia
                        </span>,
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