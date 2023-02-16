const hotels = require('../models/hotels')
const hotelModel = require('../models/hotels')

const gethotels = (req,res) => {
     
    hotelModel.find()
    .then(hotels => {
        res.json(hotels)
    })
    //if an error occurs ,log the error message and send the error back to the client.
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}
const getHotelById = (req , res) => {
    const id =req.params.id
    // Use the bookModel to find a book by its id

hotelModel.findById(id)
.then(hotel => {
    res.status(200).json(hotel)
}).catch(err => {
    console.log(err)
    res.status(404). send(err)
})  
}
const posthotel = (req,res) => {
    const hotel = req.body
    hotel.lastUpdateAt =new Date ()
    hotelModel.create(hotel)
    .then(hotel => {
        res.status(201).json(hotel)
    })  
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}

const updatehotel = (req,res) => {
    const id = req.params.id
    const hotel = req.body

    hotel.lastUpdateAt = new Date()

    hotelModel.findByIdAndUpdate( id, hotel, {new: true})
    .then(hotel => {
        res.status(200).json(hotel)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}
const deleteHotelById =(req,res)=> {
    const id = req.params.id
    hotelModel.findByIdAndRemove(id)
    .then(hotel => {
        res.status(200).json("hotel deleted successfully!")
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports={
    gethotels,
    getHotelById,
    posthotel,
    updatehotel,
    deleteHotelById
}