import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import Select from 'react-select'

import {
    TableCel,
    TableRow,
} from 'components'
import styles from './styles'

const Result = () => (
    <TableRow>
        <TableCel title="Padrão" subitems={['item 1','item 1','item 1',]}/>
        <TableCel title="Fale Mais 30" subitems={['item 1','item 1','item 1',]}/>
        <TableCel title="Fale Mais 60" subitems={['item 1','item 1','item 1',]}/>
        <TableCel title="Fale Mais 120" subitems={['item 1','item 1','item 1',]}/>
    </TableRow>
)

export default Result