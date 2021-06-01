
db.movie.insertMany([{nom:"Goodfellas",
annee:1990,
realisateur:{nom:"Scorsese", prenom:"Martin"},
acteurs:
[
{nom:"De Niro", prenom:"Robert"},
{nom:"Liotta", prenom:"Ray"},
{nom:"Pesci", prenom:"Joe"}
]},
{
nom:"The Godfather",
annee:1972,
realisateur:{nom:"Coppola", prenom:"Francis Ford"},
acteurs:
[
{nom:"Pacino", prenom:"Al"},
{nom:"Brando", prenom:"Marlon"},
{nom:"Duvall", prenom:"Robert"}
]},

{ nom:"Million Dollar Baby",
realisateur:{nom:"Eastwood", prenom:"Clint"},
acteurs:
[
{nom:"Swank", prenom:"Hilary"},
{nom:"Eastwood", prenom:"Clint"}
]},
{nom:"Gran Torino",
annee:2008,
realisateur:{nom:"Eastwood", prenom:"Clint"},
acteurs:
[
{nom:"Vang", prenom:"Bee"},
{nom:"Eastwood", prenom:"Clint"}
]},
{
nom:"Unforgiven",
realisateur:{nom:"Eastwood", prenom:"Clint"},
acteurs:
[
{nom:"Hackman", prenom:"Gene"},
{nom:"Eastwood", prenom:"Clint"}
]},
{
nom:"Mystic River",
realisateur:{nom:"Eastwood", prenom:"Clint"},
acteurs:
[
{nom:"Penn", prenom:"Sean"},
{nom:"Bacon", prenom:"Kevin"}
]},
{
nom:"Honkytonk Man",
realisateur:{nom:"Eastwood", prenom:"Clint"},
annee:1982,
acteurs:
[{
nom:"Eastwood", prenom:"Kyle"},
{nom:"Bloom", prenom:"Verna"}
]}])
db.movie.find({"realisateur":{"nom":"Eastwood", "prenom":"Clint"}})
db.movie.find({"realisateur.prenom":"Clint","annee":{$lt:200}}).pretty()
db.movie.find({"realisateur.prenom":"Clint", "annee":{$lt:2000}}).pretty()
db.movie.find({"acteurs":{"nom":"Eastwood", "prenom":"Clint"}})
db.movie.find({"acteurs":{$elemMatch:{"nom":"Eastwood"}}})
db.movie.find({"acteurs":{$elemMatch:{nom:"Eastwood",prenom:"Clint"}}}).pretty()
db.movie.find({"nom":/man/i}).pretty()
db.movie.find({"nom":/god/i},{"realisateur.nom":"coppola"}).pretty()
// exercice
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
