import  express  from "express";
import legacyRoutes from "./routes/legacy.js"
import cookieParser from "cookie-parser"


const app = express()

app.use(express.json())
app.use(cookieParser())




app.use("/api/legacy",legacyRoutes)



app.listen(8801,()=>{
    console.log("Conectado puerto 8801!")
})