<template>
  <header>
    <img src="/logo.svg" />
    <a href="">Home</a>
    <a href="">Weer</a>
    <img id="modeToggle" src="/moon.svg" />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
img {
  width: 70px;
  height: 70px;
  margin-right: 80px;
  margin-left: 10px;
}
#modeToggle {
  margin-top: 20px;
  width: 28px;
  height: 28px;
  margin-right: 0;
  margin-left: 202%;
}
header {
  display: flex;
  justify-content: left;
}
header a {
  margin-top: 25px;
  margin-right: 90px;
}
a {
  transition: color 0.6s ease;
  font-size: 20px;
}
a:hover {
  color: #144884;
}
</style>
