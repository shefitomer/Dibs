import json

import sqlite3
from flask import Flask, jsonify, request

app = Flask(__name__)


def create_connection(db_file):
	conn = None
	try:
		conn = sqlite3.connect(db_file)
	except Error as e:
		print(e)
	return conn


def sql_request(request):
	database = "DibsDB.db"
	with create_connection(database) as conn:
		cur = conn.cursor()
		cur.execute(request)
		rows = cur.fetchall()
	return rows


def session_to_apartment_id(session_id):
	if session_id is None:
		return None
	request = "SELECT ApartmentID FROM Users WHERE SessionID LIKE '{}'".format(session_id)
	print(request)
	answer = sql_request(request)
	if answer:
		return answer[0][0]
	else:
		return None


def session_to_dib_items(session_id):
	if session_id is None:
		return None
	apartment_id = session_to_apartment_id(session_id)
	if apartment_id is None:
		return None
	request = "SELECT ItemName FROM DibItems WHERE ApartmentID=={}".format(apartment_id)
	items = []
	rows = sql_request(request)
	for row in rows:
		items.append({'title': row[0], 'description': 'none'})
	return items


def session_to_user_name(session_id):
	if session_id is None:
		return None

	request = "SELECT UserName FROM Users WHERE SessionID LIKE '{}'".format(session_id)
	answer = sql_request(request)
	if answer:
		return answer[0][0]
	else:
		return None


@app.route('/GetUser', methods=['GET', 'POST'])
def page_get_user():
	print(json.loads(request.data))
	return jsonify({"first_name": "Tomer",
					"apartment": "224"})


@app.route('/GetDibs', methods=['GET', 'POST'])
def page_get_dibs():
	return jsonify(session_to_dib_items(json.loads(request.data).get('session_id')))


@app.route('/AddItem', methods=['GET', 'POST'])
def page_add_item():
	pass


if __name__ == '__main__':
	app.run(port=8200)
