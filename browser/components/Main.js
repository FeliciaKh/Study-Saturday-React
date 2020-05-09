import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList'
import StudentReport from './StudentReport'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent : {}
    };

    this.getDetails = this.getDetails.bind(this)
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  getDetails (student) {
    return this.setState({
      selectedStudent: student
    })
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
            <StudentList students = {this.state.students} getDetails ={this.getDetails} />
        </table>

        <table>
          {this.state.selectedStudent.id ? (<StudentReport selectedStudent = {this.state.selectedStudent}/>) : null}
        </table>
      </div>
    );
  }
}
