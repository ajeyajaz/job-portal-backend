import skillService from '../service/skill.service.js'



export async function getSkills(req, res) {

    const skills = await skillService.getAll({}, 'name');
    return res.status(201).json({
        success: true,
        data: skills
    })
}


export async function addSkill(req, res) {

    const skill = await skillService.post(req.validatedData);
    return res.status(201).json({
        success: true,
        data: skill
    })
}