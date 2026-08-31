@echo off
echo ======================================================
echo Deploying Portfolio to Netlify...
echo ======================================================
echo.

npx netlify-cli deploy --prod --dir=dist

echo.
echo ======================================================
echo Netlify Deployment Complete!
echo ======================================================
pause
