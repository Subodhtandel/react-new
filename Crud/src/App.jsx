import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Create } from './Componants/CReate'
import { Display } from './Componants/Display'
const App = () => {




  var [student, setStudents] = useState([])
  var [editstduent, setEditStudent] = useState({})

  const addStudent = (data) => {

    const duplicate = student.find(ele => {
      if (ele.username == data.username) {
        return ele
      }
    })

    if (duplicate) {

      var newArray = student.filter(ele => {
        return ele.username != duplicate.username
      })
      const updated = [...newArray, data]
      setStudents(updated)
      setEditStudent([])

    }
    else {
      const newArray = [...student, data]
      setStudents(newArray)
    }
  }

  const deleteStudent = (name) => {

    var newArray = student.filter(ele => {
      return ele.username != name
    })
    setStudents(newArray)

  }

  const EditHandler = (name) => {
    const data = student.find(ele => {
      return ele.username == name
    })

    setEditStudent(data)

  }


  return <div className="container mt-5">
    <div className="row">
      <Create addStudent={addStudent} editstduent={editstduent} />
      <Display student={student} deleteStudent={deleteStudent} EditHandler={EditHandler} />
    </div>
  </div>



}

export default App