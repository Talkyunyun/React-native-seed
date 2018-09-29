/**
 * sqlite基类模型
 *
 * @author  : Gene Yang <talkyunyun@126.com>
 * @date    : 2017/11/30
 * @version : v1.0.0
 * @link    : https://github.com/Talkyunyun
 */

import _ from "lodash";
import SQLite from 'react-native-sqlite-storage';
import { ParamConfig } from '../../config/index';

SQLite.DEBUG(ParamConfig.sqlite.debug);
let DB;

class Model {
    /** 初始化操作 */
    constructor() {
        this.privateCreateTable();
    }

    /** 私有方法-创建表 */
    privateCreateTable() {
        if (!DB) this.privateOpenDb();

        // TODO 检测数据库版本更新,实现思路，新建文件，把每个版本的sql都定义在不同版本块中，依次执行一遍即可

        let tableSql = this.initTable();
        DB.transaction((tx) => {
            tx.executeSql(tableSql, [], () => {
                console.log('create table success');
            }, (err) => {
                console.log('create table fail', err);
            });
        }, (err) => {
            console.log('transaction fail.', err);
        }, () => {
            console.log('transaction success');
        });
    }

    /** 私有方法-打开数据库 */
    privateOpenDb() {
        DB = SQLite.openDatabase(
            ParamConfig.sqlite.dbName,
            ParamConfig.sqlite.version,
            ParamConfig.sqlite.displayName,
            ParamConfig.sqlite.size,
            () => {
                console.info('数据库打开成功');
            },
            (err) => {
                console.error('数据库打开失败', err);
            }
        );

        return DB;
    }

    /**
     * 获取原生操作DB对象
     * @returns {*}
     */
    getDB() {
        if (!DB) this.privateOpenDb();

        return DB;
    }

    /**
     * 获取总数
     * @param where
     * @param field
     * @returns {Promise<any>}
     */
    count(where, field) {
        let self = this;
        return new Promise((resolve, reject) => {
            try {
                let sql = 'select count(`'+ field +'`) count from ' + this.tableName() + ' WHERE ';
                if (Object.prototype.toString.call(where) !== '[object Undefined]') {
                    sql += self.privateGetWhere(where);
                }
                self.querySql(sql).then((data) => {
                    if (data == false) {
                        resolve(0);
                    } else {
                        resolve(data[0].count);
                    }
                });
            } catch (err) {
                console.warn('查询记录失败', err);
                resolve(false);
            }
        });
    }

    /**
     * 获取一条记录
     * @param where
     * @param fields
     * @returns {Promise<any>}
     */
    findOne(where, fields) {
        let self = this;
        return new Promise((resolve, reject) => {
            try {
                let sql = 'select '+ self.privateGetFields(fields) +' from ' + this.tableName() + ' WHERE ';
                if (Object.prototype.toString.call(where) !== '[object Undefined]') {
                    sql += self.privateGetWhere(where);
                }
                sql += ' LIMIT 1';
                log.i("findOne sql>>>>>>", sql);
                self.querySql(sql).then((data) => {
                    if (data == false) {
                        resolve(false);
                    } else {
                        resolve(data[0]);
                    }
                });
            } catch (err) {
                console.warn('查询记录失败', err);
                resolve(false);
            }
        });
    }

    /**
     * 查询多条记录
     * @param where 查询条件 //findAll('1=1') 抓取全部
     * @param fields 获取字段值
     * @returns {Promise<any>}
     */
    findAll(where, fields) {
        let self = this;
        return new Promise((resolve, reject) => {
            let sql = 'SELECT '+ self.privateGetFields(fields) +' FROM ' + self.tableName();
            if (Object.prototype.toString.call(where) !== '[object Undefined]') {
                sql += ' WHERE ' + self.privateGetFields(where);
            }
            self.querySql(sql).then((data) => {
                resolve(data);
            });
        });
    }

