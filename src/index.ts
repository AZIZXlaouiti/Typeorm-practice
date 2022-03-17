import * as express from "express";
import {createConnection} from "typeorm";
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
      const repo = connection.getRepository(User)
      const user  = repo.create({
        age: 20,
        firstName: 'bob',
        lastName: 'Jr',
      })
      await repo.save(user)
      const users = await repo.find({})
      console.log(users)
  }
)
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

