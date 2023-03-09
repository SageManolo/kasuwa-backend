const mongoose=require('mongoose');
const schema= mongoose.Schema;

const commoditiesSchema = new schema(
     {
        name:String,
        commodities:[{
            name:{type: String, required: true,unique: true,index: true},
            price:{type: Number, required: true,unique: true}
    }]
}, {timestamps:true}
)

const Commodity= mongoose.model('commodities', commoditiesSchema);
module.exports = Commodity