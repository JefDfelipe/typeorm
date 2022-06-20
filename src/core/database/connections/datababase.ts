import { Connection, createConnection } from "typeorm";

export default class Database {
    private static connection: Connection;

    public getConncetion(): Connection {
        if (Database.connection == null || Database.connection == undefined) {
            throw new Error("No connection");
        };
        return Database.connection;
    };

    public async openConnection(): Promise<void> {
        if (Database.connection == null || Database.connection == undefined) {
            try {
                Database.connection = await createConnection();
            } catch (e) {
                console.error('Connection error ->', e);
                throw new Error(`Connection error -> ${e}`);
            };   
        };
    };
};