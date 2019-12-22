const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
exports.getBiology = functions.https.onRequest((req,res)=>{
    admin.firestore().collection('biology').get()
    .then(data => { 
        let biology=[];
data.forEach(doc=>{
    biology.push(doc.data());
});
return res.json(biology); 
    })
    .catch(err=>console.error(err))
})
