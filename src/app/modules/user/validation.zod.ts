import { z } from "zod";
const fullNameValidationSchema = z.object({
  fastName: z.string(),
  lastName: z.string(),
});

const addressValidationSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const userValidationSchema = z.object({
  userId: z.number(),
  userName: z.string(),
  password: z.string().max(20),
  fullName: fullNameValidationSchema,
  age: z.number(),
  email: z.string().email("please provide valid email"),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: addressValidationSchema,
});
export default userValidationSchema;
