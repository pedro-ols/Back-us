import User from "./User.js";

class UsersRepository {
    constructor(){
       this.users = []
    }

    getAllUsers() {
        return this.users;
    }

    addUser(name, email, password){
        const newUser = new User(name, email, password);

        this.users.push(newUser);

        return newUser;
    }

    getUserById(id) {
        const u = this.users.find(u => u.id == id);
        return u;
    }
    updateUser(id, name, email, password) {
        const user = this.getUserById(id)

        if(!user){
            return null;
        }

        user.name = name; 
        user.email = email; 
        user.password = password; 

        return user;
    };

    deleteUser(id){
        const user = this.getUserById(id);

        if(!user){
            return null;
        };

        this.users = this.users.filter((u) => u.id != id);

        return user;
    }
};

export default UsersRepository;