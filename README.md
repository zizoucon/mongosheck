# mongosheck


usecontact.contact
db.contactlist.insertMany([
    {Last_name: "Ben Lahmer", First_name: "Fares", Email: "fares@gmail.com, age:26"},
    {Last_name: "Kefi", First_name: "Seif", Email:"kefi@gmail.com" , age:15},
    {Last_name: "Fatnassi", First_name: "Sarra", Email: "sarra.f@gmail.com", age:40},
    {Last_name: "Ben Yahia", First_name:"Rym", age:4},
    {Last_name: "Cherif", First_name:"Sami", age:3}])
db.contactlist.find({Last_name: "Ben Lahmer"}).pretty()
db.contactlist.find({age:{$lt:15}}).pretty();
db.contactlist.find({age:{$gt:18}}).pretty();
db.contactlist.find({age:{$gt:18}, $or:[{Last_name:/ah/i},{First_name:/ah/i}]})
db.contactlist.update({ Last_name: "Kefi",First_name: "Seif" },
{$set: {First_name: "anis"}})
db.contactlist.remove({ age: {$lt:5 }})
