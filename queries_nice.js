// Mostrar todos los documentos
db.temproles.find({})

// Mostrar restaurant_id, name, borough, cuisine
db.temproles.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Mostrar sin _id
db.temproles.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Mostrar restaurant_id, name, borough, zipcode
db.temproles.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, 'address.zipcode': 1 })

// Mostrar restaurantes en el Bronx
db.temproles.find({ borough: 'Bronx' })

// Primeros 5 restaurantes en el Bronx
db.temproles.find({ borough: 'Bronx' }).limit(5)

// Saltar primeros 5, siguientes 5 en el Bronx
db.temproles.find({ borough: 'Bronx' }).skip(5).limit(5)

// Restaurantes con score > 90
db.temproles.find({ 'grades.score': { $gt: 90 } })

// Restaurantes con score > 80 y < 100
db.temproles.find({ 'grades.score': { $gt: 80, $lt: 100 } })

// Latitud < -95.754168
db.temproles.find({ 'address.coord.1': { $lt: -95.754168 } })

// No American, score > 70, longitud < -65.754168
db.temproles.find({ cuisine: { $ne: 'American ' }, 'grades.score': { $gt: 70 }, 'address.coord.0': { $lt: -65.754168 } })

// No American, grade A, no Brooklyn, orden cuisine desc
db.temproles.find({ cuisine: { $ne: 'American ' }, 'grades.grade': 'A', borough: { $ne: 'Brooklyn' } }).sort({ cuisine: -1 })

// Nombre empieza con Wil
db.temproles.find({ name: { $regex: '^Wil' } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Nombre termina con ces
db.temproles.find({ name: { $regex: 'ces$' } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Nombre contiene Reg
db.temproles.find({ name: { $regex: 'Reg' } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Bronx con comida American o Chinese
db.temproles.find({ borough: 'Bronx', cuisine: { $in: ['American ', 'Chinese'] } })

// Borough en Staten Island, Queens, Bronx o Brooklyn
db.temproles.find({ borough: { $in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Borough NO en Staten Island, Queens, Bronx o Brooklyn
db.temproles.find({ borough: { $nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn'] } }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Score no mayor a 10
db.temproles.find({ 'grades.score': { $not: { $gt: 10 } } })

// Fish excepto American y Chinees o nombre empieza con Wil
db.temproles.find({ $or: [ { cuisine: { $nin: ['American ', 'Chinees'] } }, { name: { $regex: '^Wil' } } ] }, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Grado A, score 11 en fecha 2014-08-11
db.temproles.find({ grades: { $elemMatch: { grade: 'A', score: 11, date: ISODate('2014-08-11T00:00:00Z') } } }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 })

// Segundo elemento grades grade A score 9 fecha 2014-08-11
db.temproles.find({ 'grades.1.grade': 'A', 'grades.1.score': 9, 'grades.1.date': ISODate('2014-08-11T00:00:00Z') }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 })

// Segundo coord entre 42 y 52
db.temproles.find({ 'address.coord.1': { $gt: 42, $lte: 52 } }, { _id: 0, restaurant_id: 1, name: 1, address: 1, 'address.coord': 1 })

// Ordenar nombre ascendente
db.temproles.find({}).sort({ name: 1 })

// Ordenar nombre descendente
db.temproles.find({}).sort({ name: -1 })

// Ordenar cuisine ascendente y borough descendente
db.temproles.find({}).sort({ cuisine: 1, borough: -1 })

// Direcciones sin calle
db.temproles.find({ 'address.street': { $exists: false } })

// Coordenadas tipo Double
db.temproles.find({ 'address.coord': { $type: 'double' } })

// Score divisible entre 7
db.temproles.find({ 'grades.score': { $mod: [7, 0] } }, { _id: 0, restaurant_id: 1, name: 1, grades: 1 })

// Nombre contiene mon
db.temproles.find({ name: { $regex: 'mon', $options: 'i' } }, { _id: 0, name: 1, borough: 1, 'address.coord': 1, cuisine: 1 })

// Nombre empieza con Mad
db.temproles.find({ name: { $regex: '^Mad' } }, { _id: 0, name: 1, borough: 1, 'address.coord': 1, cuisine: 1 })