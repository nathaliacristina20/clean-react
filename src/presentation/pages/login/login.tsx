import React from 'react'

import Header from '@/presentation/components/header'
import Footer from '@/presentation/components/footer'
import Input from '@/presentation/components/input'

import Spinner from '@/presentation/components/spinner'

import Styles from './styles.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />

        <button type="submit" className={Styles.submit}>Entrar</button>
        <span className={Styles.link}>
          Criar conta
        </span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner}/>
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
