import {Client, GatewayIntentBits} from "discord.js";
import {connect,query} from "./database.js"
import {config} from "dotenv"
import {REST} from "@discordjs/rest"

const client=new Client({intents:[
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
]});
config();

connect().then(data=>{
    console.log("Successfully connected to database")  
})
.catch(err=>console.log("Connecting to the database was unsuccessfull"))

client.on('ready',()=>{
    console.log(`Logged in as ${client.user.displayName}`)
})

const rest=new REST({version:10}).setToken(process.env.token);
client.on('interactionCreate',(interaction)=>{
    console.log(interaction);
})

client.on("messageCreate",(message)=>{
    
    console.log(message.content);
})

client.on("error",(err)=>{
    console.log("Server error")
    console.log(err);
})
client.login(process.env.token)