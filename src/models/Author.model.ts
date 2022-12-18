import mongoose, { Schema, model } from 'mongoose';

interface IAuthor {
    belongsto?: mongoose.Types.ObjectId;
    firstName: string;
    lastName?: string;
    country: string;
} 

const AuthorSchema = new Schema<IAuthor>({
    belongsto : {
        type : mongoose.Types.ObjectId,
        required : [true, "Field needs to be filled"],
        ref : "book"
    },
    firstName: {
        type: String,
        required: [true, "Firstname needs to be filled"],
    },
    lastName: {
        type: String,
    },
    country: {
        type: String,
        required: true,
    }
});

const AuthorModel = mongoose.model<IAuthor>("User", AuthorSchema);
export default AuthorModel;
