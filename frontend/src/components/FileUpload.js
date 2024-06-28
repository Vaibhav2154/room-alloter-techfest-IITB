import React from 'react';

function FileUpload({ onFileUpload }) {
    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        onFileUpload(file, type);
    };

    return (
        <div className="file-upload">
            <h2>Upload Files</h2>
            <div>
                <label htmlFor="group-file">Group Information:</label>
                <input
                    type="file"
                    id="group-file"
                    accept=".csv"
                    onChange={(e) => handleFileChange(e, 'group')}
                />
            </div>
            <div>
                <label htmlFor="hostel-file">Hostel Information:</label>
                <input
                    type="file"
                    id="hostel-file"
                    accept=".csv"
                    onChange={(e) => handleFileChange(e, 'hostel')}
                />
            </div>
        </div>
    );
}

export default FileUpload;
