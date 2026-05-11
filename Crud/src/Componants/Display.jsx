import { List } from "./List"

export const Display = ({ student, deleteStudent ,EditHandler}) => {
    return <div className="col-md-8">
        <div className="card shadow">
            <div className="card-header bg-dark text-white">
                User List
            </div>
            <div className="card-body">
                <table className="table table-bordered table-hover text-center">
                    <thead className="table-secondary">
                        <tr>

                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {student.map(ele => <List key={ele.username} ele={ele} deleteStudent={deleteStudent} EditHandler={EditHandler} />)}



                    </tbody>
                </table>
            </div>
        </div>
    </div>
}