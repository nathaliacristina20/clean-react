import React, { memo, InputHTMLAttributes } from 'react'

import Styles from './styles.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  name?: string
  placeholder?: string
}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <div className={Styles.inputWrap}>
      <input { ...props} autoComplete="off" />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}

export default memo(Input)
