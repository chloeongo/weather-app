<template>
  <header>
    <img src="/logo.svg" />
    <a href="">Home</a>
    <a href="">Weer</a>
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
  margin-right: 50px;
  margin-left: 10px;
}
header {
  display: flex;
  justify-content: left;
}
header a {
  margin-top: 20px;
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
