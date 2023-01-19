# outdoor-rent-server

## Scripts

npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,image:string,phone:integer

npx sequelize-cli model:generate --name Item --attributes name:string,type:string,price:integer,image:string,stock:integer,UserId:integer

npx sequelize-cli model:generate --name Gear --attributes name:string,description:string,price:integer,image:string,CategoryId:integer

npx sequelize-cli model:generate --name Category --attributes name:string

npx sequelize-cli model:generate --name Customer --attributes name:string,email:string,address:string,image:string,phone:integer

npx sequelize-cli model:generate --name Transaction --attributes CustomerId:integer,GearId:integer,dateStart:date,dateEnd:date
