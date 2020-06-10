import React, { useContext } from 'react'

import Spinner from '@/presentation/components/spinner'

import Context from '@/presentation/context/form/form-context'

import Styles from './styles.scss'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {state.isLoading && (<Spinner className={Styles.spinner}/>)}
      {errorState.main && (<span className={Styles.error}>{errorState.main}</span>)}
    </div>
  )
}

export default FormStatus
