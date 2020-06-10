import React, { useContext, memo, InputHTMLAttributes } from 'react'

import Context from '@/presentation/context/form/form-context'

import Styles from './styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  name?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input { ...props} autoComplete="off" />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>{getStatus()}</span>
    </div>
  )
}

export default memo(Input)
