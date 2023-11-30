import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { listTaskDelete, listTaskRequest } from '../allApi/api';
import {toast, Toaster} from "react-hot-toast";
import { Link } from 'react-router-dom';

const TodoList = () => {
    let [data,setData]=useState([]);
    let [change,setChange]=useState(0);

    useEffect(() => {
        (async ()=>{
          let res= await listTaskRequest();
          setData(res);
        })()
    }, [change]);


    let handleDelete = async(id) =>{
        let res = await listTaskDelete(id);
        if(res){
            toast.success("Delete completed");
            setChange(new Date().getTime())
        }else {
            toast.error("Delete fail")
        }
    }
  return (
    <>
        <Container fluid>
            <Row>
                <div className='my-4 text-center'>
                    <h2>Total Student : {data.length}</h2>
                </div>
                <Col md="10" className='m-auto'>
                    <div className='mt-5 shadow-sm'>
                        <Table className='table table-striped table-hover' responsive="sm">
                            <thead className='text-center table-info'>
                                <tr>
                                    <th>Serial</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Id</th>
                                    <th>Gender</th>
                                    <th>DateOfBirth</th>
                                    <th>Address</th>
                                    <th>Nationality</th>
                                    <th>phone</th>
                                    <th>admissionDate</th>
                                    <th>courses</th>
                                    <th>Delete</th>
                                    <th>Update</th>
                                </tr>
                            </thead>
                            {data.map((item, i)=>(
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.email}</td>
                                            <td>{item.StudentId}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.dateOfBirth}</td>
                                            <td>{item.address}</td>
                                            <td>{item.StudentNationality}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.admissionDate}</td>
                                            <td>{item.courses}</td>
                                            <td><Button onClick={()=>{handleDelete(item['_id'])}} variant="danger">Delete</Button></td>

                                            <td><Link to={"/update?id="+item._id}><Button variant="success">Update</Button></Link></td>

                                        </tr>    
                                    </tbody>
                                </>
                            ))}
                        </Table> 
                    </div>
                </Col>
            <Toaster position="bottom-center" />
            </Row>
        </Container>
    </>
  )
}

export default TodoList
