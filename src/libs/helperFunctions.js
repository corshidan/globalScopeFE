const oneDay = 86400000;
const formatDate = (date) => {
	return date.toISOString().slice(0, 10);
};
export const getToday = () => {
	const today = new Date();
	return formatDate(today);
};
export const getPreviousDate = (daysAgo = 1) => {
	const today = Date.now();
	return formatDate(new Date(today - oneDay * daysAgo));
};
