import React, { useContext,useState, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, clearError, error} = useHttp()
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })
    
    useEffect( () => {
        message(error)
        clearError()
    }, [ error, message, clearError ])

    const ChangeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const registerHandler = async () => {
        try{
            const data = await request('/api/auth/register', 'POST', { ...form })
            message(data.message)
        }
        catch(e) {}
    }

    const loginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', { ...form })
            auth.login(data.token, data.userId)
        }
        catch(e) {}
    }

    return (
        <div className = "row">
            <div className = "col s6 offset-s3">
                <div style = {{ textAlign: "center" }}><h1>Щоденник харчування</h1></div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span style = {{ textAlign: "center" }} className="card-title">Авторизація</span>
                        <div>
                            <div className="input-field">
                                <input placeholder="Введіть ім'я" id="name" type="text" name = "name"
                                onChange = {ChangeHandler} />
                                <label for="name">Ім'я</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field">
                                <input placeholder="Введіть пошту" id="email" type="text" name = "email"
                                onChange = {ChangeHandler} />
                                <label for="email">Пошта</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-field">
                                <input placeholder="Введіть пароль" id="password" type="password" name = "password"
                                onChange = {ChangeHandler} />
                                <label for="password">Пароль</label>
                            </div>
                        </div>
                    </div>

                    <div className="card-action">
                        <button onClick = { loginHandler } disabled = {loading}
                         className = "btn yellow darken-4" style = { {marginRight: 25} }>Увійти</button>
                        <button onClick = { registerHandler } disabled = {loading}
                        className = "btn red darken-4">Реєстрація</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage;