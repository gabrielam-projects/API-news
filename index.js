//Env manejador de variables de entorno (ubicacion antes de que se ocupe)
require('dotenv').config()
// Conectarse a MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
// Construir la base de datos de la URL donde me voy a conectar
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@test.disdl6x.mongodb.net/?retryWrites=true&w=majority`;
// Definir la base de datos y coleccion a la que me voy a conectar
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