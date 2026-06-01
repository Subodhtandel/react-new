export const Display = ({ task,removetask }) => {


    return <>
        <table>
            <tr>
                <th>Task</th>
                <th>Action</th>
            </tr>
            {task.map(ele => <tr key={ele}>
                <td>{ele}</td>
                <td><button onClick={()=>removetask(ele)}>Delete</button></td>
            </tr>)}

        </table>
    </>
}