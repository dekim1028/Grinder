import client from './client';

export const updateStudyTime = (studyingInfo) =>
	client.patch(`/api/study/`, studyingInfo);
