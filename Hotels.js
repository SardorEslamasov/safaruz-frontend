import React, { useState, useEffect } from "react";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import HotelFilters from "../components/HotelFilters";
import HotelCard from "../components/HotelCard";

// Mock data for initial hotels
const mockHotels = [
  {
    id: 1,
    name: "Grand Hotel Plaza",
    type: "Luxury",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    price: 299,
    rating: 4.5,
    reviews: 128,
    rooms: 2,
    bathrooms: 1,
    hasWifi: true,
    hasParking: true,
    hasPool: true,
  },
  {
    id: 2,
    name: "Seaside Resort",
    type: "Resort",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    price: 199,
    rating: 4,
    reviews: 96,
    rooms: 1,
    bathrooms: 1,
    hasWifi: true,
    hasParking: true,
    hasPool: false,
  },
  {
    id: 3,
    name: "City Center Inn",
    type: "Business",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80",
    price: 149,
    rating: 3.5,
    reviews: 74,
    rooms: 1,
    bathrooms: 1,
    hasWifi: true,
    hasParking: false,
    hasPool: false,
  },
];

const Hotels = () => {
  const [hotels, setHotels] = useState(mockHotels);
  const [filteredHotels, setFilteredHotels] = useState(mockHotels);

  const handleFilterChange = (filters) => {
    // Apply filters to hotels
    let filtered = hotels.filter((hotel) => {
      // Filter by city if provided
      if (filters.city && !hotel.name.toLowerCase().includes(filters.city.toLowerCase())) {
        return false;
      }

      // Filter by price range
      if (hotel.price < filters.priceRange[0] || hotel.price > filters.priceRange[1]) {
        return false;
      }

      // Filter by rating
      if (filters.rating !== 'any' && hotel.rating < parseInt(filters.rating)) {
        return false;
      }

      // Filter by amenities
      if (filters.amenities.wifi && !hotel.hasWifi) return false;
      if (filters.amenities.parking && !hotel.hasParking) return false;
      if (filters.amenities.pool && !hotel.hasPool) return false;

      return true;
    });

    setFilteredHotels(filtered);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={6}>
        Find Your Perfect Stay
      </Text>
      
      <Box mb={8}>
        <HotelFilters onFilterChange={handleFilterChange} />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </SimpleGrid>

      {filteredHotels.length === 0 && (
        <Box textAlign="center" py={10}>
          <Text fontSize="lg" color="gray.600">
            No hotels found matching your criteria. Try adjusting your filters.
          </Text>
        </Box>
      )}
    </Container>
  );
};

export default Hotels;
