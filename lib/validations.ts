import { z } from "zod";

const disposableDomains = ["tempmail.com", "10minutemail.com", "guerrillamail.com"];

export const LeadSchema = z.object({
  // 1. Algorithmic Email Check
  email: z.string()
    .email({ message: "Invalid email address format." })
    .refine((val) => {
      const domain = val.split("@")[1];
      return !disposableDomains.includes(domain);
    }, { message: "Business emails cannot be from disposable domains." }),

  // 2. Regex Phone Check
  phone: z.string()
    .regex(
      /^\+?[1-9]\d{1,14}$/, 
      { message: "Phone number must be a valid E.164 international format." }
    ),
    
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  company: z.string().min(2),
  
  // NEW: Step 2 Fields from EnquireModal
  domain: z.string().min(2, { message: "Domain is required." }),
  candidates: z.coerce.number().min(1, { message: "Must have at least 1 candidate." }),
  deliveryMode: z.string().min(2, { message: "Delivery mode is required." }),
  location: z.string().min(2, { message: "Location is required." }),
});