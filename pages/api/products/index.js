import nc from "next-connect"
import db from "../../../utils/db"
import Products from "../../../models/Product"

const handler=nc()

handler.get(async(req,res)=>{
    await db.connect();
    const products=await Products.find({})
    await db.disconnect()
    res.send(products);
})

export default handler;