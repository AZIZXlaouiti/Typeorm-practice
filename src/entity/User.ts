import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}

// public async createUser (connection:Connection){
//     await connection.manager.save(this.user)
// }
// public get users() : string {
    
//     return
// }
// const createUser = async(connection:Connection):Promise<User>=>{
//     const user = new User()
//     user.age  = 7 
//     user.firstName = 'bob'
//     user.lastName  = 'Jr'
//     await connection.manager.save(user);
//     return user
//  }
//  const findUser = async ():Promise<User> => {
     
//  }