$ErrorActionPreference = "Stop"

function Start-Service{
    param (
        [string]$Name,
        [string]$Command,
        [int]$DelaySeconds = 3
    )

    Write-Host "Starting $Name ..." -ForegroundColor Green
    Start-Process powershell -ArgumentList "-NoExit", "-Command", $Command
    Start-Sleep -Seconds $DelaySeconds
}

Start-Service "plan-service" "cd backend/services/plan-service; .\venv\Scripts\python.exe -m uvicorn src.main:app --host 0.0.0.0 --port 3003 --reload"
Start-Service "template-service" "cd backend/services/template-service; .\venv\Scripts\python.exe -m uvicorn src.main:app --host 0.0.0.0 --port 3002 --reload"

Write-Host "All service started" -ForegroundColor Green