import http from './http'

export async function addUser(user){
    
    return await http.post('/users/signin',user)
 }

 export async function addTask(data){
    
    return await http.post('/tasks/create',data)
 }

export async function logIn(user){
    return await http.post('/users/signup',user)
 }

 export async function GetAlldata(){
   return await http.get('/tasks/getall')
}
