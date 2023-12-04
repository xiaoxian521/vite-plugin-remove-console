<script setup lang="ts">
import { ref } from "vue"

defineProps<{ msg: string }>()

const count = ref(0)

function onClick() {
  debugger
  count.value++
  console.log(
    "%cConsole Log Test===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    "Console Log Test"
  )
}

console.log(
  "%cConsole Log Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console Log Test"
)


console.warn(
  "%cConsole warn Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console warn Test"
)

console.error(
  "%cConsole error Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console error Test"
)

console.info(
  "%cConsole info Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console info Test"
)

console.log(
  "%cConsole Log Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "这个不删"
)
console.log(
  "%cConsole Log Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "noRemove"
)

let _ = new Promise((_, reject) => { reject(new Error("wrong")) }).then(() => { }).catch(err => { console.log(err) })

// Just testing, not recommended
let val = ref(1)
val.value = 6
val.value = 8
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="onClick">count is {{ count }}</button>
    <h1>{{ val }}</h1>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>