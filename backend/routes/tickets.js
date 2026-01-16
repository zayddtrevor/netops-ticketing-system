const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all tickets
router.get("/", (req, res) => {
  const sql = "SELECT * FROM tickets ORDER BY created_at DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// CREATE ticket
router.post("/", (req, res) => {
  const { customer_name, issue_type, urgency } = req.body;

  if (!customer_name || !issue_type) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  db.query(
    "INSERT INTO tickets (customer_name, issue_type, urgency) VALUES (?, ?, ?)",
    [customer_name, issue_type, urgency],
    (err) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: "Ticket created" });
    }
  );
});

// UPDATE ticket details (EDIT)
router.put("/edit/:id", (req, res) => {
  const { issue_type, urgency } = req.body;
  const { id } = req.params;

  db.query(
    "UPDATE tickets SET issue_type=?, urgency=? WHERE id=?",
    [issue_type, urgency, id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Ticket updated" });
    }
  );
});

// RESOLVE ticket
router.put("/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "UPDATE tickets SET status='Resolved' WHERE id=?",
    [id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Ticket resolved" });
    }
  );
});

// DELETE ticket
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM tickets WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Ticket deleted" });
  });
});

module.exports = router;
