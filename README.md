If npx next dev keeps freezing then do the following:

1 - Run CMD:
netstat -ano | findstr :3000
taskkill /PID <PID_Number> /F

2 - Open Chrome dev tools (F12) > Application tab > Service Workers > Select the service worker and "unregister"


TO START APPLICATION : "npx next dev"