<template>
  <div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
  </div>
</template>
<style>
  .container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
  }

  .container div {
    border: 1px soild black
  }
</style>