import { UserDrive} from './userDrive';

export type ApiResponse = {
    message: string
    status: string
    allFiles: UserDrive[]
    allFilesProps?: AllFilesProps
}

interface AllFilesProps {
    allFileProps: ApiResponse
}