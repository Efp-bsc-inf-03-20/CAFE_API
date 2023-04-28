export type CreateUserparams = {
    username:string;
    password:string;
    email:string;
 
}
export type UpdateUserparams = {
    username:string;
    password:string;
    email:string;
 
}
export type CreateOrderparams = {
    orderId:number;
    foodtype:string;
    phonenumber:string;
    location:string;
 
}
export type UpdateOrderparams = {
    orderId:number;
    foodtype:string;
    phonenumber:string;
    location:string;
 
}