<template>
  <div id="App"></div>
  <router-view />
</template>

<style lang="scss">
// Open Sans Font
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

* {
  --green-1: #45852d;
  --grey-1: #f8f8f8;
  --grey-2: #d8d8d8;
  --blue-1: #006f79;
  --orange-1: #ec6608;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
}
</style>
