<template>
    <div>
        <form @submit.prevent="onSubmit">
            <fieldset>
                <BaseInput
                    label="Email"
                    type="text"
                    :modelValue="email"
                    @change="handleChange"
                    :error="errors.email"
                />
            </fieldset>
            <fieldset>
                <BaseInput
                    label="Password"
                    type="text"
                    v-model="password"
                    :error="errors.password"
                />
            </fieldset>
            <BaseButton type="submit" class="-fill-gradient">Submit</BaseButton>
        </form>
    </div>
</template>

<script>
import { useField, useForm } from 'vee-validate'
import { object as yupObject, string } from 'yup'

export default {
  setup () {
    const schema = yupObject({
      email: string().required().email(),
      password: string().required().min(8)
    })

    const { handleSubmit, errors } = useForm({
      validationSchema: schema
    })
    const { value: email, handleChange } = useField('email')
    const { value: password } = useField('password')

    const onSubmit = handleSubmit(values => {
      console.log('submit', values)
    })

    return {
      email,
      handleChange,
      password,
      errors,
      onSubmit
    }
  }
}
</script>
