const express = require("express")
const { MongoClient, ServerApiVersion } = require("mongodb")

const app = express()
const port = 3000

// MongoDB connection URI
const uri = "mongodb+srv://mattonome:Hilltop*2018@cluster0.qjbss6w.mongodb.net/?appName=Cluster0"

// Create Mongo client instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

// Connect to MongoDB and then start the server
async function connectDB() {
  try {
    await client.connect()
    await client.db("admin").command({ ping: 1 })
    console.log("✅ Connected to MongoDB Atlas")

    // Make DB available to routes
    app.locals.db = client.db("myDatabaseName")

    // Mount routes
    app.use("/", require("./routes"))

    // Start server
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`)
    })
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err)
  }
}

connectDB()
