/**
 * 用户表
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */
import { Model } from './Model';

class UserModel extends Model {
    static tableName = 't_user';

    constructor() {
        super();
        this.initTable();
    }

    tableName() {
        return UserModel.tableName;
    }

    // 初始化表
    initTable() {
        return 'CREATE TABLE IF NOT EXISTS '+ this.tableName() +' ( \
                    `id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
                    `uid` INTEGER NOT NULL ,\
                    `enName` VARCHAR(30) UNIQUE,\
                    `cnName` VARCHAR(30) DEFAULT "",\
                    `avatar` VARCHAR(255) DEFAULT "",\
                    `email` VARCHAR(100) NOT NULL DEFAULT "",\
                    `job` VARCHAR(60) DEFAULT "",\
                    `birthday` VARCHAR(80) DEFAULT "",\
                    `sex` INTEGER DEFAULT 0\
             )';
    }
}

exports.UserModel = new UserModel;
