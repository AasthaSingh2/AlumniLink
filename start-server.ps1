# Set the PATH to include Node.js
$env:PATH += ";C:\Program Files\nodejs\"

# Set execution policy for current session
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force

# Navigate to project directory
Set-Location "C:\Users\aasth\OneDrive\Desktop\aluminilink"

# Start the development server
Write-Host "Starting AlumniLink development server..."
npm run dev
