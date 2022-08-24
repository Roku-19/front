import axios from "axios";

export const query: string = "http://localhost:3001";

export function postFile(data:FormData): Promise<any>{
    return new Promise<any>( resolve => {
        axios.post(`${query}/img`, data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
};

export function getImg(id:any): Promise<any>{
    return new Promise<any>( resolve => {
        axios.get(`${query}/img/${id}`, {responseType: 'blob', headers:id})
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    });
};

export function saveForm(data:any): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.post(`${query}/form`, data)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    })
}

export function getForms(): Promise<any>{
    return new Promise<any>(resolve=>{
        axios.get(`${query}/form`)
        .then(result => resolve(result) )
        .catch(error => resolve( {data: {successed:false}} ) );
    })
}