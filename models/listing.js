const mongoose = require("mongoose")  ; 
// const Schema = mongoose.Schema; 

const listingSchema = new mongoose.Schema({
    title : {
        type : String , 
        required : true , 
    }, 
    description : String,
    image : {
        type : String , 
        default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgE-qlGVXsaAtZjsH5bLgMH1NgnKz_J8k3WuVsU83qg&s" ,
        set : (v) => v === "" ?  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgE-qlGVXsaAtZjsH5bLgMH1NgnKz_J8k3WuVsU83qg&s" : v 
    } ,
    price : Number , 
    location : String , 
    country : String ,
    reviews : [
        {
            type : mongoose.Schema.Types.ObjectId , 
            ref : "Review" , 
        },
    ]
});
const Listing = mongoose.model("Listing",listingSchema) ; //name of the collections is lisitngs because first upper case letter is converted in to small and s is added to the last
module.exports = Listing ; 