const { QueryDBService } = require("./../database/query_db_mysql");
const query = new QueryDBService();

class TaskModel {
    static async ListTask(){
        const fmt = `SELECT * FROM tareas`;
        return await query.consultaSQL(fmt, {}).catch(err => {
            console.error(err);
        })
    }

    static async NewTask(obj) {
        const fmt = `INSERT INTO tareas SET ?`;
        return await query.consultaSQL(fmt, obj).catch(err => {
            console.error(err);
        })
    }

    static async UpdateTask(obj, id)  {
        const fmt = `UPDATE tareas SET ? WHERE id=${id}`;
        return await query.consultaSQL(fmt, obj).catch(err => {
            console.error(err);
        })
    }
}

module.exports = { TaskModel }