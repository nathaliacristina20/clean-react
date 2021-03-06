import React, { useState } from 'react'

import Header from '@/presentation/components/header'
import Footer from '@/presentation/components/footer'
import Input from '@/presentation/components/input'
import FormStatus from '@/presentation/components/form-status'

import Context from '@/presentation/context/form/form-context'
import Styles from './styles.scss'

type StateProps = {
  isLoading: boolean
}

const Login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false
  })

  const [errorState] = useState({
    email: 'Campo obrigatorio',
    password: 'Campo obrigatorio',
    main: ''
  })

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, errorState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />

          <button type="submit" data-testid="submit" disabled className={Styles.submit}>Entrar</button>
          <span className={Styles.link}>
          Criar conta
          </span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
