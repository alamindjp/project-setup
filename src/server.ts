import app from './app';
import config from './app/config';
// import mongoose from 'mongoose';


async function main() {
  // try {
    // await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log("port on ports")
      console.log(`Port listening ${config.port}`);
    });
  // } catch (err) {
  //   console.log(err);
  // }
}

main();
