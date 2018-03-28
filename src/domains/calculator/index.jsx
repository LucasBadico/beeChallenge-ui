import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import styles from './styles'

export const Calculator = ({ children, ...props }) => {
    return (
      <TableRow>
        <TableCel title="Padrão" subitems={['item 1','item 1','item 1',]}/>
        <TableCel title="Fale Mais 30" subitems={['item 1','item 1','item 1',]}/>
        <TableCel title="Fale Mais 60" subitems={['item 1','item 1','item 1',]}/>
        <TableCel title="Fale Mais 120" subitems={['item 1','item 1','item 1',]}/>
      </TableRow>
    )
}
  
  Calculator.propTypes = {
    children: PropTypes.node,
  };
  