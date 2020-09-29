import axios from "axios";




/*****************************INSERT***********************************/
export const addUser = (record)=>{
    return (dispatch)=>{
        return axios.post("http://localhost:8080/insert",record)
                    .then((posRes)=>{
                        posRes.data.record = record;
                        dispatch(fun_two(posRes.data));
                    },(errRes)=>{
            console.log(errRes);
        });
    };
};
export const fun_two = (response)=>{
    return {type:"INSERT",value:response};
};















