import mongoose, { Schema } from 'mongoose';

const CheckListSchema = new Schema({
	plannerId: mongoose.Types.ObjectId,
	list: [
		{
			subjectCategoryId: mongoose.Types.ObjectId,
			color: String,
			subject: String,
			content: String,
			startTime: String,
			endTime: String,
		},
	],
});

CheckListSchema.statics.findByObjectId = function (id) {
	return this.findOne({ plannerId: id });
};

CheckListSchema.statics.findByObjectIdArr = function (arr) {
	return this.find({ plannerId: { $in: arr } });
};

const CheckList = mongoose.model('CheckList', CheckListSchema);
export default CheckList;
