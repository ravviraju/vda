import mongoose, { Schema, model, models } from 'mongoose';

const CourseDetailSchema = new Schema({
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  hero_tagline: { type: String },
  hero_quote: { type: String },
  eligibility: { type: String },
  selection_procedure: { type: String },
  vacancies: { type: String },
  exam_scheme: { type: String },
  exam_centres: { type: String },
  ssb_marks: { type: String },
  total_marks: { type: String },
}, { timestamps: true });

const CourseDetail = models.CourseDetail || model('CourseDetail', CourseDetailSchema);
export default CourseDetail;
