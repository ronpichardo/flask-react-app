from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
import os, time

app = Flask(__name__)
app.config['MONGO_URI'] = os.getenv('MONGODB_URL')
mongodb_client = PyMongo(app)
db = mongodb_client.db

@app.route('/items')
def index():
  flask_items = db.flask_api.find()
  response = []
  if flask_items:
    for item in flask_items:
      response.append({ 'title': item['title'], 'body': item['body']  })
  else:
    response = "No items found"
  
  return { 'result': response }

@app.route('/data')
def get_data():
  return { 'result': 'Hello World'}

@app.route('/insert')
def insert_data():
  db.flask_api.insert({ 'title': 'my title', 'body': 'my title body' })
  return { 'result': 'success' }
  
if __name__ == '__main__':
  app.run()