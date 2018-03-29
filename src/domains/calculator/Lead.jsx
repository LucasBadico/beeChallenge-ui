import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { css } from 'aphrodite/no-important'
import Select from 'react-select'

import {
    ModuleCel,
    ActionForm,
    Button,
    TextInput,
} from 'components'
import styles from './styles'
import {
    closeForm,
} from 'store/actions'

const LeadWrapped = ({ dispatch, buttler }) => {
    const FORM = 'lead'
    if (!buttler.forms[FORM]) return <span className="Lead_PlaceHolder" />
    return (
    <ModuleCel
        inline
        absolute
        width="80%"
        tooltip={{
            text: 'fechar',
            onClick: () => dispatch(closeForm(FORM))
        }}
    >
        <h3>Não encontrou o DDD que procurava?</h3>
        <p>Caso a o ddd que você procura não esteja na opções disponíveis, deixe seus dados para avisarmos quando disponibilizarmos.</p>
        <div>
            <h4 className={css(styles.h4)}> DDD de origem </h4>
            <TextInput form={FORM} field="origin" type="text" placeholder="No formato 011, 018"/>
        </div>
        <div>
            <h4 className={css(styles.h4)}> DDD de destino </h4>
            <TextInput form={FORM} field="destination" type="text" placeholder="No formato 011, 018"/>
        </div>
        <div>
            <h4 className={css(styles.h4)}> Deixe seu email </h4>
            <TextInput form={FORM} field="email" type="email" placeholder="Não enviaremos span, prometo"/>
        </div>
        <div>
            <h4 className={css(styles.h4)}> Seu telefone </h4>
            <TextInput form={FORM} field="phone" type="tel" placeholder="Nem sms, dupla promessa"/>
        </div>
        <div>
            <h4 className={css(styles.h4)}> Seu Nome </h4>
            <TextInput form={FORM} field="name" type="text" placeholder="Apenas agradecemos a preferência"/>
        </div>
        <p className={css(styles.hint)}>* Preencha todos os campos.</p>
        <ActionForm
            validate={() => true}
            component={action => <Button onClick={action}>Enviar Dados</Button>}
            action={console.log}
        />
    </ModuleCel> 
)
}


const Lead = connect(
    ({ buttler }) => ({ buttler }),
    (dispatch) => ({ dispatch })
  )(LeadWrapped)


export default Lead