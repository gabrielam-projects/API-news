//Env manejador de variables de entorno (ubicacion antes de que se ocupe)
require('dotenv').config()
// Conectarse a MongoDB
//1.Llamo las librerias para que corra Mongo
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

// Crear una funcion que se conecte a Mongo (tiene que ser una funcion async porque se conecta a un recurso externo que no controlamos)
// async implica ue cada interaccion con el recurso externo tenga un await.
async function run() {
  try {
    await client.connect();
    console.log("Conexión exitosa a MongoDB");
    // conexion con base de datos
    const db = client.db(dbName);
    //conexion con la coleccion
    const usuariosCollection = db.collection(collection);
    const usuario = { nombre: 'Ejemplo', email: 'ejemplo@email.com' };
    // CRUD -> Create  
    await usuariosCollection.insertOne(usuario)

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

