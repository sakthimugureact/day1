import React from 'react'
import style from '../Compenents/css/style.css'

function Mini1() {

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Mini Project 1</h1>
            <table className='personal'>
                <caption>Personal Details</caption>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Blood Group</th>
                </tr>
                <tr>
                    <td>Mugunthan</td>
                    <td>mugu.7533@gmail.com</td>
                    <td>21</td>
                    <td>7639000740</td>
                    <td>O+</td>
                </tr>
            </table>
            <hr></hr>
        </>
    )
}

export default Mini1