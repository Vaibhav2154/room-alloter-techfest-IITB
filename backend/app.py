from flask import Flask, request, jsonify
import csv
from allocation import allocate_rooms

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_files():
    group_file = request.files['groupFile']
    hostel_file = request.files['hostelFile']
    
    groups = []
    hostels = []

    # Read group file
    group_data = csv.reader(group_file)
    next(group_data)  # Skip header
    for row in group_data:
        group_id, members, gender = row
        groups.append({"group_id": int(group_id), "members": int(members), "gender": gender})

    # Read hostel file
    hostel_data = csv.reader(hostel_file)
    next(hostel_data)  # Skip header
    for row in hostel_data:
        hostel_name, room_number, capacity, gender = row
        hostels.append({"hostel_name": hostel_name, "room_number": int(room_number), "capacity": int(capacity), "gender": gender})

    # Allocate rooms
    allocation = allocate_rooms(groups, hostels)
    
    return jsonify(allocation)

if __name__ == '__main__':
    app.run(debug=True)
