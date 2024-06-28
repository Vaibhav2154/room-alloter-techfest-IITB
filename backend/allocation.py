def allocate_rooms(groups, hostels):
    allocation = []
    boys_hostels = [hostel for hostel in hostels if hostel["gender"] == "Boys"]
    girls_hostels = [hostel for hostel in hostels if hostel["gender"] == "Girls"]

    for group in groups:
        if group["gender"] == "Boys":
            allocated = allocate_to_hostel(group, boys_hostels)
        elif group["gender"] == "Girls":
            allocated = allocate_to_hostel(group, girls_hostels)
        else:  # Mixed group
            boys_group = {"group_id": group["group_id"], "members": group["members"]["boys"], "gender": "Boys"}
            girls_group = {"group_id": group["group_id"], "members": group["members"]["girls"], "gender": "Girls"}
            allocated_boys = allocate_to_hostel(boys_group, boys_hostels)
            allocated_girls = allocate_to_hostel(girls_group, girls_hostels)
            allocated = allocated_boys + allocated_girls

        allocation.extend(allocated)
    
    return allocation

def allocate_to_hostel(group, hostels):
    allocated = []
    remaining_members = group["members"]

    for hostel in hostels:
        if remaining_members <= 0:
            break
        if hostel["capacity"] >= remaining_members:
            allocated.append({"group_id": group["group_id"], "hostel_name": hostel["hostel_name"], "room_number": hostel["room_number"], "members_allocated": remaining_members})
            hostel["capacity"] -= remaining_members
            remaining_members = 0
        else:
            allocated.append({"group_id": group["group_id"], "hostel_name": hostel["hostel_name"], "room_number": hostel["room_number"], "members_allocated": hostel["capacity"]})
            remaining_members -= hostel["capacity"]
            hostel["capacity"] = 0

    return allocated
