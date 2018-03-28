import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite'
import styles from './styles'

import {
    TableCel,
    TableRow,
    TitlePage,
    TitleModule,
    ModuleCel,
    ModuleRow,
} from 'components'

export const Calculator = ({ children, ...props }) => {
    return (
        <div>
            <ModuleRow>
                <ModuleCel inline={true} maxWidth={40}>
                    <TitlePage>Fale Mais</TitlePage>
                    <TitleModule> com a <b>BeePhonica!</b></TitleModule>
                </ModuleCel>
                <ModuleCel inline={true} maxWidth={60}>
                    <p>Na BeePhonica você pode falar 30, 60 ou 120 minutos sem pagar nada a mais por isso.</p>
                    <p>Use nossa calculadora para descobrir o quanto você vai economizar.</p>
                </ModuleCel>
            </ModuleRow>
            <TableRow>
                <TableCel title="Padrão" subitems={['item 1','item 1','item 1',]}/>
                <TableCel title="Fale Mais 30" subitems={['item 1','item 1','item 1',]}/>
                <TableCel title="Fale Mais 60" subitems={['item 1','item 1','item 1',]}/>
                <TableCel title="Fale Mais 120" subitems={['item 1','item 1','item 1',]}/>
            </TableRow>
        </div>
    )
}
  
Calculator.propTypes = {
    children: PropTypes.node,
}
  