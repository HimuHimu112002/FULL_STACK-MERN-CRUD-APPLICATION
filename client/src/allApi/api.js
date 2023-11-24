import axios from "axios";

export async function listTaskRequest(){
    try {
        let res = await fetch("http://localhost:5000/api/v1/getData");
        let JSONData = await res.json();
        return JSONData.data;
    }catch (e) {
        return []
    }
}


export async function listTaskDelete(id){
    try {
        let res = await fetch("http://localhost:5000/api/v1/DeleteStudent/"+id);
        let JSONData = await res.json();
        return JSONData
    }catch (e) {
        return false
    }
}

