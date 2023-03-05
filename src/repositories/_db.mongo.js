import mongodb from "mongodb";

function getClient() {
  const uri =
    "mongodb+srv://blogpet:CV2fwGwVZOwSJGVI@blog-pet.z8btzqz.mongodb.net/?retryWrites=true&w=majority";
  return new mongodb.MongoClient(uri);
}

export { getClient };
