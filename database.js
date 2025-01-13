const { MongoClient } = require("mongodb");

const URI =
    "mongodb+srv://namastedev:nNXW21PpX7BmOP1a@namastenode.vhmrf.mongodb.net/";
const Client = new MongoClient(URI);

const dbName = "HelloWorld";

async function main() {
    await Client.connect();
    console.log("Connected to DB");
    const db = Client.db(dbName);
    const collection = db.collection("User");

    // Created the new data
    const data = {
        firstName: "Deepika",
        lastName: "Padukone",
        city: "Mumbai",
        phoneNumber: "1234567890",
    };

    // Insert the data
    // const insertResult = await collection.insertMany([data]);
    // console.log("insertResult", insertResult);

    // // Read the data
    // const findResults = await collection.find({}).toArray();
    // console.log("findResults", findResults);

    // // Get the count
    // const countResults = await collection.countDocuments({});
    // console.log("countResults", countResults);

    // find the all document whose name is Deepika
    const findResultsByName = await collection
        .find({
            firstName: "Deepika",
        })
        .toArray();
    console.log("findResultsByName => ", findResultsByName);

    // const deleteResult = await collection.deleteOne({
    //     firstName: "Deepika",
    //     lastName: "Padukone",
    //     city: "Mumbai",
    //     phoneNumber: "1234567890",
    // });
    // console.log("deleteResult", deleteResult);

    return "done.";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => Client.close());
