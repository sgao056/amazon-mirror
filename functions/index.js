const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
('sk_test_51I0ULCE7iHYykK3PfZl48kvfSDzVp6qpPAPQA6kBI5fSKm2MD219Ac51WAf5O8IGy2Jp50f0fLEidTWmwpHvhhjv001gwc97JI')

const app = express();

app.use(cors({origin:true}));
app.use(express.json());

app.get('/',(request,response)=>response.status(200).send('HelloWorld'))
app.post('/payments/create', async (request, response)=>{
    const total = request.query.total;
    console.log('Payment recieved for this amount >>>',total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"cad",
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    });
});


exports.api = functions.https.onRequest(app);
