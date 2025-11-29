$ErrorActionPreference = "Stop"

function Install-Service{
    param (
        [string]$Name,
        [string]$Command,
        [int]$DelaySeconds = 3
    )

    Write-Host "Installing $Name ..." -ForegroundColor Green
    Start-Process powershell -ArgumentList "-NoExit", "-Command", $Command
    Start-Sleep -Seconds $DelaySeconds
}

# Install-Service "plan-service" "cd backend/services/plan-service; python -m venv venv; pip install -r requirements.txt"
# Install-Service "template-service" "cd backend/services/template-service; python -m venv venv; pip install -r requirements.txt"
Install-Service "auth-service" "cd backend/services/auth-service; npm install; npx prisma generate; npx prisma db push; npm run build"
# Install-Service "api-gateway" "cd backend/api-gateway; npm install; npm run build"
# Install-Service "frontend" "cd frontend; npm run dev"

Write-Host "All service started" -ForegroundColor Green