

export interface AllFiles {
    key: number;
    type: string;
    name: string;
    dateAdded?: Date;
    fileSize?: number;
    files?: AllFiles[];
}



