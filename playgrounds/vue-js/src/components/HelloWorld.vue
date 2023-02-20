<script setup>
import { ref } from "vue";

defineProps({
  msg: String
});

const count = ref(0);
function onClick() {
  count.value++;
  console.log(
    "%cConsole Log Test===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    "Console Log Test"
  );
}

console.log(
  "%cConsole Log Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console Log Test"
);
console.log(
  "%cConsole Log Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "这个不能删除"
);
console.log(
  "%cConsole aa Log Test===>>>: ",
  "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
  "Console Log Test aa"
);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="onClick">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
