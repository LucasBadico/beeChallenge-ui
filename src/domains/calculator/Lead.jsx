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
} from 'components'
import styles from './styles'


const Lead = () => (
    <ModuleCel inline width="80%" absolute>
        <h3>Não encontrou o DDD que procurava?</h3>
        <p>Caso a o ddd que você procura não esteja na opções disponíveis, deixe seus dados para avisarmos quando disponibilizarmos.</p>
        <div>
            <h4 className={css(styles.h4)}> DDD de origem </h4>
            <TextInput schema="origin" type="text" placeholder="No formato 011, 018"/>
        </div>
        <div>
            <h4 className={css(styles.h4)}> DDD de destino </h4>
            <TextInput schema="destination" type="text" placeholder="No formato 011, 018"/>
        </div>
        <div>
            <h4 className={css(styles.h4)}> Deixe seu email </h4>
            <TextInput schema="email" type="email" placeholder="Não enviaremos span, prometo"/>
        </div>
        <div>
            <h4 className={css(styles.h4)}> Seu telefone </h4>
            <TextInput schema="phone" type="tel" placeholder="Nem sms, dupla promessa"/>
        </div>

        <div>
            <h4 className={css(styles.h4)}> Seu Nome </h4>
            <TextInput schema="name" type="text" placeholder="Apenas agradecemos a preferência"/>
        </div>
        <ActionForm
            validate={() => true}
            component={action => <Button onClick={action}>Enviar Dados</Button>}
            action={console.log}
        />
    </ModuleCel> 
)

export default Lead