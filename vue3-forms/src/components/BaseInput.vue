<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <input
    v-bind="{
      ...$attrs,
      onInput: updateValue
    }"
    :value="modelValue"
    :placeholder="label"
    class="field"
    :id="uuid"
  >
  <BaseErrorMessage
    v-if="error"
    :id="`${uuid}-error`"
  >
    {{ error }}
  </BaseErrorMessage>
</template>

<script>
import UniqueID from '../features/UniqueID'
import SetupFormComponent from '../features/SetupFormComponent'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const uuid = UniqueID().getID()
    const { updateValue } = SetupFormComponent(props, context)

    return {
      uuid,
      updateValue
    }
  }
}
</script>
