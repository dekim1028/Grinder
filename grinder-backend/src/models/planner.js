import mongoose, {Schema} from 'mongoose';
import moment from 'moment';

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

PlannerSchema.statics.findIdByDate = function(date){
    return this.findOne({date},'_id');
};

PlannerSchema.statics.findWeeklyPlanner = function(date){
    const today = new Date(date);
    const day = today.getDay();

    const mDiff = today.getDate() - day + (day == 0 ? -6:1);
    const sDiff = today.getDate() - day + (day == 0 ? 0:7);

    const monday = new Date(today.setDate(mDiff));
    const sunday = new Date(today.setDate(sDiff));

    return this.find({
        date: {
          $gte: moment(monday).format('yyyy-MM-DD'),
          $lte: moment(sunday).format('yyyy-MM-DD')
        }
    });
};

const Planner = mongoose.model('Planner',PlannerSchema);
export default Planner;