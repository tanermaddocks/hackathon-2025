// Import and run server

const dotenv = require("dotenv");
dotenv.config();

const { app } = require("./server");

const PORT = process.env.PORT || 8200

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});