#  BackEnd HMS



# Route Login
| Method | Route    | Description                       |
| ------ | :------ | --------------------------------- |
| GET    | /login  | Log in form    |
| POST   | /login  | Log in         |
| GET    | /signUp | Create user form |
| POST   | /signUp | SignUp
#  Habitaciones
### Rutas
| Metodo | Ruta    | Description                       |
| ------ | :------ | --------------------------------- |
| GET    | /rooms  | All rooms    |
| GET    | /rooms/:id  | One room   |
| POST    | /rooms/  | Add room            |
| PUT    | /rooms/  | Update. Room          |
| DELETE    | /rooms/  | Delete room          |

### Propiedades

| Name  | Description | Example  | Values  |
| ------  | --------------------------------- |--------- | --------|
| ID     | Id room| 100 | Numero |
| roomName     | Room name| Room 2|   |
| roomType  | Room type|  Doble  |  Individual /  Doble / Triple / Cuadruple  |
| room_Floor   | Floor| P1|  |
| room_Wifi   | Wifi key|  xb12lsmdj  |  |
| room_Phone   | Phone number| 11102|    |




# Huespedes  

| Metodo | Ruta    | Descripcion                       |
| ------ | :------ | --------------------------------- |
| GET    | /guest  | Muestra todos los huespedes    |
| GET    | /guest/:id  | Muestra solo un huesped   |
| POST    | /guest/  | Añade un nuevo huesped            |
| PUT    | /guest/  | Actualiza un huesped         |
| DELETE    | /guest/  | Elimina un huesped         

### Propiedades

| Propiedad  | Descripcion | Ejemplo  | Valores  |
| ------  | --------------------------------- |--------- | --------|
| ID     | Identificador del huesped | 100 | Numero |
| guestName     | Nombre del huesped |  Peter Robinson|   |
| guestFullName  | Nombre completo  del huesped|  Peter  Robinson Gomez Rogriguez  | |
|guestIdCard   | Pasaporte o dni | 111111111X|  |
|guestAge   | Edad | 22|  |
|guestEmail   | Email del huesped |abc@cba.bac|  |
|guestPhone   | Telefono huesped | 93333333333|  |
|guestCountry   | Pais de residencia  | Spain|  |
|guestCity    | Ciudad  de residencia | Barcelona|  |


# checking   

| Metodo | Ruta    | Descripcion                       |
| ------ | :------ | --------------------------------- |
| GET    | /checking   | Muestra formulario y barra de busqueda  |
| POST    | /checking /  | Procesa el nuevo checking             |
| GET    | /checking /:id  | Busca un checking  antiguo   |


### Propiedades

| Propiedad  | Descripcion | Ejemplo  | Valores  |
| ------  | --------------------------------- |--------- | --------|
| ID     | Identificador del tramite | 100 | Numero |
| internalID  | Identificador interno  |  perogoro_2020_0  |  |
| guestName  | Nombre del huesped vinculado |  Peter  Robinson Gomez Rogriguez|   |
| guestID  | ID del huesped   |  100  |   |
| roomType  | Tipo de habitacion   |  Triple  |   |
| nights  | Numero de noches   | 2|   |
| priceNight  | Precio por noche| 120€   | days X nights + Extras   |
| day_From  | Dia desde   |  03/05/2020|   |
| day_To  | Dia hasta   |  05/05/2020|   |
| totalDays  | Dias totales  | 2  |
| preTotalPrice  | Precio total   |  240€ | priceNight X totalDays    |
| roomAssign  | Habitacion para el huesped  | Room 2 |
| floorAssign  | PLanta  para el huesped  | Floor 1 |
| Extras  | VER  LISTA DE EXTRAS  | [ , , , ] |Array de extras de este contrato|

### Lista de extras
| Extra   | Descripcion | Precio   | Cantidad  | Tiempo |
| ------  | -------------------|-------------- |--------- | --------|
| Cocacola     | Refresco  | 2€  | 3 | 04/05/2020|
| Champan     | Bebida alcoholica  | 10€  | 1 | 05/05/2020|
| Masaje     | Servicio  | 35€  | 1 | 05/05/2020|
| Se ha cargado la lampara     | Desperfectos  | 120€  | 1 | 06/05/2020|

## USERS 

| Name   | Descripcion |
| ------  | -------------------|
| employee     | can use all the app features |
| admin     | Can manage the config settings  and users  |
| guest_1111     | Can acces a private section  |





## MVP 
| Name   |
| ------  |
|   Create, Update,  Delete :  GUESTS |
|   Create, Update,  Delete :  ROOMS |
|   Checking |
|   Checkout |
|   Find older chechkings |


## Goals
| Name   |
| ------  |
|   Make a private app for  the guests|
|   The guest can request any hotel service by the private app|
| |










 





