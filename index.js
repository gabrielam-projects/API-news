const express = require("express");

const app = express();
//USER="marianadiazcastellanos"
//PASSWORD="ndrWuzU8rlIRllNY"
// Conectarse a MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://marianadiazcastellanos:ndrWuzU8rlIRllNY@test.disdl6x.mongodb.net/?retryWrites=true&w=majority";
const dbName = "WorldNews";
const collection = "News";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    
    console.log("Conexión exitosa a MongoDB");
    const db = client.db(dbName);
    const usuariosCollection = db.collection(collection);
    const usuario = { nombre: 'Ejemplo', email: 'ejemplo@email.com' };
    await usuariosCollection.insertOne(usuario)

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);