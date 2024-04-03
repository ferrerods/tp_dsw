# Propuesta TP DSW

## Grupo
Integrantes: 42597 - Ferrero, Dalila

## Repositorios
frontend app: https://github.com/ferrerods/tp_dsw
backend app: https://github.com/ferrerods/tp_dsw

## Tema
Sistema de gestión de gimnasio

## Descripción
El sistema tiene como objetivo realizar la gestión integral de un gimnasio, tanto de las membresías como la asignación de turnos de cada actividad.

## Modelo
Link DER: https://lucid.app/lucidchart/59e56d27-ba7c-41e7-be60-ed91e226a3b4/edit?viewport_loc=-44%2C21%2C2303%2C1038%2C0_0&invitationId=inv_3c12659c-ff49-4c8b-ba32-8d6f3e4efbfb

## Alcance Funcional
### CRUD simple	
1. CRUD User
2. CRUD Coach
3. CRUD Package (12 clases, 20 clases, libre)
4. CRUD Payment
5. CRUD Class
6. CRUD Appointment
7. CRUD Room
8. CRUD Additional Service

### CRUD dependiente	
1. CRUD Coach {depende de} CRUD User
2. CRUD Payment {depende de} CRUD Package

### CUU/Epic:
1. Reservar una clase
2. Realizar el check-in de una clase
3. Realizar abono de la membresía del gimnasio

### Listados:	
1. Clases del día: filtrado por fecha, profesor, sala
2. Usuarios: filtrado por estado, fecha registro

### Otro:
1. Envío de recordatorio de vencimiento de cuota
