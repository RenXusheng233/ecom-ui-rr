import { shippingFormSchema } from '@/schemas'
import { ShippingFormInputs } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form'

type TInputForm = {
  keyName: keyof ShippingFormInputs
  placeholder: string
  register: UseFormRegister<ShippingFormInputs>
  errors: FieldErrors<ShippingFormInputs>
}

const InputForm = ({ keyName, placeholder, register, errors }: TInputForm) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={keyName} className="text-xs text-gray-500 font-medium">
        {keyName.charAt(0).toUpperCase() + keyName.slice(1)}
      </label>
      <input
        type="text"
        className="border-b border-gray-200 py-2 outline-none text-sm"
        id={keyName}
        placeholder={placeholder}
        {...register(keyName)}
      />
      {errors[keyName] && (
        <p className="text-xs text-red-500">{errors[keyName]?.message}</p>
      )}
    </div>
  )
}

const ShippingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  })

  const handleShippingForm = () => {}

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleShippingForm)}
    >
      <InputForm
        keyName="name"
        placeholder="Richard Ren"
        register={register}
        errors={errors}
      />
      <InputForm
        keyName="email"
        placeholder="richardren@gmail.com"
        register={register}
        errors={errors}
      />
      <InputForm
        keyName="phone"
        placeholder="12366668888"
        register={register}
        errors={errors}
      />
      <InputForm
        keyName="city"
        placeholder="Shang Hai"
        register={register}
        errors={errors}
      />
      <InputForm
        keyName="address"
        placeholder="Pu Tuo Xxx Jie Dao"
        register={register}
        errors={errors}
      />
      <button
        type="submit"
        className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex gap-2
                         items-center justify-center hover:bg-gray-900 transition-all duration-300"
      >
        Continue
        <ArrowRight className="w-3 h-3" />
      </button>
    </form>
  )
}

export default ShippingForm
