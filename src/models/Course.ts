import mongoose, { Schema, model, models } from 'mongoose';

const CourseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  sort_order: { type: Number, default: 0 },
  status: { type: Number, default: 1 },
  details: {
    hero_tagline: String,
    hero_quote: String,
    eligibility: String,
    selection_procedure: String,
    vacancies: String,
    exam_scheme: String,
    exam_centres: String,
    ssb_marks: String,
    total_marks: String,
  }
}, { timestamps: true });

const Course = models.Course || model('Course', CourseSchema);
export default Course;
