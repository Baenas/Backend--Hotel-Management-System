# Documentacion BackEnd HMS



# Rutas Login
| Metodo | Ruta    | Descripcion                       |
| ------ | :------ | --------------------------------- |
| GET    | /login  | Formulario De inicio de sesion    |
| POST   | /login  | Procesar Inicio de sesion         |
| GET    | /signUp | Formulario de creacion de usuario |
| POST   | /signUp | Procesar alta de ususario         |

#  Habitaciones
### Rutas
| Metodo | Ruta    | Descripcion                       |
| ------ | :------ | --------------------------------- |
| GET    | /rooms  | Muestra todas las habitaciones    |
| GET    | /rooms/:id  | Muestra solo una habitacion   |
| POST    | /rooms/  | Añade una habitacion            |
| PUT    | /rooms/  | Actualiza una habitacion         |
| DELETE    | /rooms/  | Elimina una habitacion         |

### Propiedades

| Propiedad  | Descripcion | Ejemplo  | Valores  |
| ------  | --------------------------------- |--------- | --------|
| ID     | Identificador de la habityacion| 100 | Numero |
| roomName     | Nombre de la habitacion| Room 2|   |
| roomType  | Tipo  de la habitacion|  Doble  |  Individual /  Doble / Triple / Cuadruple  |
| room_Floor   | Planta donde esta situada| P1|  |
| room_Wifi   | Clave Wifi Habitacion|  xb12lsmdj  |  |
| room_Phone   | Numero de telefono de la habication| 11102|    |




# Huespedes  

| Metodo | Ruta    | Descripcion                       |
| ------ | :------ | --------------------------------- |
| GET    | /rooms  | Muestra todos los huespedes    |
| GET    | /rooms/:id  | Muestra solo un huesped   |
| POST    | /rooms/  | Añade un nuevo huesped            |
| PUT    | /rooms/  | Actualiza un huesped         |
| DELETE    | /rooms/  | Elimina un huesped         

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



