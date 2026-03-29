import mongoose, { Schema, model, models } from 'mongoose';

const AboutContentSchema = new Schema({
  heading: { type: String, required: true },
  subheading: { type: String },
  description: { type: String },
  image: { type: String },
  director_image: { type: String },
  director_name: { type: String },
  director_title: { type: String },
  director_description: { type: String },
  team_members: {
    type: Array,
    default: []
  } // e.g., [{ name: String, title: String, image: String }]
}, { timestamps: true });

const AboutContent = models.AboutContent || model('AboutContent', AboutContentSchema);
export default AboutContent;
