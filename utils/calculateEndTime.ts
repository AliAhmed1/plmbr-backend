const calculateEndTime = (startTime: string, taskTimes: number[]): string => {
    const start = new Date(`1970-01-01T${startTime}Z`);
    const totalTaskTime = taskTimes.reduce((acc, time) => acc + time, 0);

    // Add task times to start time
    start.setSeconds(start.getSeconds() + totalTaskTime);

    // Format end time in HH:MM:SS
    const endTime = start.toISOString().substring(11, 19); // Extract HH:MM:SS
    return endTime;
};

export default calculateEndTime;