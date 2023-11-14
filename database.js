// Conectarse a MongoDB
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://gabrielam3:BqmJODnBbaj7HDtm@cluster0.o41t2cm.mongodb.net/?retryWrites=true&w=majority";
const dbName = "sample_apinews";
const collection = "news";

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
    const usuario = { 
      nombre: 'Ejemplo', 
      email: 'ejemplo@email.com' ,
      date: new Date};
    await usuariosCollection.insertOne(usuario)

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = { run };