    /**
     * 插入记录
     * @param data object
     * @returns {Promise<any>}
     */
    insert(data) {
        if (!DB) this.privateOpenDb();

        let self = this;
        return new Promise((resolve, reject) => {
            try {
                let columns = [], values = [];
                _.forEach(_.keys(data), field => {
                    columns.push('`'+ field +'`');
                    values.push(data[field]);
                });

                let sql = 'INSERT INTO `'+ self.tableName() +'`('+ columns.join(',') +') ' +
                    'VALUES('+ _.join( _.slice(columns).fill('?'), ',') +')';
                DB.transaction((tx) => {
                    tx.executeSql(sql, values, () => {
                        resolve(true);
                    }, (err) => {
                        console.log('插入数据失败', err);
                    });
                }, (err) => {
                    throw new Error(err);
                });
            } catch (e) {
                console.warn('插入记录失败', e);
                reject(e);
            }
        });
    }

    /**
     * 插入记录，支持记录是否存在判断
     * 第一个字段必须是带有唯一索引的字段，否则无效
     * @param data
     * @param isUpdate false: 存在不更新  true: 存在更新
     */
    insertExist(data, isUpdate) {
        if (!DB) this.privateOpenDb();

        let self = this;
        return new Promise((resolve, reject) => {
            try {
                let columns = [], values = [];
                _.forEach(_.keys(data), field => {
                    columns.push('`'+ field +'`');
                    values.push(data[field]);
                });

                let sql = 'INSERT ';
                if (isUpdate) {
                    sql += ' OR REPLACE ';
                } else {
                    sql += ' OR IGNORE ';
                }
                sql += ' INTO `'+ self.tableName() +'` (' + columns.join(',') + ') ' +
                    'VALUES('+ _.join( _.slice(columns).fill('?'), ',') +')';
                DB.transaction((tx) => {
                    tx.executeSql(sql, values, () => {
                        resolve(true);
                    }, (err) => {
                        console.warn('插入数据失败', err);
                    });
                }, (err) => {
                    throw new Error(err);
                });
            } catch (e) {
                console.warn('插入记录失败', e);
                reject(e);
            }
        });
    }


    /**
     * 批量插入记录
     * @param data array
     * @returns {Promise<any>}
     */
    insertBatch(data) {
        if (!DB) this.privateOpenDb();

        let self = this;
        return new Promise((resolve, reject) => {
            try {
                let sqlStrArr = data.map((item) => {
                    let columns = Object.keys(item);
                    let sql = 'INSERT INTO ' + self.tableName() + ' (`' + columns.join('`,`') + '`) VALUES(';
                    _.forEach(_.keys(item), field => {
                        if (Object.prototype.toString.call(item[field]) === '[object Number]') {
                            sql += item[field] + ',';
                        } else {
                            sql += "'" + item[field] +"',";
                        }
                    });
                    sql = sql.substr(0, sql.length - 1);
                    sql += ')';

                    return sql;
                });
                DB.sqlBatch(sqlStrArr, () => {
                    resolve(true);
                }, (err) => {
                    console.warn('批量插入记录失败', err);
                    reject(err);
                });
            } catch (e) {
                console.warn('批量插入记录失败', e);
                resolve(e);
            }
        });
    }

    /**
     * 批量添加和更新，存在更新，不存在添加
     * 第一个字段必须是带有唯一索引的字段，否则无效
     * @param data
     * @param isUpdate
     * @returns {Promise<any>}
     */
    insertBatchExist(data, isUpdate) {
        if (!DB) this.privateOpenDb();

        let self = this;
        return new Promise((resolve, reject) => {
            try {
                let sqlStrArr = data.map((item) => {
                    let columns = Object.keys(item);

                    let sql = 'INSERT ';
                    if (isUpdate) {
                        sql += ' OR REPLACE ';
                    } else {
                        sql += ' OR IGNORE ';
                    }
                    sql += ' INTO ' + self.tableName() + ' (`' + columns.join('`,`') + '`) VALUES(';
                    _.forEach(_.keys(item), field => {
                        if (Object.prototype.toString.call(item[field]) === '[object Number]') {
                            sql += item[field] + ',';
                        } else {
                            sql += "'" + item[field] +"',";
                        }
                    });
                    sql = sql.substr(0, sql.length - 1);
                    sql += ')';

                    return sql;
                });

                DB.sqlBatch(sqlStrArr, () => {
                    resolve(true);
                }, (err) => {
                    console.warn('批量插入记录失败', err);
                    reject(err);
                });
            } catch (e) {
                console.warn('批量插入记录失败', e);
                resolve(e);
            }
        });
    }


