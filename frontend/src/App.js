import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import RoomAllocation from './components/RoomAllocation';

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

    const handleAllocation = (data) => {
        setAllocation(data);
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
