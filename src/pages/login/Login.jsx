import { useEffect } from "react"

export const Login = (props) => {

    useEffect( () => {
        props.bus('info del login')
    })

    return (
        <h1>Login Page</h1>
    )
}