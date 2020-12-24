import React from 'react';
import { Input } from 'antd';



const SearchBox = (props: any) => {

    return (
        <Input.Search size="large" placeholder="Enter file name" enterButton />
    );
};

export default SearchBox;
