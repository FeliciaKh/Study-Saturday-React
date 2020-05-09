import React from 'react'

const avgGrade = tests => {
    return (
        Math.round(
            tests.map(test => test.grade)
            .reduce((x, y) => x + y) / tests.length
        )
    )
}

const StudentReport = props => {
    return (
        <div>
            <h1>{props.selectedStudent.fullName}</h1>
            <h2>{props.selectedStudent.email}</h2>
            <h2>Grades: {avgGrade(props.selectedStudent.tests)}</h2>

            {props.selectedStudent.tests.map(test => {
                return (
                    <tr key= {test.id}>
                        <td>{test.subject}</td>
                        <td>{test.grade}%</td>
                    </tr>
                )
            })}
        </div>
    )
}

export default StudentReport