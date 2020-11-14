import mongoose, {Schema} from 'mongoose';

const PlannerSchema = new Schema({
    user:{
        _id:mongoose.Types.ObjectId,
        userid:String,
    },
    dday:String,
    date:String,
    wakeupTime:String,
    studyTime:String
});

PlannerSchema.statics.findByDate = function(date){
    return this.findOne({date});
};

const Planner = mongoose.model('Planner',PlannerSchema);
export default Planner;