export interface Employee{
    id: string
    name: string;
    email: string;
    position: string;
    password: string;
    startDate: Date;
    endDate?: Date;
    status: "active" | "inactive";
}