    /**
     * 删除记录
     * @param where
     * @returns {Promise<any>}
     */
    delete(where) {
        let self = this;
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM `' + self.tableName() + '`';
            if (typeof where !== 'undefined') {
                sql += ' WHERE ' + self.privateGetWhere(where);
            }

            self.querySql(sql).then((data) => {
                resolve(data);
            });
        });
    }

    /**
     * 操作操作
     * @param where
     * @param data
     * @returns {Promise<any>}
     */
    update(where, data) {
        let self = this;
        return new Promise((resolve, reject) => {
            try {
                let fieldAndValue = self.privateGetFieldAndValue(data);
                if (fieldAndValue === false) {
                    throw new Error('非法的更新数据');
                }

                let sql = 'UPDATE `' + self.tableName() + '` SET ' + fieldAndValue;
                if (typeof where !== 'undefined') {
                    sql += ' WHERE ' + self.privateGetWhere(where);
                }

                self.querySql(sql).then(() => {
                    resolve(true);
                }).catch((err) => {
                    reject(err);
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    /**
     * 发送查询sql
     * @param sql
     * @returns {Promise<any>}
     */
    querySql(sql) {
        if (!DB) this.privateOpenDb();

        return new Promise((resolve, reject) => {
            DB.transaction((tx) => {
                tx.executeSql(sql, [], (tx, results) => {
                    let data = [];
                    for(let i = 0, len = results.rows.length; i < len; i++) {
                        data.push(results.rows.item(i));
                    }
                    resolve(data);
                });
            }, (err) => {
                console.warn('查询记录失败', err);
                reject(err);
            });
        });
    }

    /**
     * 删除表
     */
    dropTable() {
        this.querySql('DROP TABLE ' + this.tableName());
    }

    /**
     * 私有方法-获取字段=值的字符串
     * @param data
     * @returns {*}
     */
    privateGetFieldAndValue(data) {
        let type = Object.prototype.toString.call(data);
        if (type !== '[object Object]') {
            return false;
        }

        let result = '';
        _.forEach(_.keys(data), field => {
            if (Object.prototype.toString.call(data[field]) === '[object Number]') {
                result += ',`' + field + '`=' + data[field];
            } else {
                result += ',`' + field + '`="' + data[field] + '"';
            }
        });

        return result.substr(1);
    }

    /**
     * 私有方法-获取查询where条件
     * @param where
     * @returns {string}
     */
    privateGetWhere(where) {
        if (Object.prototype.toString.call(where) === '[object String]') {
            return where;
        }

        let result = '';
        _.forEach(_.keys(where), field => {
            if (Object.prototype.toString.call(where[field]) === '[object Number]') {
                result += ' AND `'+ field +'`=' + where[field];
            } else {
                result += ' AND `'+ field +"`='"+ where[field] +"'";
            }
        });

        return result.substr(4);
    }

    /**
     * 私有方法-组装查询字段字符串
     * @param fields
     * @returns {string}
     */
    privateGetFields(fields) {
        if (fields === '*') { return fields; }

        let resFields = '';
        try {
            if (Object.prototype.toString.call(fields) === '[object String]') {
                let fieldsArr = fields.split(',');
                _.forEach(_.keys(fieldsArr), field => {
                    resFields += ', `'+ fieldsArr[field] +'`';
                });

                resFields = resFields.substr(1);
            } else {
                _.forEach(_.keys(fields), field => {
                    resFields += ', `'+ fields[field] +'`';
                });

                resFields = resFields.substr(1);
            }
        } catch (e) {
            console.log('处理查询字段错误', e);
        }

        return resFields.length > 0 ? resFields : '*';
    }
}

exports.Model = Model;
