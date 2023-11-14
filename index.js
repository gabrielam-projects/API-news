const express = require("express");
const { run } = require('./database');


const app = express();

run().catch(console.dir);