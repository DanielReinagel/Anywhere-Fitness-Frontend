Roles

"role_id": 1 = "client"
"role_id": 2 = "instructor"

Endpoints

[GET] https://anywherefitnessbuild.herokuapp.com/api/users

returns array of user objects on the db
[
{
"user_id": 1,
"username": "Mason",
"password": "$2a$08$W/im5FlvQPQr7f.4ykM01eyGXGXwZGYBa9VvYTTOenlSHWPnoCEo2",
"role_id": 2
}
]

[POST] https://anywherefitnessbuild.herokuapp.com/api/users/register

returns new user object
{
"user_id": 3,
"username": "Allison",
"password": "$2a$08$wNp1GSzBkvnMbWl7Qynd0OwxWpnf9p1Geb4qjOWJ6b6T7crjQleZe",
"role_id": 1
}

REQUIRES username, password and role_id

[POST] https://anywherefitnessbuild.herokuapp.com/api/users/login

returns Welcome back message with users name and custom token
{
"message": "Welcome back Allison!",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFsbGlzb24iLCJpYXQiOjE2MzQ2NTc3MjAsImV4cCI6MTYzNDc0NDEyMH0.MVzImHV78JjTVUIix5IrV05dZURqJpiBGdl9BcHG4sE"
}

REQUIRES username and password ONLY

[GET] https://anywherefitnessbuild.herokuapp.com/api/users/${user_id}/classes

return User_id, username, and className
[
{
"user_id": 1,
"username": "bob",
"class_name": "Yoga2.0"
}
]

[GET] https://anywherefitnessbuild.herokuapp.com/api/classes

returns array of all the classes in the system
[
{
"class_id": 1,
"class_name": "Yoga2.0",
"start_time": "9:00",
"duration": "1hr",
"intensity_level": "4",
"location": "Chattanooga",
"class_size": 8,
"max_class_size": 15
}
]

[GET] https://anywherefitnessbuild.herokuapp.com/api/classes/${class_id}

returns the users in the class
[
{
"register_id": 1,
"username": "sue"
},
{
"register_id": 3,
"username": "Allison"
},
{
"register_id": 5,
"username": "Sonya"
},
{
"register_id": 6,
"username": "Xavier"
}
]

[POST] https://anywherefitnessbuild.herokuapp.com/api/classes

returns new class object
{
"class_id": 1,
"class_name": "Yoga2.0",
"start_time": "9:00",
"duration": "1hr",
"intensity_level": "4",
"location": "Chattanooga",
"class_size": 8,
"max_class_size": 15
}

REQUIRES all the fields found above

[POST] https://anywherefitnessbuild.herokuapp.com/api/classes/register

returns class_id and user_id
[
{
"class_id": 2,
"user_id": 5
}
]

[PUT] https://anywherefitnessbuild.herokuapp.com/api/classes/${class_id}

returns updated class object
{
"class_id": 1,
"class_name": "BootyBurn2.2",
"start_time": "10:00",
"duration": "1.5hr",
"intensity_level": "6",
"location": "Japan",
"max_class_size": 12,
"instructor_id": 1
}

REQUIRES all the fields above

[DELETE] https://anywherefitnessbuild.herokuapp.com/api/classes/${class_id}

returns message "Class deleted"

[DELETE] https://anywherefitnessbuild.herokuapp.com/api/classes/user/${user_id}

returns message "User deleted from class"
