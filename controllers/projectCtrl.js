const projectSchema = require("../models/projectModel")

const projectCtrl = {
    getProjects: async (req, res) => {
        try {
            const projects = await projectSchema.find({})
            return res.send(projects)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    insertProject: async (req, res) => {
        try {
         
            const newProject=new projectSchema(req.body)
            await newProject.save()
            res.json({ msg: "inserted successfully" })
        }
        catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    }
}
module.exports = projectCtrl;