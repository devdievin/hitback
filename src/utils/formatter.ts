export const formatResponseDuration = (duration: number): string => {
  const millisecond = 1000;
  const milliseconds_limit = 2000;

  if (duration > milliseconds_limit) {
    return `${(duration / millisecond).toFixed(2)}s`;
  }

  return `${duration.toFixed(0)}ms`;
};
