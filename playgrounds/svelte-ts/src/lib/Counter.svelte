<script lang="ts">
  console.log(
    "%cConsole Log Test===>>>: ",
    "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
    "Console Log Test"
  );
  let count = 0
  const increment = () => {
    count += 1
    console.log(
      "%cConsole Log Test===>>>: ",
      "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
      "Console Log Test"
    );
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
