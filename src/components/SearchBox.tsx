import React from 'react';
import { Input, Divider } from 'antd';
import FileList from '../components/FileList';

 //to do filter function and props to filelist

const SearchBox = (props: any) => {

    return (
        <div>
        <Input.Search size="large" placeholder="Search for files" enterButton />
        <Divider />
        <FileList />
        </div>
    );
};

export default SearchBox;
