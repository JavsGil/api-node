const { TaskModel} = require("./../models/task.model");

class TaskController {

    static async ListTask(req, res, next) {
       let obj = await TaskModel.ListTask();
        res.send(obj);
    }

    static async PostTask(req,res,next){
        // { nombre, prioridad, fecha_vencimiento }
       
        let obj  =  await TaskModel.NewTask(req.body);
        res.send(obj);
    }

    static async UpdateTask(req, res, next){
        let { id } = req.params; 
        let obj = await TaskModel.UpdateTask(req.body, id);
        res.send(obj);
    }
    
}

module.exports = { TaskController }