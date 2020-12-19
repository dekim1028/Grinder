import moment from 'moment';
import Planner from '../../models/planner';

export const getPlannerByDate = async (ctx, next) => {
	let { date } = ctx.params;
	const { userid } = ctx.state.user;

	try {
		if (!date) {
			date = moment(new Date()).format('YYYY-MM-DD');
		}

		let planner = await Planner.findByDate(date, userid);

		//플래너가 존재하지 않을 때
		if (!planner) {
			planner = new Planner({
				user: ctx.state.user,
				dday: null,
				date: date,
				wakeupTime: null,
			});

			try {
				await planner.save();
			} catch (e) {
				ctx.throw(500, e);
			}
		}

		ctx.state.planner = planner;

		return next();
	} catch (e) {
		ctx.throw(500, e);
	}
};

/*
    GET /api/planner/
*/
export const read = async (ctx) => {
	ctx.body = ctx.state.planner;
};

/*
    PATCH /api/planner/
*/
export const update = async (ctx) => {
	const { _id } = ctx.request.body;

	try {
		const planner = await Planner.findByIdAndUpdate(_id, ctx.request.body, {
			new: true, // 이 값을 설정하면 업데이트된 데이터를 반환합니다.
			//false일떄는 업데이트되기전의 데이터를 반환합니다.
		}).exec();

		if (!planner) {
			ctx.status = 404;
			return;
		}
		ctx.body = planner;
	} catch (e) {
		ctx.throw(500, e);
	}
};
