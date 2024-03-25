const { MongoClient } = require("mongodb");

async function main() {
  //connection
  const uri =
    "mongodb+srv://rjday:northcoders123@touchgrass.bsuyqar.mongodb.net/?retryWrites=true&w=majority&appName=TouchGrass";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    // await listDatabases(client);
    // await createListing(client, {
    //   name: "Rikki Day",
    //   email: "rj.day@hotmail.com",
    //   password: "northcoders123",
    // });
    // await createMultipleListings(client, [
    //   {
    //     name: "Guy",
    //     email: "guy@northcoders.com",
    //     password: "northcoders123",
    //   },
    //   {
    //     name: "Chili",
    //     email: "chili@northcoders.com",
    //     password: "northcoders123",
    //   },
    //   {
    //     name: "Qasim",
    //     email: "qasim@northcoders.com",
    //     password: "northcoders123",
    //   },
    // ]);
    // await findOneListingByName(client);
    await findManyListings(client, {
      genres: "comedy",
    });
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function findManyListings(client, genres) {
  const cursor = await client
    .db("sample_mfix")
    .collection("movies")
    .find({
      genres,
    })
    .sort({ year: -1 });

  const result = cursor.toArray();

  console.log(result);
}

async function findOneListingByName(client) {
  const result = await client
    .db("sample_mflix")
    .collection("users")
    .findOne({ name: "Rikki Day" });

  if (result) {
    console.log(`found one result in the collection`, result);
  } else {
    console.log("didn't find any results in the collection");
  }
}

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("sample_mflix")
    .collection("users")
    .insertMany(newListings);
  console.log(
    `${result.insertedCount} new listings created with the following id(s): `
  );
  console.log(result.insertedIds);
}

async function createListing(client, newListing) {
  const result = await client
    .db("sample_mflix")
    .collection("users")
    .insertOne(newListing);
  console.log(
    `new listing created with the following id: ${result.insertedId}`
  );
  //automatically creates _id (required key)
}

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases");
  databasesList.databases.forEach((db) => {
    console.log(`-${db.name}`);
  });
}
