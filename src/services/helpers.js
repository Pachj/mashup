export const formatTimeStamp = (timeDate) => {
  return new Date(timeDate).toLocaleTimeString('de-CH', {
    hour: '2-digit',
    minute: '2-digit',
  });
};
