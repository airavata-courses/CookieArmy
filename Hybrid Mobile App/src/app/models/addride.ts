import { Ride } from "./ride";

export class AddRide{
    constructor(public rideid:string,public date:string,public source:string,public destination:string,public time:string,
        public name:string,public amount:number,public contact_details:string){}

        
}