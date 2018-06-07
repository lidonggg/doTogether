import { User } from './user.model';

export interface Task {
    id?: string;
    taskListId: string;
    desc: string;
    completed: boolean;
    ownerId: string;  //拥有者
    participantIds: string[];  //参与者
    dueDate?: Date;
    priority: number;
    // order: number;
    remark?: string;   //备注
    // tags?: string[];
    reminder?: Date;
    createDate?: Date;  //创建事件
}