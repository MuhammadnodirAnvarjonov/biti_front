<template>
    <div class="ogohlantirish">
        <div class="active">
            bu sahifa ishlab chiqilmoqda
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.ogohlantirish{
    .active{
        width: 500px;
        height: 50px;
        text-align: center;
        background-color: red;
        line-height: 50px;
        color: white;
        font-size: 20px;
        cursor: pointer;
        border-radius: 5px;
    }
}
@keyframes error {
  0% { opacity: 0; }
  25% { opacity: 0.4; }
  75% { opacity: 0.7; }
  100% { opacity: 1; }
}
</style>