#hw
from flask import Flask,jsonify,request

import mysql.connector as mysql
from flask_cors import CORS, cross_origin


try:
    conn=mysql.connect(
    host='localhost',
    user='root',
    password='',
    database='attendance'
   )
    curs=conn.cursor(buffered=True)
    app = Flask(__name__)
    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'



    @app.route('/register',methods=['POST'])
    def Register():
     data=request.get_json()
     print(data)
     return "200ok"

    @app.route('/registerStudent',methods=['POST'])
    def registerStudent():
     data=request.get_json()
     name=data['name']
     usn=data['usn']
     division=data['division']
     sem=data['sem']
     branch=data['branch']
     mobile_number=data['mobile_number']
     password=data['password']
     batch=data['batch']
     email=data['email']
     sqlQuery="insert into student (name,usn,division,sem,branch,mobile_number,email,password,batch) values(%s,%s,%s,%s,%s,%s,%s,%s,%s)"
     values=(name,usn,division,sem,branch,mobile_number,email,password,batch) 
     curs.execute(sqlQuery,values)
     conn.commit()
     return jsonify({"message":"success"})


    @app.route('/registerTeacher',methods=['POST'])
    def registerTeacher():
     data=request.get_json()
   
     print(data)
     name=data['name']
     email=data['email']
     mobile_number=data['mobile_number']
     branch=data['branch']
     subject=data['subject']
     password=data['password']
     sqlQuery="insert into teacher (name,email,mobile_number,branch,subject,password) values(%s,%s,%s,%s,%s,%s)"
     values=(name,email,mobile_number,branch,subject,password) 
     curs.execute(sqlQuery,values)
     conn.commit()
     return jsonify({"message":"success",})

    @app.route('/login', methods=['POST'])
    def login():
     user = request.get_json()['username']
     password = request.get_json()['password']
     userType = request.get_json()['userType']
     if userType == 'admin':
        sqlQuery = "select * from admin where name=%s and password=%s"
        values=(user,password)
        curs.execute(sqlQuery,values)
        if (curs.rowcount>0):
           return jsonify({"message":"valid user",'status':1})
        else:
            return jsonify({"message":"invalid username or password",'status':0})
     elif userType == 'student':
        sqlQuery = "select * from student where name =%s and password=%s"
        values=(user,password)
        curs.execute(sqlQuery,values)
        if (curs.rowcount>0):
           return jsonify({"message":"valid Student",'status':1})
        else:
            return jsonify({"message":"invalid username or password",'status':0})
     else:
        sqlQuery = "select * from teacher where name=%s and password=%s"
        values=(user,password)
        curs.execute(sqlQuery,values)
        if (curs.rowcount>0):
           return jsonify({"message":"valid Faculty",'status':1})
        else:
            return jsonify({"message":"invalid username or password",'status':0})

            
     return jsonify({"message":"success"})
    if __name__ == '__main__':
     app.run(port=5000,debug=True)


except:
    print("check your mysql is connected")






  