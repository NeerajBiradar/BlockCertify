const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  certificateIds: [String]
});

const User = mongoose.model('BlockCertify', userSchema);

mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        app.listen(3000,()=>{
            console.log("Connected")
        })
        
    })
    .catch((err)=>{
        console.log(err);
    })

app.post('/api/generate',async(req,res)=>{
    console.log(req.body)
    try{
        const { email, certificateId } = req.body;

        // Find the user by email or create a new one
        let user = await User.findOne({ email });

        if (user) {
          // If user exists, add the new certificateId
          user.certificateIds.push(certificateId);
        } else {
          // If user doesn't exist, create a new one
          user = new User({ email, certificateIds: [certificateId] });
        }

        // Save the user document
        await user.save();

        res.status(200).json({ message: 'Certificate ID added successfully', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
})    

// Updated method to get certificate IDs by email
app.post('/api/certificates', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (user) {
            res.status(200).json({ certificateIds: user.certificateIds });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});
