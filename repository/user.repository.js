import { User } from '../model/user.model.js';

class UserRepository{

    async get(filter){
        return await User.findOne(filter)
    }

    
    async create(data){
        const user = new User(data);
        await user.save();

        return {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }
    }
}



export default new UserRepository;