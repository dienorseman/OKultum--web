import type { ReactNode } from "react"

import styles from './authTemplate.module.css';

interface AuthTemplateProps {
  children: ReactNode
}

export const AuthTemplate = ({children} : AuthTemplateProps) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
