import * as trpc from '@trpc/server';

export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    email?: string;
};

export const personRouter = trpc.router().query("getAll", {
    resolve() {
        const people: Person[] = [
            { id: "1", firstName: "John", lastName: "Smith", dateOfBirth: "2000-06-12" },
            { id: "2", firstName: "Jane", lastName: "Doe", dateOfBirth: "1997-01-01" },
        ];
        return { people }
    }
})