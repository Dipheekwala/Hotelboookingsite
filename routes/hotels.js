const express = require ('express');
const {
    gethotels,
    getHotelById,
    posthotel,
    updatehotel,
    deleteHotelById,
    
}= require ("../controllers/hotels");

const hotelrouter = express.Router()

hotelrouter.get("/", gethotels);
hotelrouter.get("/:id", getHotelById);
hotelrouter.post("/", posthotel);
hotelrouter.patch("/:id", updatehotel);
hotelrouter.delete("/:id",deleteHotelById)

module.exports = hotelrouter
