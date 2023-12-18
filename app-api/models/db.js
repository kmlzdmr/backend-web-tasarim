var mongoose = require('mongoose')
//var dbURI = 'mongodb://127.0.0.1/mekanbul'
//var uri = "mongodb+srv://kamil:1234@mekanbul.ay7tmfn.mongodb.net/?retryWrites=true&w=majority";
var dbURI = "mongodb+srv://kamil:mekanmekan@mekanbul.ay7tmfn.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI)
mongoose.connection.on("connected",() => console.log(dbURI + " adresine bağlanıldı."))
mongoose.connection.on("error", () => console.log("Bağlantı sırasında hata oluştu."))
mongoose.connection.on("disconnected",() => console.log(dbURI + " adresinden bağlantı kesildi."))

process.on("SIGINT",() => {
    mongoose.connection.close()
    console.log("Uygulama kapatıldı")
    process.exit(0)
})

require("./venue")

