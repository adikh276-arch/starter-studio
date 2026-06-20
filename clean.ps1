$featuresDir = "src\features"

$filesToDelete = @("main.tsx", "main.ts", "App.tsx", "App.ts", "App.css", "index.css", "vite-env.d.ts", "eslint.config.js", "tsconfig.json")

Write-Host "Cleaning irrelevant files..."

Get-ChildItem -Path $featuresDir -Recurse | Where-Object {
    (!$_.PSIsContainer -and ($filesToDelete -contains $_.Name)) -or 
    ($_.PSIsContainer -and ($_.Name -eq "test" -or $_.Name -eq "__tests__"))
} | ForEach-Object {
    Write-Host "Deleting $($_.FullName)"
    Remove-Item -Path $_.FullName -Recurse -Force
}

Write-Host "Cleanup complete."
