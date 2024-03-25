import React, { Component } from 'react';
import './datatable.css';

export class datatable extends Component {
    render() {
        return (
            <div>
                <table >
                    <caption>
                        Front-end web developer I
                        nformation
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HTML tables</td>
                            <td>HTML tables</td>
                            <td>HTML tables</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default datatable