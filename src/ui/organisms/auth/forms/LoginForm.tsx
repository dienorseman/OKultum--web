import { useState, type FormEvent } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks/storeHooks"
import { startLogingIn } from "../../../../store/auth/thunks"
import { UsernameInput } from "../../../atoms/auth/inputs/UsernameInput"
import { PasswordInput } from "../../../atoms/auth/inputs/PasswordInput"

import styles from './LoginForm.module.css'
import { LoginButton } from "../../../atoms/auth/buttons/LoginButton"
import { ForgotPasswordLink } from "../../../atoms/links/ForgotPasswordLink"

export const LoginForm = () => {

    const { baseApiUrl } = useAppSelector(state => state.app)
    const dispatch = useAppDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (formData.password === '' || formData.username === '') {
            console.log('form data is empty');
            return; 
        }
        dispatch(startLogingIn(formData, baseApiUrl))
    }

    return (
        <form action="" onSubmit={handleSubmit} className={styles.form_container}>
            <UsernameInput
                value={formData.username}
                callback={(e: any) => setFormData(data => ({ ...data, username: e.target.value }))}
            />
            <PasswordInput
                value={formData.password}
                callback={(e: any) => setFormData(data => ({ ...data, password: e.target.value }))}
            />
            <ForgotPasswordLink />
            <LoginButton />
        </form>
    )
}
