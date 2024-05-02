import React, { useEffect, useState } from 'react';
import './ITTargetAnalysis.css'
import HOC from '../../Components/HOC/HOC'
import { IoIosArrowDown } from "react-icons/io";

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';


const ITTargetAnalysis = () => {
    const [faltu, setFaltu] = useState(null);

    const handleFaltu = (index) => {
        setFaltu(index);
    };
    const tableData = [
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },

        {
            id: 1,
            Website: 'www.sdhdif.com',
        },
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },
        {
            id: 1,
            Website: 'www.sdhdif.com',
        },

    ];

    // ITTargetAnalysis Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function ITTargetAnalysis(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='MarksheetUploadmodal2' >
                    <Modal.Title className='MarksheetUploadmodal1'>IT Target Analysis</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='ITTargetanalysismodal'>
                        <div className='ITTargetanalysismodal1'>
                            <label htmlFor="">Add Website</label>
                            <input type="text" />
                        </div>

                        <div className='ITTargetanalysismodal2'>
                            <label htmlFor="">Type of records</label>
                            <select name="" id="">
                                <option value="">Select type of records</option>
                                <option value="">Daily</option>
                                <option value="">Weekly</option>
                                <option value="">Monthly</option>
                                <option value="">Yearly</option>
                            </select>
                        </div>

                        <div className='ITTargetanalysismodal3'>
                            <div className='ITTargetanalysismodal4'>
                                <input type="checkbox" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className='ITTargetanalysismodal4'>
                                <input type="checkbox" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className='ITTargetanalysismodal4'>
                                <input type="checkbox" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                            <div className='ITTargetanalysismodal4'>
                                <input type="checkbox" />
                                <label htmlFor="">Lorem Ipsum</label>
                            </div>
                        </div>


                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }




    return (
        <>
            <ITTargetAnalysis
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>IT Target Analysis</p>
                </div>

                <div className='targetanalysis2'>
                    <div className='targetanalysis1'>
                        <p>Filters</p>
                    </div>

                    <div className='admission2'>
                        <div className='cancel1' onClick={() => setModalShow(true)}>
                            <p>Add</p>
                        </div>
                        <div className='targetanalysis' onClick={() => setModalShow(true)}>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                        <div className='cancel1'>
                            <p>Import</p>
                        </div>
                        <div className='cancel1'>
                            <p>Export</p>
                        </div>
                    </div>
                </div>

                <div className='targetanalysis3'>
                    <div className="targetanalysis4">
                        {["Daily", "Weekly", "Monthly", "Yearly"].map((bank, index) => (
                            <div
                                key={index}
                                className={faltu === index ? "targetanalysis5" : "targetanalysis6"}
                                onClick={() => handleFaltu(index)}
                            >
                                {bank}
                            </div>
                        ))}
                    </div>
                </div>



                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Website</th>
                                    <th>Total Traffic</th>
                                    <th>Total Leads</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.Website}</td>
                                        <td>
                                            <div className='targetanalysis7'>

                                            </div>
                                        </td>
                                        <td>
                                            <div className='targetanalysis7'>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='pendingpayment6'>
                    <div className='pendingpayment7'>
                        <h6>Total:</h6>
                        <span>Show quantity</span>
                    </div>

                    <div className='pendingpayment8'>
                        <p>Page :1</p>
                    </div>

                    <div className='pendingpayment9'>
                        <p>Records</p>
                        <div className='pendingpayment10'>
                            <p>20</p>
                            <IoIosArrowDown color='#3F3F3F' />
                        </div>
                    </div>
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>

            </div>
        </>
    )
}

export default HOC(ITTargetAnalysis)