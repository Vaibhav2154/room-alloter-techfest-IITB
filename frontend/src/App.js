import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import RoomAllocation from './components/RoomAllocation';
import axios from 'axios';

function App() {
    const [groupFile, setGroupFile] = useState(null);
    const [hostelFile, setHostelFile] = useState(null);
    const [allocation, setAllocation] = useState([]);

    const handleFileUpload = (file, type) => {
        if (type === 'group') {
            setGroupFile(file);
        } else {
            setHostelFile(file);
        }
    };

    const handleAllocation = async () => {
        const formData = new FormData();
        formData.append('groupFile', groupFile);
        formData.append('hostelFile', hostelFile);

        try {
            const response = await axios.post('http://localhost:5000/upload', formData);
            setAllocation(response.data);
        } catch (error) {
            console.error("There was an error allocating rooms!", error);
        }
    };

    return (
        <div className="App">
            <h1>Room Allocation System</h1>
            <FileUpload onFileUpload={handleFileUpload} />
            <button onClick={handleAllocation}>Allocate Rooms</button>
            <RoomAllocation allocation={allocation} />
        </div>
    );
}

export default App;
