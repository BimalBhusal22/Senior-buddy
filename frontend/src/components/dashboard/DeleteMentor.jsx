import { useState } from "react";
import { Trash2, Phone, AlertTriangle } from "lucide-react";

const DeleteMentor = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success', 'error', or ''

  const validatePhoneNumber = (phone) => {
    // Validate exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ""));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phoneNumber.trim()) {
      setMessage("Phone number is required");
      setMessageType("error");
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setMessage("Please enter exactly 10 digits");
      setMessageType("error");
      return;
    }

    setIsLoading(true);
    setMessage("");
    setMessageType("");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/mentors/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: phoneNumber.trim() }),
      });

      if (response.ok) {
        setMessage("Mentor deleted successfully");
        setMessageType("success");
        setPhoneNumber("");
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

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Only allow digits and limit to 10 characters
    const numericValue = value.replace(/\D/g, "").slice(0, 10);
    setPhoneNumber(numericValue);

    // Clear message when user starts typing
    if (message) {
      setMessage("");
      setMessageType("");
    }
  };

  return (
    <>
      {/* Bootstrap CSS CDN */}
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
                <label htmlFor="phoneNumber" className="form-label fw-medium">
                  Mentor Phone Number
                </label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Phone className="text-muted" size={20} />
                  </span>
                  <input
                    type="tel"
                    id="phoneNumber"
                    className={`form-control ${
                      phoneNumber && phoneNumber.length !== 10
                        ? "is-invalid"
                        : phoneNumber.length === 10
                        ? "is-valid"
                        : ""
                    }`}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Enter 10-digit phone number"
                    disabled={isLoading}
                    required
                    maxLength="10"
                    pattern="\d{10}"
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                  />
                  {phoneNumber && phoneNumber.length !== 10 && (
                    <div className="invalid-feedback">
                      Phone number must be exactly 10 digits
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
                disabled={isLoading || !phoneNumber.trim()}
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
