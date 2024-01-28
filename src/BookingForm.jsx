import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./BookingForm.css";

import axios from "axios";

const BookingForm = ({
  isOpen,
  onClose,
  onBooked,
  handleBook,
  selectedRoom,
}) => {
  const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
  const [isCanceling, setIsCanceling] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    city: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Additional validation for date inputs
    if (name === "startDate" || name === "endDate") {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const selectedDate = new Date(value);

      if (selectedDate <= yesterday) {
        alert(`${name} should not be less than today.`);
        return;
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);

    if (startDate < yesterday) {
      alert("Starting date should not be less than today.");
      return;
    }

    if (endDate <= startDate) {
      alert("Ending date should be a future date and after the starting date.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/users", formData);
      console.log("Data posted successfully");
      // setIsBookingSuccessful(true);
      setIsCanceling(false);

      // Call the handleBook function
      handleBook(selectedRoom.id, formData);
      alert("Successfully booked room!");
      setIsBookingSuccessful(true);

      // Call the onBooked function only if the form is not being canceled
      if (!isCanceling) {
        // Notify the parent component that booking is completed
        onBooked();
      }
    } catch (error) {
      console.error("Error posting data:", error);
      // Handle error if needed
    }
  };
  const handleReset = () => {
    setFormData({
      name: "",
      address: "",
      email: "",
      city: "",
      startDate: "",
      endDate: "",
    });
    setIsBookingSuccessful(false);
  };

  const handleModalClose = () => {
    setFormData({
      name: "",
      address: "",
      email: "",
      city: "",
      startDate: "",
      endDate: "",
    });
    setIsCanceling(true);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleModalClose}
      contentLabel="Booking Form"
      className="booking-modal"
      overlayClassName="booking-overlay"
    >
      {isBookingSuccessful ? (
        <div className="booked_box text-center">
          <h2>Successfully Booked Room</h2>
          <p>Room Number: {selectedRoom.number}</p>
          <p>Capacity: {selectedRoom.capacity}</p>
          <p>Price: {selectedRoom.price}</p>
          <button onClick={handleModalClose}>Close</button>
        </div>
      ) : (
        <div className="booking-form">
          <div className="booking_head ">
            <h2>Booking Form</h2>
            <button onClick={handleModalClose} className="close-button">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col ">
                <label className="label ">Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <label>Address*</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Starting Date*</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col">
                <label>Ending Date*</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row py-3 action-button">
              <div className="col d-flex justify-content-center">
                <button onClick={handleReset}>Reset Form</button>
              </div>
              <div className="col d-flex justify-content-center">
                <button type="submit">Book Now</button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default BookingForm;
