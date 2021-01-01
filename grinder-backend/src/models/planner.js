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

	let monday = new Date(today.setDate(mDiff));
	let sunday = new Date(today.setDate(sDiff));

	// [추가] 년도 바뀔 때 버그 수정
	if (sunday < monday) {
		sunday = new Date(monday.getFullYear() + 1, 0, sunday.getDate() + 1);
	}

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
