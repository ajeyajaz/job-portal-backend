import { Skill} from '../model/skill.model.js'
import AppError from '../utils/AppError.js';


class SkillService{

    async getAll(filter = {}){
        return await Skill.find(filter, 'name');
    }

    async get(filter){
        return await Skill.findOne(filter);
    }

    async post(data){
        try{
            return await new Skill(data).save();
        }
        catch(ex){
            if(ex.code === 11000 && ex.keyPattern.name_lc)
                throw new AppError(409, 'Duplicate Skill.', 'DUPLICATE_SKILL');

            throw new AppError();
        }
    }
}


export default new SkillService();