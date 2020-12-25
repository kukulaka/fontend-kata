import React, { useState } from 'react';
import { Input, Divider, Alert } from 'antd';
import { UserDrive } from '../types/userDrive';
import BreadCrumb from '../components/BreadCrumb';
import FileList from '../components/FileList';
import { AllFiles } from 'src/types/allFiles';

const SearchBox: React.FC<UserDrive> = ({ driveName, files }) => {

    const [filesFiltered, setFilesFiltered]: [AllFiles[], (allFiles: AllFiles[]) => void] = useState(files);
    const [error, setError]: [string, (error: string) => void] = useState("");

    const searchFilter = (searchText: any) => {
        let searchFiles = files;

        if (searchText.length > 0) {
            //didn't know how strict to make the filter so made so case is ignored
            searchFiles = files.filter(file => file.name.toLowerCase().includes(searchText.toLowerCase()));
        }
        //if empty then reset the list of files
        setFilesFiltered(searchFiles);
    }


    const onSearch = (e: any) => {
        setError("");
        if (e.target.value !== undefined) {
            searchFilter(e.target.value);

        } else {
            setError("Your search has failed");
        }
    }

    const handleUserSearch = (value: any) => {
        //AntD onSearch handles this a little differently 
        //so just need value. 
        const searchValue = value;
        searchFilter(searchValue);

    }


    const displayError = () => {
        if (error) {
            return (<div className="loading" id="errorContainer">
                <Alert
                    message="Error"
                    description={error}
                    showIcon
                />
            </div>)
        } else { return null; }
    }
    let greeting = null;
    if (driveName) {
        greeting = <h2>Hello BrightHR, welcome to {driveName.toLowerCase()}</h2>;
    }
    return (
        <div>
            {greeting}
            <Divider />
            <Input.Search size="large" placeholder="Search for files"
                enterButton
                onPressEnter={value => onSearch(value)}
                onSearch={handleUserSearch}
            />
            {displayError()}
            <Divider />
            <BreadCrumb />
            <Divider />
            <FileList files={filesFiltered} />
        </div>
    );
};

export default SearchBox;
