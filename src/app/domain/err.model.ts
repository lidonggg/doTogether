export interface Err {
    timestamp?: Date;  //时间戳
    status?: number;    
    error?: string;
    exception?: string;
    message?: string;
    path?: string;
}