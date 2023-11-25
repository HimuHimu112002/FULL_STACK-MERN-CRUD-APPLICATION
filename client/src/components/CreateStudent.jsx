import React, {useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
const CreateStudent = () => {

    let navigate = useNavigate();
    let [FormValue,SetFormValue]=useState({firstName:"",lastName:"",email:"",StudentId:"",gender:"",dateOfBirth:"",address:"",StudentNationality:"",phone:"",admissionDate:"",courses:""})
    const InputOnChange = (name,value) => {
        SetFormValue((FormValue)=>({
            ...FormValue,
            [name]:value
        }))
    }
    const Save = async () => {
        toast.success("Create Request Completed");
        await axios.post("http://localhost:5000/api/v1/createStudent",{
            firstName: FormValue.firstName,
            lastName:FormValue.lastName,
            email:FormValue.email,
            StudentId:FormValue.StudentId,
            gender:FormValue.gender,
            dateOfBirth:FormValue.dateOfBirth,
            address:FormValue.address,
            StudentNationality:FormValue.StudentNationality,
            phone:FormValue.phone,
            admissionDate:FormValue.admissionDate,
            courses:FormValue.courses,
        }).then(()=>{
            setTimeout(()=>{
                navigate("/home");
            },3000)
        });       

    }

    return (
        <div className="container mt-5">
            <div className="row shadow p-5 rounded">
                <h3 className='text-center pb-4'>Please Input Student Information</h3>
                <div className="col-md-4 p-2">
                    <label className="form-label">First Name</label>
                    <input value={FormValue.firstName} onChange={(e)=>InputOnChange('firstName',e.target.value)} type="text" className="form-control" placeholder="F-Name"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Last Name</label>
                    <input value={FormValue.lastName} onChange={(e)=>InputOnChange('lastName',e.target.value)} type="text" className="form-control" placeholder="L-Name"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Email</label>
                    <input value={FormValue.email} onChange={(e)=>InputOnChange('email',e.target.value)} type="email" className="form-control" placeholder="Email"/>
                </div>
                
                <div className="col-md-4 p-2">
                    <label className="form-label">Student Id</label>
                    <input value={FormValue.StudentId} onChange={(e)=>InputOnChange('StudentId',e.target.value)}  type="text" className="form-control" placeholder="000000"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Gender</label>
                    <input value={FormValue.gender} onChange={(e)=>InputOnChange('gender',e.target.value)}  type="text" className="form-control" placeholder="Gender"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Date Of Birth</label>
                    <input value={FormValue.dateOfBirth} onChange={(e)=>InputOnChange('dateOfBirth',e.target.value)}  type="date" className="form-control" placeholder="Nationality"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Address</label>
                    <input value={FormValue.address} onChange={(e)=>InputOnChange('address',e.target.value)}  type="text" className="form-control" placeholder="Address"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Student Nationality</label>
                    <input value={FormValue.StudentNationality} onChange={(e)=>InputOnChange('StudentNationality',e.target.value)}  type="text" className="form-control" placeholder="Nationality"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Phone</label>
                    <input value={FormValue.phone} onChange={(e)=>InputOnChange('phone',e.target.value)}  type="text" className="form-control" placeholder="phone"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Admission Date</label>
                    <input value={FormValue.admissionDate} onChange={(e)=>InputOnChange('admissionDate',e.target.value)}  type="date" className="form-control" placeholder="Admission"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Courses</label>
                    <input value={FormValue.courses} onChange={(e)=>InputOnChange('courses',e.target.value)}  type="text" className="form-control" placeholder="Courses"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Submit Student List</label><br/>
                    <button onClick={Save} className="btn w-100 btn-success">Submit</button>
                </div>

                <Link to="/home">Go to home</Link>

            </div>
            <Toaster position="top-center" />
        </div>
    );
};

export default CreateStudent;