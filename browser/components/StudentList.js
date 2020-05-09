import React from 'react'

const StudentList = (props) => {
    return (
        <div>
            {props.students.map(student => {
                return (
                    <tr key = {student.id}>
                        <td>{student.fullName}</td>
                        <td>Details</td>
                    </tr>
                )
            })}
        </div>
    )
}

export default StudentList