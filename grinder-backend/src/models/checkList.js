import mongoose, {Schema} from 'mongoose';

const CheckListSchema = new Schema({
    plannerId:mongoose.Types.ObjectId,
    list:[{
        color:String,
        subject:String,
        content:String,
        check:{
            type:Boolean,
            default:false,
        },
        startTime:String,
        endTime:String,
    }]
});

CheckListSchema.statics.findByObjectId = function(id){
    return this.findOne({plannerId:id});
};

const CheckList = mongoose.model('CheckList',CheckListSchema);
export default CheckList;