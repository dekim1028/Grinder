import mongoose, { Schema } from 'mongoose';
import moment from 'moment';

const PlannerSchema = new Schema({
	user: {
		_id: mongoose.Types.ObjectId,
		userid: String,
	},
	dday: String,
	date: String,
	wakeupTime: String,
	studyTime: String,
});

PlannerSchema.statics.findByDate = function (date, userid) {
	return this.findOne({ date: date, 'user.userid': userid });
};

PlannerSchema.statics.findIdByDate = function (date, userid) {
	return this.findOne({ date: date, 'user.userid': userid }, '_id');
};

PlannerSchema.statics.findWeeklyPlanner = function (date, userid) {
	const today = new Date(date);
	const day = today.getDay();

	const mDiff = today.getDate() - day + (day == 0 ? -6 : 1);
	const sDiff = today.getDate() - day + (day == 0 ? 0 : 7);

	const monday = new Date(today.setDate(mDiff));
	const sunday = new Date(today.setDate(sDiff));

	return this.find({
		date: {
			$gte: moment(monday).format('yyyy-MM-DD'),
			$lte: moment(sunday).format('yyyy-MM-DD'),
		},
		'user.userid': userid,
	});
};

const Planner = mongoose.model('Planner', PlannerSchema);
export default Planner;
