@echo off
start cmd /k call node --env-file=gateway\.env.local gateway\gateway.js
start cmd /k npm start --prefix client\.