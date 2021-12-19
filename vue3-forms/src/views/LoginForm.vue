<template>
    <div>
        <form @submit.prevent="onSubmit">
            <fieldset>
                <BaseInput label="Email" type="email" v-model="email" />
            </fieldset>
            <fieldset>
                <BaseInput label="Password" type="password" v-model="password" />
            </fieldset>
            <BaseButton type="submit" class="-fill-gradient">Submit</BaseButton>
        </form>
    </div>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  setup () {
    function onSubmit () {
      alert('Submitted')
    }

    return {
      onSubmit
    }
  }
}
</script>
