import axios, { AxiosResponse } from 'axios';
import { ApiResponse } from '../types/apiResponse';


const jsonURL: string = "http://localhost:3000/files.json"

 async function getFileData(): Promise<AxiosResponse<ApiResponse[]>> {
    try {
        const allFiles: AxiosResponse<ApiResponse[]> = await axios.get(
            jsonURL
        )
        return allFiles;
    } catch (error) {
        throw new Error(`API error: ` + Error);
    }
}

export { getFileData }