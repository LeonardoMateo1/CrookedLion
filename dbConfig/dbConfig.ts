import mongoose from 'mongoose';

const dbName = "CrookedLion";  // Define the local database name

export async function connect() {
    try {
        // Connect to the local database using the dbName constant
        mongoose.connect(`mongodb://localhost/${dbName}`);

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log(`Connected to ${dbName} database!`);
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
    }
}

export function isConnected() {
    return mongoose.connection.readyState === 1;
}

// Optional: If you want to automatically check connection after connecting
connect().then(() => {
    if (isConnected()) {
        console.log('Connected to the database!');
    } else {
        console.log('Not connected to the database.');
    }
});