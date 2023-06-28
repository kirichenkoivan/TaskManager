# coding: utf-8
import eel
import sys

import pymysql.cursors
from config import host, user, password, db_name

try:
    connection = pymysql.connect(
    host = host,
    port = 3306,
    user = user,
    password = password,
    database= db_name,
    cursorclass=pymysql.cursors.DictCursor
    )
    print("Connect is OK")
except Exception as ex:
    print("Connection refused..")
    print(ex)

@eel.expose
def hello():
    print('bruh')

@eel.expose
def add_new_task(tasks, id_task):
    print(tasks)
    if (tasks == ""):
        pass
    else:
        with connection.cursor() as cursor:
            insert_query = "INSERT INTO TaskManager (task, task_id) VALUES (%s, %s)"
            val = (tasks, id_task)
            cursor.execute(insert_query, val)
            connection.commit()

@eel.expose
def load_old_tasks():
    sql_select_Query = "SELECT task FROM TaskManager ORDER BY ID DESC LIMIT 1"
    cursor = connection.cursor()
    cursor.execute(sql_select_Query)

    msg = cursor.fetchall()
    listToStr = ' '.join([str(elem) for elem in msg])
    a2 = listToStr.replace("{'task': '", '')
    a3 = a2.replace("'}", '')
    print(a3)
    return a3

@eel.expose
def delete_task(id_tasks):

    if id_tasks == '':
        pass
    else:
        with connection.cursor() as cursor:
            insert_query = "DELETE FROM TaskManager WHERE task_id = %s"
            val = (id_tasks)
            cursor.execute(insert_query, val)
            connection.commit()



if __name__ == '__main__':
    if sys.argv[1] == '--develop':
        eel.init('client')
        eel.start({"port": 3000}, host="localhost", port=8888)
        print(load_old_tasks())
    else:
        eel.init('build')
        eel.start('index.html')
