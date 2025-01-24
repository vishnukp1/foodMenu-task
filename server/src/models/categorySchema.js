import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    menuItems: [{
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'Items'
     }]
});

export default mongoose.model('category', categorySchema);
