export const List = ({ ele, deleteStudent, EditHandler }) => {

    return <tr>

        <td>{ele.username}</td>
        <td>{ele.email}</td>
        <td>{ele.phone}</td>
        <td><button className="btn btn-warning btn-sm" onClick={() => EditHandler(ele.username)}>Edit</button></td>
        <td><button className="btn btn-danger btn-sm" onClick={(e) => deleteStudent(ele.username)}>Delete</button></td>
    </tr>
}