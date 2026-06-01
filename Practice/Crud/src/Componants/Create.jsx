import { useRef } from "react"
import { useEffect } from "react"

export const Create = ({ addStudent, editstduent }) => {


    const username = useRef()
    const email = useRef()
    const phone = useRef()


    const submitHandler = (e) => {
        e.preventDefault()
        var data = {
            "username": username.current.value,
            "email": email.current.value,
            "phone": phone.current.value
        }

        addStudent(data)
        username.current.value = ""
        email.current.value = ""
        phone.current.value = ""

    }

    useEffect(() => {

        if (editstduent.username != undefined) {
            username.current.value = editstduent.username
            email.current.value = editstduent.email
            phone.current.value = editstduent.phone
        }


    })

    return <div className="col-md-4">
        <div className="card shadow">
            <div className="card-header bg-primary text-white">
                Add User
            </div>
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" ref={username} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" ref={email} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" placeholder="Enter phone" ref={phone} />
                    </div>

                    <button type="submit" className="btn btn-success w-100">Submit</button>
                </form>
            </div>
        </div>
    </div>

}