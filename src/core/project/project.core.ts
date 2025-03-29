import { Task } from "../task/task.core";
import { User } from "../user/user.core";

export interface Project {
    id: number;
    uuid: string;
    name: string;
    owner: User;
    tasks: Task[];
    createdAt: Date;
    updatedAt: Date;
   // participants: ProjectParticipant[];
}