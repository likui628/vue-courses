<template>
  <input
    v-bind="{ ...$attrs, onChange: updateValue }"
    type="checkbox"
    :checked="modelValue"
    class="field"
    :id="uuid"
  />
  <label v-if="label" :for="uuid">{{ label }}</label>
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
      type: Boolean,
      default: false
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
