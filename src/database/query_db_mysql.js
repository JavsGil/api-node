const { DBService } = require("./database_service");
const SqlString = require('sqlstring');

class QueryDBService extends DBService {
    /**
     * Metodo para realizar consultas DB
     * @param sql
     * @param obj
     * @returns {Promise<any>}
     */
    async consultaSQL(sql, obj, debug = false){
        return new Promise((resolve, reject) =>{//console.log('this._db', this._db);
            let sql1 = SqlString.format(sql,obj);
            //console.log(sql1)

            if(debug){
                console.log(sql1)
            }
            this._db.query(sql1, (res, msgs)=>{
                if(msgs) reject(new Error(msgs));
                else{
                    resolve(res)
                }
            })
        });
    }
}

module.exports = { QueryDBService };