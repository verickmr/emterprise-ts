export interface Employee{
    name: string;
    email: string;
    position: string;
    password: string;
    startDate: Date;
    endDate?: Date;
    status: "active" | "inactive";
}