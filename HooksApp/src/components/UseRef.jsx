import { UseState } from './UseState'
import { useRef } from "react"

export const UseRef = () => {
    const name = useRef()
    const email = useRef()

    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log(name.current.value);
        console.log(email.current.value);

}

    return <>
        <form onSubmit={SubmitHandler}>
            <input type="text" placeholder='Enter your name' ref={name} />
            <input type="email" placeholder='Enter your email' ref={email} />
            <input type="submit" />
        </form>
        </>

}