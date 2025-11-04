export const getHealthInfo = async () => {
  // business logic / diagnostics can go here — e.g., DB ping later
  return {
    uptime: process.uptime(),
    timestamp: Date.now(),
  };
};
