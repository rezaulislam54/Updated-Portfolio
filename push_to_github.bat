@echo off
echo ======================================================
echo Pushing Portfolio Project to GitHub...
echo ======================================================
echo.

set GIT_PATH="C:\Users\progr\AppData\Local\Programs\Git\cmd\git.exe"

%GIT_PATH% remote set-url origin https://github.com/rezaulislam54/Updated-Portfolio.git
%GIT_PATH% branch -M main
%GIT_PATH% add .
%GIT_PATH% commit -m "feat: modern MERN stack portfolio website"
%GIT_PATH% push -u origin main

echo.
echo ======================================================
echo Process Finished!
echo ======================================================
pause
