const { Client } = require("pg");

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR (255),
    message TEXT,
    timestamp TIMESTAMPTZ
    );
    
    INSERT INTO messages (name, message, timestamp)
    VALUES
        ('First_Seed', 'Testing first seeded message!', '${new Date().toISOString()}'),
        ('Seed2', 'Testing 2nd seeded message!', '${new Date().toISOString()}');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("seeding done");
}

main();