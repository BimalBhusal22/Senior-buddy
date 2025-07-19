import { useState } from "react";
import { Trash2, Phone, AlertTriangle } from "lucide-react";

const DeleteMentor = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success', 'error', or ''

  const validatePhoneNumber = (phone) => {
    // Basic phone number validation (adjust regex based on your requirements)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
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
      setMessage("Please enter a valid phone number");
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
    setPhoneNumber(e.target.value);
    // Clear message when user starts typing
    if (message) {
      setMessage("");
      setMessageType("");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center mb-6">
        <div className="bg-red-100 p-3 rounded-full mr-4">
          <Trash2 className="w-6 h-6 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Delete Mentor</h2>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <div className="flex items-center">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
          <p className="text-sm text-yellow-700">
            Warning: This action cannot be undone. All data related to this
            mentor will be permanently deleted.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mentor Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Enter mentor's phone number"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              disabled={isLoading}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            />
          </div>
        </div>

        {message && (
          <div
            className={`p-4 rounded-lg ${
              messageType === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <p className="text-sm font-medium">{message}</p>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={isLoading || !phoneNumber.trim()}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Deleting...
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Trash2 className="w-5 h-5 mr-2" />
              Delete Mentor
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default DeleteMentor;
