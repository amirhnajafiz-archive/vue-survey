<template>
  <div class="logo-row">
    <div>
      <img
        src="../assets/logo.png"
        style="width: 180px; height: 180px; display: block"
      />
    </div>
    <div class="webquetoe">Choose Vue, Choose Power</div>
  </div>
</template>

<script>
export default {
  name: "WebLogo",
};
</script>

<style scoped>
.logo-row {
  background-color: #27394a;
  display: flex;
  margin: 0px auto;
  margin-bottom: 10px;
  align-items: center;
  width: 100%;
  height: 250px;
  flex-direction: column;
  padding: 30px;
}

.webquetoe {
  color: #40c98d;
}
</style>