import React, { useEffect,useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { listTaskDelete, listTaskRequest } from '../allApi/api';
import {toast, Toaster} from "react-hot-toast";

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
        <Container>
            <Row>
                <Col>
                    <div className='mt-5 shadow-sm'>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Student Name</th>
                                    <th>Student Id</th>
                                    <th>Student Class</th>
                                    <th>Father's Name</th>
                                    <th>Mother's Name</th>
                                    <th>Nationality</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {data.map((item, i)=>(
                                <>
                                    <tbody>
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{item.StudentName}</td>
                                            <td>{item.StudentId}</td>
                                            <td>{item.StudentClass}</td>
                                            <td>{item.StudentFathersName}</td>
                                            <td>{item.StudentMothersName}</td>
                                            <td>{item.StudentNationality}</td>
                                            <td><Button onClick={()=>{handleDelete(item['_id'])}} variant="danger">Delete</Button></td>
                                            <td><Button variant="success">Update</Button></td>
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
