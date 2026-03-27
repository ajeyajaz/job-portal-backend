import { Company } from '../model/company.model.js'

class CompanyService{


    async get(filter){
        return await Company.findOne(filter);
    }

    async create(data){
        const company = new Company(data);
        await company.save();

        return company;
    }


    
}



export default new CompanyService();