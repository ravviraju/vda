import mongoose, { Schema, model, models } from 'mongoose';

const HomeAboutSchema = new Schema({
  heading: { type: String, required: true },
  subheading: { type: String },
  description: { type: String },
  image: { type: String },
}, { timestamps: true });

const HomeAbout = models.HomeAbout || model('HomeAbout', HomeAboutSchema);
export default HomeAbout;
