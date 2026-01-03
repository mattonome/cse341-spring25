exports.welcomeRoute = async (req, res) => {
  try {
    const db = req.app.locals.db
    const lessons = db.collection("lessons")

    // Example operation — insert a document
    // await lessons.insertOne({ title: "Intro to MongoDB", createdAt: new Date() })

    // Example operation — fetch all documents
    const data = await lessons.find().toArray()

    res.json({
      message: "Welcome to my Express server with MongoDB!",
      data,
    })
  } catch (err) {
    console.error("Database error:", err)
    res.status(500).send("Error connecting to MongoDB")
  }
}
