//objeto ejemplo
const objeto = {
    title: 'MyTitle',
    description: 'Mydescription',
    source: {
        id: 'MyId',
        name: 'MyName'
    },
    publishedAt: 'MypublishedAt'
};

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

//**MODIFICATIONS : modify the run function to accept the newSchema object and insert it into the MongoDB collection.
//Add a parameter newSchema to the run function insted of 'objeto'
async function run(newSchema) {
  try {
    await client.connect();
    console.log("Conexión exitosa a MongoDB");
    // conexion con base de datos
    const db = client.db(dbName);
    //conexion con la coleccion
    const usuariosCollection = db.collection(collection);
    // CRUD -> Create  
    await usuariosCollection.insertOne(newSchema); // INSERTAR NOTICIAS Como traer de API NEWS las noticias a 

//--> FIND
//       // Specify the query criteria
//   const query = { key: 'value' };

// //   // Use the find method to retrieve documents that match the query
// //   collection.find(query).toArray(function(err, result) {
// //     if (err) throw err;
// const query = { title : 'MyTitle'}
// const ejemplo = await usuariosCollection.find(query).toArray()// FIND
// console.log(ejemplo);
} finally {
// Ensures that the client will close when you finish/error
  await client.close();
  }
}
//exportar la funcion run
module.exports = {run}