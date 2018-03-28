import React from 'react'
import PropTypes from 'prop-types';
import  {Button } from 'components'
import styles from './styles'

export const TableCel = ({ title, value, subitems, buttonText }) => (
  <div className="plan">
    <h3>{title}<span>R${value}</span></h3>
    <Button>{buttonText}</Button>      
    <ul>
        {subitems.map(item => <li>{item}</li>	)}
    </ul> 
  </div>
  );
  
  TableCel.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string,
    subitems: PropTypes.arrayOf(
      PropTypes.oneOf(
        PropTypes.string,
        PropTypes.node,
      )
    ),
    buttonText: PropTypes.string,
  };

  TableCel.defaultProps = {
    title: 'Price Table',
    value: '0,00',
    subitems: [],
    buttonText: 'Assinar',
  }
  