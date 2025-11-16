import { z } from 'zod'

export const shippingFormSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  email: z.email().min(1, 'Email is required!'),
  phone: z
    .string()
    .length(11, 'Phone number must be 11 digits!')
    .regex(/^\d+$/, 'Phone number must contain only numbers!'),
  city: z.string().min(1, 'City is required'),
  address: z.string().min(1, 'Address is required!'),
})
