
const {MongoClient,ServerApiVersion} = require('mongodb');
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3001;
const username = encodeURIComponent("charansai9247");
const password = encodeURIComponent("Charansai@21");
const uri = `mongodb+srv://${username}:${password}@cluster0.jj10vja.mongodb.net/`;
const client = new MongoClient(uri,{
    serverApi:{
        version: ServerApiVersion.v1, strict:true, deprecationErrors:true
    }
});
const connectToMongodb = async ()=>{
    try{
        await client.connect();
        console.log("db connected!!!");
        
    }catch(error){
        console.error("Error connecting to MongoDB",error);
    }
};
connectToMongodb();

app.get("/test", (req, res) => {
    console.log("Test endpoint was hit");
    res.send("Test successful");
});


app.get("/api/data", async (request, response) => {
    console.log("API endpoint /api/data was hit"); 
    try {
        const database = client.db("nxttrendz");
        const collection = database.collection("product");
        const result = await collection.find({}).toArray();
        console.log("data from mongo");
        console.log(result);
        response.json(result);
    } catch (error) {
        console.error("Error fetching data from MongoDB", error);
        response.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(port,()=>{
    console.log("Server is running",port);
});