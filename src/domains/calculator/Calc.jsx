import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'aphrodite'
import Select from 'react-select'

import {
    ModuleCel,
    ActionForm,
    Button,
    TextInput,
    SelectInput,
} from 'components'

import styles from './styles'

const Calc = () => (
    <ModuleCel inline width="90%" absolute>
        <h3> Calcule aqui </h3>
        <div>
            <h4 className={css(styles.h4)}> DDD de origem</h4>
            <SelectInput
                form="calculator"
                name="origin"
                field="origin"
                options={[
                    { value: '011', label: '011' },
                    { value: '016', label: '016' },
                    { value: '018', label: '018' },
                ]}
            />
        </div>
        <div>
            <h4 className={css(styles.h4)}> DDD de destino</h4>
            <SelectInput
                name="destination"
                form="calculator"
                field="destination"
                options={[
                    { value: '011', label: '011' },
                    { value: '016', label: '016' },
                    { value: '018', label: '018' },
                ]}
            />
        </div>
        <div>
            <h4 className={css(styles.h4)}> Duração da chamada</h4>
            <TextInput form="calculator" field="totalTime" type="number" placeholder="Em minutos"/>
            <TextInput form="calculator" field="totalTime" type="number" placeholder="Em minutos"/>
        </div>
        <ActionForm
            validate={() => false}
            component={action => <Button onClick={action}>Calcular</Button>}
            action={console.log}
        />
    </ModuleCel>
)

export default Calc