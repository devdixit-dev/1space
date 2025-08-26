import mongoose from 'mongoose';

const ConnectToDB = () => {
  const mongodb_uri = process.env.MONGODB_URI;
  const mongodb_name = process.env.MONGODB_NAME;

  try {
    mongoose.connect(mongodb_uri, { dbName: mongodb_name })
      .then(() => { console.log(`MongoDB connected ✅`) })
      .catch((e) => { console.log(`Error connecting MongoDB, cause: ${e}`) });
  }
  catch (err) {
    console.log(`Failed to connect database, cause: ${err}`);
    process.exit(1);
  }
}

export default ConnectToDB;