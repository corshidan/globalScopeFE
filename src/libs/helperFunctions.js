


export const getToday = () => {
    const date = new Date();
	const today = date.toISOString().slice(0, 10);
    return today;
}