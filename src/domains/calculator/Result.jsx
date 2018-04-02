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

    log({results})
    const { data } = R.last(results)
    const { origin, destination, totalTime } = R.path([0, 'sendedData'], data)
    const defaultCostByMinute = R.last(buttler.price)[origin][destination]
    const defaultTotalCost = defaultCostByMinute * parseInt(totalTime, 10)
    const withFaleMais = R.path(['data'], data)
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
            title="Sem #FaleMais"
            value={numeral(defaultTotalCost).format('$0.00')}
            subitems={[
                <span>
                    <b>
                        {numeral(
                            defaultCostByMinute <= 0 ? 0 : defaultCostByMinute
                        ).format('$0.00')}
                    </b> preço do minuto
                </span>,
            ]}
        />
        {R.pipe(
            R.map(({
                cost,
                freeTime,
                notFreeTime,
            }) => {
                const minuteCost = cost/(freeTime + notFreeTime)
                return ({
                    key: plan,
                    title: `#$FaleMais{freeTime}`,
                    value: numeral(
                        cost <= 0 ? 0 : cost
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
                                {notFreeTime <= 0 ? 0 : notFreeTime}
                            </b> minutos excedido da franquia
                        </span>,
                    ],
                })
            }),
            R.map(props =>  <TableCel {...props} />),
        )(withFaleMais)}
    </TableRow>
)
}
const Result = connect(
    ({ buttler }) => ({ buttler }),
    (dispatch) => ({ dispatch })
  )(ResultWrapped)

export default Result