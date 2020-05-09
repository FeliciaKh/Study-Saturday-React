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

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
            <StudentList students = {this.state.students} />
          </tbody>
        </table>
        <table>
          <StudentReport />
        </table>
      </div>
    );
  }
}
