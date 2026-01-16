import { useEffect, useState } from "react";

function Dashboard() {
  const [tickets, setTickets] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [issueType, setIssueType] = useState("No Connection");
  const [urgency, setUrgency] = useState("Low");
  const [editingId, setEditingId] = useState(null);

  const fetchTickets = async () => {
    const res = await fetch("http://localhost:5000/tickets");
    const data = await res.json();
    setTickets(data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const addTicket = async (e) => {
    e.preventDefault();
    if (!customerName.trim()) return alert("Customer name required");

    await fetch("http://localhost:5000/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer_name: customerName,
        issue_type: issueType,
        urgency
      })
    });

    setCustomerName("");
    fetchTickets();
  };

  const resolveTicket = async (id) => {
    await fetch(`http://localhost:5000/tickets/${id}`, { method: "PUT" });
    fetchTickets();
  };

  const deleteTicket = async (id) => {
    if (!window.confirm("Delete this ticket?")) return;

    await fetch(`http://localhost:5000/tickets/${id}`, {
      method: "DELETE"
    });
    fetchTickets();
  };

  const saveEdit = async (id) => {
    await fetch(`http://localhost:5000/tickets/edit/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ issue_type: issueType, urgency })
    });

    setEditingId(null);
    fetchTickets();
  };

  return (
    <div className="container">
      <h1>NetOps Agent Dashboard</h1>

      {/* Add Ticket */}
      <div className="card">
        <form onSubmit={addTicket}>
          <input
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <select onChange={(e) => setIssueType(e.target.value)}>
            <option>No Connection</option>
            <option>Slow Speed</option>
            <option>Hardware</option>
          </select>

          <select onChange={(e) => setUrgency(e.target.value)}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button className="primary">Add Ticket</button>
        </form>
      </div>

      {/* Tickets */}
      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Customer</th>
              <th>Issue</th>
              <th>Urgency</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((t) => (
              <tr key={t.id}>
                <td>{t.customer_name}</td>

                <td>
                  {editingId === t.id ? (
                    <select onChange={(e) => setIssueType(e.target.value)}>
                      <option>No Connection</option>
                      <option>Slow Speed</option>
                      <option>Hardware</option>
                    </select>
                  ) : (
                    t.issue_type
                  )}
                </td>

                <td>
                  {editingId === t.id ? (
                    <select onChange={(e) => setUrgency(e.target.value)}>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  ) : (
                    t.urgency
                  )}
                </td>

                <td
                  className={
                    t.status === "Pending"
                      ? "status-pending"
                      : "status-resolved"
                  }
                >
                  {t.status}
                </td>

                <td>
                  {editingId === t.id ? (
                    <button
                      className="success"
                      onClick={() => saveEdit(t.id)}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      {t.status === "Pending" && (
                        <button
                          className="success"
                          onClick={() => resolveTicket(t.id)}
                        >
                          Resolve
                        </button>
                      )}
                      <button
                        className="warning"
                        onClick={() => setEditingId(t.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="danger"
                        onClick={() => deleteTicket(t.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
