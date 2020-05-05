#  BackEnd HMS



# Route Login
| Method | Route    | Description                       |
| ------ | :------ | --------------------------------- |
| GET    | /login  | Log in form    |
| POST   | /login  | Log in         |
| GET    | /signUp | Create user form ???????|
| POST   | /signUp | SignUp. ?????

## USERS 

| Name   | Descripcion |
| ------  | -------------------|
| employee     | can use all the app features |
| admin     | Can manage the config settings  and users  |
| guest_1111     | Can acces a private section  |



#  Rooms
### Routes
| Method | Route    | Description                       |
| ------ | :------ | --------------------------------- |
| GET    | /rooms  | All rooms    |
| GET    | /rooms/:id  | One room   |
| POST    | /rooms/  | Add room            |
| PUT    | /rooms/  | Update. Room          |
| DELETE    | /rooms/  | Delete room          |

### Data

| Name  | Description | Example  | Values  |
| ------  | --------------------------------- |--------- | --------|
| ID     | Id room| 100 | Numero |
| roomName     | Room name| Room 2|   |
| roomType  | Room type|  Doble  |  Individual /  Doble / Triple / Cuadruple  |
| room_Floor   | Floor| P1|  |
| room_Wifi   | Wifi key|  xb12lsmdj  |  |
| room_Phone   | Phone number| 11102|    |




# Guests  

| Metodo | Ruta    | Descripcion                       |
| ------ | :------ | --------------------------------- |
| GET    | /guest  | Show all guest    |
| GET    | /guest/:id  | Show one guest   |
| POST    | /guest/  | Add one guest             |
| PUT    | /guest/  | Update a guest         |
| DELETE    | /guest/  | Delete guest|         

### Data

| Propiedad  | Descripcion | Ejemplo  | Valores  |
| ------  | --------------------------------- |--------- | --------|
| ID     | Guest id | 100 | Numero |
| guestName     | Name |  Peter Robinson|   |
| guestFullName  | Full. name|  Peter  Robinson Gomez Rogriguez  | |
|guestIdCard   | Passport | 111111111X|  |
|guestAge   | Age | 22|  |
|guestEmail   | Email |abc@cba.bac|  |
|guestPhone   | Guest Phone | 93333333333|  |
|guestCountry   | Country  | Spain|  |
|guestCity    | City | Barcelona|  |


# checking   

| Metodo | Ruta    | Descripcion                       |
| ------ | :------ | --------------------------------- |
| GET    | /checking   | Form and search bar  |
| POST    | /checking /  | checking             |
| GET    | /checking /:id  | find a checking   |


### DATA

| Propiedad  | Descripcion | Ejemplo  | Valores  |
| ------  | --------------------------------- |--------- | --------|
| ID     | Id | 100 | Numero |
| internalID  | Internal id  |  perogoro_2020_0  |  |
| guestName  | Guest name |  Peter  Robinson Gomez Rogriguez|   |
| guestID  |  guest ID    |  100  |   |
| roomType  | Room number   |  Triple  |   |
| nights  | Nights   | 2|   |
| priceNight  | night price| 120€   | days X nights + Extras   |
| day_From  | From day   |  03/05/2020|   |
| day_To  | To day   |  05/05/2020|   |
| totalDays  | Total days  | 2  |
| preTotalPrice  | Total price   |  240€ | priceNight X totalDays    |
| roomAssign  | Room   | Room 2 |
| floorAssign  | Floor room  | Floor 1 |
| Extras  | Extra itema  | [ , , , ] |

### Extra list
| Extra   | Descripcion | Precio   | Cantidad  | Tiempo |
| ------  | -------------------|-------------- |--------- | --------|
| coke     | Drink  | 2€  | 3 | 04/05/2020|
| fanta     | Drink  | 10€  | 1 | 05/05/2020|
| pizza     | food  | 35€  | 1 | 05/05/2020|
 | Lamp is broken    | Others  | 120€  | 1 | 06/05/2020|




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










 





