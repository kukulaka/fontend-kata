import { ChildFiles } from "./childFiles";

export interface AllFiles {
    type: string;
    name: string;
    dateAdded: string;
    fileSize: number;
    added: string;
    files: ChildFiles[];
}