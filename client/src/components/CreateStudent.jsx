import React, {useState} from 'react';
import {toast, Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import axios from "axios";
const CreateStudent = () => {

    let navigate = useNavigate();
    let [FormValue,SetFormValue]=useState({StudentName:"",StudentClass:"",StudentId:"",StudentFathersName:"",StudentMothersName:"",StudentNationality:""})

    const InputOnChange = (name,value) => {
        SetFormValue((FormValue)=>({
            ...FormValue,
            [name]:value
        }))
    }
    const Save = async () => {
        toast.success("Create Request Completed");
        await axios.post("http://localhost:5000/api/v1/createStudent",{
            StudentName: FormValue.StudentName,
            StudentClass:FormValue.StudentClass,
            StudentId:FormValue.StudentId,
            StudentFathersName:FormValue.StudentFathersName,
            StudentMothersName:FormValue.StudentMothersName,
            StudentNationality:FormValue.StudentNationality
        }).then(()=>{
            setTimeout(()=>{
                navigate("/home");
            },3000)
        });       

    }


    return (
        <div className="container mt-5">
            <div className="row shadow p-5 rounded">

                <div className="col-md-4 p-2">
                    <label className="form-label">Student Name</label>
                    <input value={FormValue.StudentName} onChange={(e)=>InputOnChange('StudentName',e.target.value)} type="text" className="form-control" placeholder="Name"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Status Class</label>
                    <input value={FormValue.StudentClass} onChange={(e)=>InputOnChange('StudentClass',e.target.value)} type="text" className="form-control" placeholder="Class"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Student Id</label>
                    <input value={FormValue.StudentId} onChange={(e)=>InputOnChange('StudentId',e.target.value)} type="text" className="form-control" placeholder="Id"/>
                </div>
                
                <div className="col-md-4 p-2">
                    <label className="form-label">Father's Name</label>
                    <input value={FormValue.StudentFathersName} onChange={(e)=>InputOnChange('StudentFathersName',e.target.value)}  type="text" className="form-control" placeholder="Father's Name"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Mother's Name</label>
                    <input value={FormValue.StudentMothersName} onChange={(e)=>InputOnChange('StudentMothersName',e.target.value)}  type="text" className="form-control" placeholder="Mother's Name"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Nationality</label>
                    <input value={FormValue.StudentNationality} onChange={(e)=>InputOnChange('StudentNationality',e.target.value)}  type="text" className="form-control" placeholder="Nationality"/>
                </div>

                <div className="col-md-4 p-2">
                    <label className="form-label">Submit Student List</label><br/>
                    <button onClick={Save} className="btn w-100 btn-success">Submit</button>
                </div>

            </div>
            <Toaster position="bottom-center" />
        </div>
    );
};

export default CreateStudent;