import * as express from "express";
import {Connection, createConnection} from "typeorm";
import {User} from "./entity/User";
// import "reflect-metadata";



const app = express();
const start = async () =>{
 await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "demo",
    synchronize: true,
    entities: [
        "src/entity/**/*.ts"
     ],
    migrations: [
        "src/migration/**/*.ts"
     ],
}).then(
  async connection => {
    app.listen(3001, () => {
        console.log("SERVER RUNNING ON PORT 3001..");
      });
      console.log(await createUser(connection))

  }
)
}
const createUser = async(connection:Connection):Promise<User>=>{
   const user = new User()
   user.age  = 7 
   user.firstName = 'bob'
   user.lastName  = 'Jr'
   await connection.manager.save(user);
   return user
}
start().catch(error=> console.log(error))
// createConnection().then(async connection => {
    // Promise<void>
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

