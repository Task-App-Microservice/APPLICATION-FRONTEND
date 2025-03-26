export interface IMessageProps {
    type: "error" | "success" | "warning" | "disabled";
    message: string;
}