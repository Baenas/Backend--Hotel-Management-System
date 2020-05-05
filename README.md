#  BackEnd HMS



# Auth
| Method | Route    | Description                       |
| ------ | :------ | --------------------------------- |
| Get   | /who  | who am i  |
| POST   | /login  | Log in         |
| POST   | /signup | SignUp |
| POST   | /logout | LogOut |



## USERS 

| Name   | Descripcion |
| ------  | -------------------|
| employee     | can use all the app features |
| admin     | Can manage the config settings  and users  |
| guest_1111     | Can acces a private section  |
```
{
	username: String,
	password: String,
	type: String,
}
```
#  Rooms
### Routes
| Method | Route    | Description                       |
| ------ | :------ | --------------------------------- |
| GET    | /rooms  | All rooms    |
| GET    | /rooms/:id  | One room   |
| POST    | /rooms/  | Add room            |
| PUT    | /rooms/  | Update. Room          |
| DELETE    | /rooms/  | Delete room          |

### Data Rooms

| Name  | Description | Example  | Values  |
| ------  | --------------------------------- |--------- | --------|
| ID     | Id room | 100 | Numero |
| roomName     | Room name| Room 2|   |
| roomType  | Room type|  Doble  |  Single /  Double / Triple / Group  |
| room_Floor   | Floor| P1|  |
| room_Wifi   | Wifi key|  xb12lsmdj  |  |
| room_Phone   | Phone number| 11102|    |
| room_price   | Price| 120|    |





# Guests  

| Metodo | Ruta    | Descripcion                       |
| ------ | :------ | --------------------------------- |
| GET    | /guest  | Show all guest    |
| GET    | /guest/:id  | Show one guest   |
| POST    | /guest/  | Add one guest             |
| PUT    | /guest/  | Update a guest         |
| DELETE    | /guest/  | Delete guest|         

### Data Guest

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

```
{
	guestName: String,
	guestFullName: String,
	type: String,
	guestIdCard:String,
	guestAge: number,
	guestEmail: String,
	guestPhone: number,
	guestCountry: String
	guestcity:String
}
```

# checking   

| Metodo | Ruta    | Descripcion                       |
| ------ | :------ | --------------------------------- |
| POST    | /checking /  | checking             |
| GET    | /checking /:id  | find a checking   |


### DATA checkings

| Propiedad  | Descripcion | Ejemplo  | Valores  |
| ------  | --------------------------------- |--------- | --------|
| ID     | Id | 100 | Numero |
| guestID  |  guest id    |  100  |   |
| roomID  | room id  |    |   |
| nights  | Nights   | 2|   |
| day_From  | From day   |  03/05/2020|   |
| day_To  | To day   |  05/05/2020|   |
| totalDays  | Total days  | 2  |



```
{
	guestID:ObjectId<User>,
	roomId : ObjectId<Room>,
	nights:number,
	day_from:Date,
	day_to:Date,
	
}







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










 





