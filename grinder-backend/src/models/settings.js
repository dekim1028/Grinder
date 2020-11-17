import mongoose, {Schema} from 'mongoose';

const SettingsSchema = new Schema({
    user:{
        _id:mongoose.Types.ObjectId,
        userid:String,
    },
    SubjectCategory:[{
        color:String,
        subject:String
    }]
});

SettingsSchema.statics.findByUserId = function(id){
    return this.findOne({'user.userid':id});
};

const Settings = mongoose.model('Settings',SettingsSchema);
export default Settings;