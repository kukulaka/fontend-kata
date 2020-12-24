import axios from 'axios';
import { getFileData } from '../api/getFileData';
import jsonData from '../files.json';


//API testing
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>

it('returns AllFiles?', async () => {
    mockedAxios.get.mockResolvedValue({
        data: [jsonData]
    });

    let apiCall = await getFileData();

    expect(apiCall).toMatchObject({ "data": [jsonData] })

});