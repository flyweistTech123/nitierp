import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'




const ExpenseType = () => {
    const tableData = [
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },

        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        }, ,

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Expense Type</p>
                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>Add</p>
                        </div>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Expense Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" />  {data.ExpenseType}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(ExpenseType)