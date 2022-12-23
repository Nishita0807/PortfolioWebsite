from flask import Flask, g, request
from flask_cors import CORS
import logging
import datetime
import pymysql
app = Flask(__name__)
CORS(app)


@app.before_request
def before_request():
    print("establishing connection with databse")
    g.db = pymysql.connect(host="localhost", user="root",
                           password="Rekha", db="portfolio_website", autocommit=True)
    g.cursor = g.db.cursor()


@app.teardown_request
def teardown_request(exception):
    print("closing the database")
    g.db.close()
    g.cursor.close()


@app.route("/api/recommendations", methods=["GET"])
def get_recommendation():
    try:
        print("recommendations")

        query = "SELECT * from recommendations where onShowcase=True;"
        g.cursor.execute(query)
        recommendations = g.cursor.fetchall()
        results = []
        for recommendation in recommendations:
            recommendation_obj = {
                "id": recommendation[0],
                "name": recommendation[1],

                "company": recommendation[3],
                "designation": recommendation[4],
                "message": recommendation[5],
            }
            results.append(recommendation_obj)

        return {"isSuccessful": True, "results": results}
    except:
        return {"isSuccessful": False, "results": []}


@app.route("/api/skills", methods=["GET"])
def get_skills():
    try:

        query = "SELECT * from skills;"
        g.cursor.execute(query)
        skills = g.cursor.fetchall()
        results = []
        for skill in skills:
            skill_obj = {
                "id": skill[0],
                "imageUrl": skill[1],

                "name": skill[2],
                "starsTotal": skill[3],
                "starsActive": skill[4],
            }
            results.append(skill_obj)

        return {"isSuccessful": True, "results": results}
    except:
        return {"isSuccessful": False, "results": []}


@app.route("/api/projects", methods=["GET"])
def get_projects():
    try:

        query = "SELECT * from projects where isPublished=True by lastModified desc;"
        g.cursor.execute(query)
        projects = g.cursor.fetchall()
        results = []
        for project in projects:
            project_obj = {
                "id": project[0],
                "imageUrl": project[1],

                "title": project[2],
                "excerpt": project[3],
                "body": project[4],
            }
            results.append(project_obj)

        return {"isSuccessful": True, "results": results}
    except:
        return {"isSuccessful": False, "results": []}


@app.route("/api/blogs", methods=["GET"])
def get_blogs():
    try:

        query = "SELECT * from blogs where isPublished=True by lastModified desc;"
        g.cursor.execute(query)
        blogs = g.cursor.fetchall()
        results = []
        for blog in blogs:
            blog_obj = {
                "id": blog[0],
                "imageUrl": blog[1],

                "title": blog[2],
                "excerpt": blog[3],
                "body": blog[4],
            }
            results.append(blog_obj)

        return {"isSuccessful": True, "results": results}
    except:
        return {"isSuccessful": False, "results": []}


@app.route("/api/project", methods=['Post'])
def add_project():
    try:
        project = request.json
        print(project)
        query = "insert into projects values(%s,%s,%s,%s,%s,%s,%s);"
        g.cursor.execute(query, [project["id"], project["imageUrl"], project["title"],
                         project["excerpt"], project["body"], True, datetime.datetime.now()])
        return {"isSuccessful": True}
    except:
        return {"isSuccessful": False}
