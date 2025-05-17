@echo off
REM -------------------------------
REM Git Push Automático con Commit
REM -------------------------------

REM Muestro el estado actual
echo.
echo === Estado del repositorio ===
git status
echo.

REM Pido el mensaje de commit al usuario
SET /P COMMIT_MSG=Introduce el mensaje de commit: 

REM Añado todos los cambios
echo.
echo === Añadiendo cambios ===
git add .

REM Realizo el commit con el mensaje proporcionado
echo.
echo === Creando commit ===
git commit -m "%COMMIT_MSG%"

REM Hago push a la rama principal (main)
echo.
echo === Subiendo al remoto ===
git push

echo.
echo ¡Listo!
pause
