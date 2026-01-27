import { z as e } from "zod";
const t = e.object({
  id: e.string().min(1, "ID is required"),
  date: e.string().regex(/^[A-Z]+ \d+( \d{4})?$/, 'Date must be in format "MONTH DAY YEAR"'),
  title: e.string().min(10, "Title must be at least 10 characters").max(200, "Title must be less than 200 characters"),
  description: e.string().max(2e3, "Description must be less than 2000 characters"),
  tags: e.array(e.string()).min(1, "At least one tag is required").max(5, "Maximum of 5 tags").optional()
}), s = e.object({
  changes: e.array(t)
});
export {
  s as ChangeFeedDataSchema,
  t as ChangeFeedItemSchema
};
