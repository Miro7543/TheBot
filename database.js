import PG from "pg";
import {config} from 'dotenv';
config();

const client=new PG.Client({
    user:process.env.DB_user,
    host:process.env.DB_host,
    database:process.env.DB_user,
    password:process.env.DB_password,
})
export async function connect(){
    return client.connect()
}
export async function query(query,obj){
    client.query(query,obj);
}