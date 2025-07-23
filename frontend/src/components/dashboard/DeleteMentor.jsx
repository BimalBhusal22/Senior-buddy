import { useState } from "react";
import { Trash2, Hash, AlertTriangle } from "lucide-react";

const DeleteMentor = () => {
  const [mentorId, setMentorId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success', 'error', or ''

  const validateMentorId = (id) => {
    // Basic validation - check if ID is not empty and has reasonable length
    return id.trim().length > 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mentorId.trim()) {
      setMessage("Mentor ID is required");
      setMessageType("error");
      return;
    }

    if (!validateMentorId(mentorId)) {
      setMessage("Please enter a valid mentor ID");
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await fetch(
        "http://localhost:7000/api/v1/admin/delete_mentor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: mentorId.trim() }),
        }
      );

      if (response.ok) {
        setMessage("Mentor deleted successfully");
        setMessageType("success");
        setMentorId("");
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to delete mentor");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMentorIdChange = (e) => {
    const value = e.target.value;
    setMentorId(value);

    // Clear message when user starts typing
    if (message) {
      setMessage("");
      setMessageType("");
    }
  };

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div className="container-fluid d-flex justify-content-center">
        <div
          className="card shadow-lg"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <div className="card-body p-4">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-danger bg-opacity-10 p-3 rounded-circle me-3">
                <Trash2 className="text-danger" size={24} />
              </div>
              <h2 className="h4 mb-0 text-dark fw-bold">Delete Mentor</h2>
            </div>

            <div className="alert alert-warning d-flex align-items-start mb-4">
              <AlertTriangle
                className="text-warning me-2 flex-shrink-0"
                size={20}
              />
              <small className="mb-0">
                Warning: This action cannot be undone. All data related to this
                mentor will be permanently deleted.
              </small>
            </div>

            <div>
              <div className="mb-3">
                <label htmlFor="mentorId" className="form-label fw-medium">
                  Mentor ID
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Hash className="text-muted" size={20} />
                  </span>
                  <input
                    type="text"
                    id="mentorId"
                    className={`form-control ${
                      mentorId && !validateMentorId(mentorId)
                        ? "is-invalid"
                        : mentorId && validateMentorId(mentorId)
                        ? "is-valid"
                        : ""
                    }`}
                    value={mentorId}
                    onChange={handleMentorIdChange}
                    placeholder="Enter mentor ID"
                    disabled={isLoading}
                    required
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                  />
                  {mentorId && !validateMentorId(mentorId) && (
                    <div className="invalid-feedback">
                      Please enter a valid mentor ID
                    </div>
                  )}
                </div>
              </div>

              {message && (
                <div
                  className={`alert ${
                    messageType === "success" ? "alert-success" : "alert-danger"
                  } mb-3`}
                >
                  <small className="fw-medium mb-0">{message}</small>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isLoading || !mentorId.trim()}
                className="btn btn-danger w-100 py-2 d-flex align-items-center justify-content-center"
              >
                {isLoading ? (
                  <>
                    <div
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></div>
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="me-2" size={20} />
                    Delete Mentor
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteMentor;
