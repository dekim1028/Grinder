import CheckList from '../../models/checkList';

export const getChecklistById = async (ctx, next) => {
	const { id } = ctx.params;

	try {
		let checklist = await CheckList.findByObjectId(id);

		//체크리스트가 존재하지 않을 때
		if (!checklist) {
			checklist = new CheckList({
				plannerId: id,
				list: [],
			});

			try {
				await checklist.save();
			} catch (e) {
				ctx.throw(500, e);
			}
		}

		ctx.state.checklist = checklist;

		return next();
	} catch (e) {
		ctx.throw(500, e);
	}
};

/*
    GET /api/checklist/
*/
export const read = async (ctx) => {
	ctx.body = ctx.state.checklist;
};

/*
    POST /api/checklist/:id
*/
export const addChecklistItem = async (ctx) => {
	const { id } = ctx.params;

	try {
		const SubjectCategory = await CheckList.findOneAndUpdate(
			{ _id: id },
			{
				$push: {
					list: ctx.request.body,
				},
			},
			{ new: true },
		);

		if (!SubjectCategory) {
			ctx.status = 404;
			return;
		}
		ctx.body = SubjectCategory;
	} catch (e) {
		ctx.throw(500, e);
	}
};

/*
    PATCH /api/checklist/:id
*/
export const updateChecklistItem = async (ctx) => {
	const { id } = ctx.params;
	const item = ctx.request.body;

	const {
		subjectCategoryId,
		color,
		subject,
		content,
		startTime,
		endTime,
	} = item;

	try {
		const checklist = await CheckList.findByIdAndUpdate(
			id,
			{
				$set: {
					'list.$[w].subjectCategoryId': subjectCategoryId,
					'list.$[w].color': color,
					'list.$[w].subject': subject,
					'list.$[w].content': content,
					'list.$[w].startTime': startTime,
					'list.$[w].endTime': endTime,
				},
			},
			{
				arrayFilters: [
					{
						'w._id': item._id,
					},
				],
				new: true,
			},
		).exec();

		if (!checklist) {
			ctx.status = 404;
			return;
		}
		ctx.body = checklist;
	} catch (e) {
		ctx.throw(500, e);
	}
};

/*
    DELETE /api/checklist/:id
*/
export const deleteChecklistItem = async (ctx) => {
	const { id, itemId } = ctx.params;

	try {
		const checklist = await CheckList.findOneAndUpdate(
			{ _id: id },
			{
				$pull: {
					list: { _id: itemId },
				},
			},
			{ new: true },
		);

		if (!checklist) {
			ctx.status = 404;
			return;
		}
		ctx.body = checklist;
	} catch (e) {
		ctx.throw(500, e);
	}
};
