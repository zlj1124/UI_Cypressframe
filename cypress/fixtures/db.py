'''
@Descripttion: 
@Author: zlj
@Date: 2020-06-09 16:38:17
'''
import pymysql
import json
import argparse

dbinfo={
    "host": "192.168.3.81",
    "user":"root",
    "password":"root",
    "port":3306,
    "charset": "utf8mb4"
}
# db = dev_qiye6

class DbConnect():
    def __init__(self,db_cof,database='dev_qiye6'):
        self.db_cof=db_cof
        self.db=pymysql.connect(
            database=database,
            cursorclass=pymysql.cursors.DictCursor,                     
            **db_cof)
        self.cursor = self.db.cursor()
    def select(self, sql):
        # SQL 查询语句
        # sql = "SELECT * FROM EMPLOYEE \
        #        WHERE INCOME > %s" % (1000)
        self.cursor.execute(sql)
        results = self.cursor.fetchall()
        return results

    def execute(self, sql):
        # SQL 删除、提交、修改语句
        # sql = "DELETE FROM EMPLOYEE WHERE AGE > %s" % (20)
        try:

           # 执行SQL语句
           self.cursor.execute(sql)
        #    self.cursor.executemany()
           # 提交修改
           self.db.commit()
        except:
           # 发生错误时回滚
           self.db.rollback()

    def close(self):
        # 关闭连接
        self.db.close()

def parse_args():
    from argparse import RawTextHelpFormatter
    parser=argparse.ArgumentParser(
        description=(
            'delete or select db'
        ),formatter_class=RawTextHelpFormatter
    )
    parser.add_argument(
        '-s','--select',type=str,default='',
        help='查询数据库'
    )
    parser.add_argument(
        '-d','--delete',type=str,default='',
        help='删除数据'
    )
    args=parser.parse_args()
    return args



if __name__ == '__main__':
    import json
    args =parse_args()
    db = DbConnect(dbinfo, database="dev_qiye6")
    if args.select:

        sql = "select id,vehicleFrameNo from truck_truck where deleted='0' ORDER BY id DESC LIMIT 1;"
        # "select id,vehicleFrameNo from truck_truck where deleted='0' ORDER BY id DESC LIMIT 1;"

        result = db.select(sql)
        db.close()
    # 以json格式输出到控制台
        print(json.dumps(result))
    elif args.delete:
        sql = "DELETE FROM truck_truckhistory ORDER BY id DESC LIMIT 1;"
        result= db.execute(sql)

       
        sql = "delete from truck_truck where vehicleFrameNo='TESTCYPRESS000024';"
        result= db.execute(sql)
        db.close()
        print(json.dumps(result))
        