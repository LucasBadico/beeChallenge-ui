import React from 'react'
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important'
import styles from './styles'

export const TableRow = ({ children, ...props }) => (
    <div id="pricing-table" className="clear">
      {children}
    </div>
  );
  
  TableRow.propTypes = {
    children: PropTypes.node,
  };
  