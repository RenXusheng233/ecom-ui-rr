'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from './ui/sheet'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Button } from './ui/button'

const formSchema = z.object({
  username: z
    .string()
    .min(2, 'Username must be at least 2 characters!')
    .max(50, 'Username must be less than 50 characters!'),
  email: z.email('Invalid email!').min(1),
  phone: z
    .string()
    .length(11, 'Phone number must be 11 digits')
    .regex(/^\d+$/, 'Phone number must contain only numbers!'),
  location: z.string().min(1, 'Location is required!'),
  role: z.enum(['admin', 'user']),
})

const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'Richard Ren',
      email: 'RichardRen@gmail.com',
      phone: '188 8888 7777',
      location: 'Abc Dddd, RR',
      role: 'admin',
    },
  })

  const { control } = form

  const renderFormInputField = (
    name: 'username' | 'email' | 'phone' | 'location',
    description: string,
  ) => (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-8">
              {renderFormInputField(
                'username',
                'This is your public display name.',
              )}
              {renderFormInputField('email', 'Only admin can see your email.')}
              {renderFormInputField(
                'phone',
                'Only admin can see your phone number.',
              )}
              {renderFormInputField(
                'location',
                'This is your public location.',
              )}
              <FormField
                control={control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <SelectTrigger>
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="user">User</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormDescription>
                      Only verified users can be admin.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  )
}

export default EditUser
