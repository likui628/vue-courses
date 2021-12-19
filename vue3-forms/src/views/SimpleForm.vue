<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="onSubmit">
      <BaseSelect
        :options="categories"
        v-model="category"
        label="Select a category"
        :error="errors.category"
      />

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput
          v-model="title"
          label="Title"
          type="text"
          :error="errors.title"
        />

        <BaseInput
          v-model="description"
          label="Description"
          type="text"
          :error="errors.description"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput
          v-model="location"
          label="Location"
          type="text"
          :error="errors.location"
        />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>

        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup
            v-model="pets"
            name="pets"
            :options="petOptions"
            :error="errors.pets"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox
            v-model="catering"
            label="Catering"
            :error="errors.catering"
          />
        </div>

        <div>
          <BaseCheckbox
            v-model="music"
            label="Live music"
            :error="errors.music"
          />
        </div>
      </fieldset>

      <BaseButton
        type="submit"
        class="-fill-gradient"
      >
      Submit
      </BaseButton>
    </form>
  </div>
</template>

<script>
import { useField, useForm } from 'vee-validate'
import { object as yupObject, string, number, boolean } from 'yup'

export default {
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      petOptions: [
        { label: 'Yes', value: 1 },
        { label: 'No', value: 0 }
      ]
    }
  },
  setup () {
    const schema = yupObject({
      category: string().required(),
      title: string().required('A cool title is required').min(3),
      description: string().required(),
      location: string(),
      pets: number(),
      catering: boolean(),
      music: boolean()
    })

    const { handleSubmit, errors } = useForm({
      validationSchema: schema,
      initialValues: {
        pets: 1,
        catering: false,
        music: false
      }
    })

    const { value: category } = useField('category')
    const { value: title } = useField('title')
    const { value: description } = useField('description')
    const { value: location } = useField('location')
    const { value: pets } = useField('pets')
    const { value: catering } = useField('catering')
    const { value: music } = useField('music')

    const onSubmit = handleSubmit(values => {
      console.log('submit', values)
    })

    return {
      category,
      title,
      description,
      location,
      pets,
      catering,
      music,
      onSubmit,
      errors
    }
  }
}
</script>

<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
