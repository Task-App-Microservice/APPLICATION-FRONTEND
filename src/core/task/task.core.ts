import { Project } from "../project/project.core";
import { User } from "../user/user.core";

export interface Task{
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    priority: "LOW" | "MEDIUM" | "HIGH";
    status: "PENDING" | "IN_PROGRESS" | "DONE";
    createdAt: Date;
    updatedAt: Date;
    dueDate?: Date;
    user: User;
    project: Project;
}