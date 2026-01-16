const express = require("express");
const cors = require("cors");

const ticketRoutes = require("./routes/tickets");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tickets", ticketRoutes);

app.listen(5000, () => {
  console.log("NetOps backend running on http://localhost:5000");
});
