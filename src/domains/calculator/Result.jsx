import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'
import Select from 'react-select'

import {
    TableCel,
    TableRow,
    TitleModule,
} from 'components'
import styles from './styles'

const Result = ({ items }) => (
    <TableRow>
        <TitleModule>Resultados</TitleModule>
        <p>Confira os resultados e confirme, com <b>BeePhonica</b> você ganha sempre!</p>
        <TableCel title="Padrão" subitems={['<b>1.9<b> preço padrão','<b>1.9<b> custo/minuto médio','<b>1.9</b> custo/minuto após o tempo do plano']}/>
        <TableCel title="Fale Mais 30" subitems={['item 1','item 1','item 1',]}/>
        <TableCel title="Fale Mais 60" subitems={['item 1','item 1','item 1',]}/>
        <TableCel title="Fale Mais 120" subitems={['item 1','item 1','item 1',]}/>
    </TableRow>
)

export default Result