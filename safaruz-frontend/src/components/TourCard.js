import React from "react";

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-700">
      <img
        src={tour.image_url || "https://via.placeholder.com/400x200"}
        alt={tour.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-accent mb-2">{tour.title}</h3>
        <p className="text-sm text-lightText mb-2">{tour.description || "No description provided."}</p>

        <div className="mt-3 space-y-1 text-sm text-lightText">
          <p><strong className="text-accent">Agency:</strong> {tour.agency_name}</p>
          <p><strong className="text-accent">Location:</strong> {tour.location}</p>
          {tour.duration && <p><strong className="text-accent">Duration:</strong> {tour.duration}</p>}
          {tour.phone && <p><strong className="text-accent">Phone:</strong> {tour.phone}</p>}
          {tour.email && <p><strong className="text-accent">Email:</strong> {tour.email}</p>}
          {tour.instagram && <p><strong className="text-accent">Instagram:</strong> @{tour.instagram}</p>}
          {tour.telegram && <p><strong className="text-accent">Telegram:</strong> {tour.telegram}</p>}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
