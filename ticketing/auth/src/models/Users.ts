import mongoose from "mongoose";


// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

// And interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
};


// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  // createdAt: string;  // could be added by mongo automatically
  // updatedAt: string;
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};


const User: UserModel = mongoose.model<UserDoc, UserModel>('User', userSchema);

// User.build({
//   email: 'test@test.com',
//   password: 'password',
// });


// const buildUser = (attrs: UserAttrs) => {
//   return new User(attrs);
// };


export { User };
