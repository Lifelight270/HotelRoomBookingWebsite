// App.js

import React, { useState } from "react";
import RoomList from "./RoomList";
import BookingForm from "../BookingForm";
import "./Component.css";

const rooms = [
  {
    name: "Room 101",
    features: ["WiFi", "TV", "Private Bathroom"],
    capacity: 2,
    prize: 200,
    imgSrc: "image/b.jpg",
  },
  {
    name: "Room 102",
    features: ["WiFi", "TV", "Private Bathroom"],
    capacity: 1,
    prize: 200,
    imgSrc: "image/b.jpg",
  },
  {
    name: "Room 103",
    features: ["WiFi", "TV", "Private Bathroom"],
    capacity: 3,
    prize: 200,
    imgSrc: "image/b.jpg",
  },
  {
    name: "Room 104",
    features: ["WiFi", "TV", "Private Bathroom"],
    capacity: 4,
    prize: 200,
    imgSrc: "image/b.jpg",
  },

  {
    name: "Room 105",
    features: ["WiFi", "AC", "Balcony"],
    capacity: 2,
    prize: 400,
    imgSrc: "image/d.jpg",
  },
  {
    name: "Room 106",
    features: ["WiFi", "AC", "Balcony"],
    capacity: 1,
    prize: 400,
    imgSrc: "image/d.jpg",
  },
  {
    name: "Room 107",
    features: ["WiFi", "AC", "Balcony"],
    capacity: 3,
    prize: 400,
    imgSrc: "image/d.jpg",
  },
  // Add more rooms with different features
];

const Room = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBook = (roomId, formData) => {
    // Handle booking logic here, e.g., updating room status in a database
    console.log(`Room ${roomId} booked with data:`, formData);
    // You can add logic to handle the booking success state if needed
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setIsBookingModalOpen(true);
  };

  const handleBookingModalClose = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="Room">
      <div className="container py-4">
        <h1>Available Rooms</h1>
        <div className="rooms container">
          {rooms.map((room, index) => (
            <RoomList
              key={index}
              imgSrc={room.imgSrc}
              roomName={room.name}
              features={room.features}
              capacity={room.capacity}
              prize={room.prize}
              onBook={() => handleRoomSelect(room)}
            />
          ))}
        </div>
      </div>
      {isBookingModalOpen && (
        <BookingForm
          isOpen={isBookingModalOpen}
          onClose={handleBookingModalClose}
          onBooked={() => {
            handleBookingModalClose();
            // Reset the booking success state when the booked message is closed
          }}
          handleBook={handleBook}
          selectedRoom={selectedRoom}
        />
      )}
    </div>
  );
};

export default Room;
