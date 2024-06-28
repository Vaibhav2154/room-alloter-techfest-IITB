import React from 'react';

function RoomAllocation({ allocation }) {
    return (
        <div className="room-allocation">
            <h2>Room Allocation Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Group ID</th>
                        <th>Hostel Name</th>
                        <th>Room Number</th>
                        <th>Members Allocated</th>
                    </tr>
                </thead>
                <tbody>
                    {allocation.map((alloc, index) => (
                        <tr key={index}>
                            <td>{alloc.group_id}</td>
                            <td>{alloc.hostel_name}</td>
                            <td>{alloc.room_number}</td>
                            <td>{alloc.members_allocated}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button>Download CSV</button>
        </div>
    );
}

export default RoomAllocation;

