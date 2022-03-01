<template>
    <div class="wrapper">
        <div class="white-box">
            {{ msg }}
            <div class="main-title">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TitleViewer',
  props: {
    msg: String
  }
}
</script>

<style scoped>
    .white-box {
        font-family: 'Roboto';
        color: #41b3a3;
        margin-bottom: 1rem;
        text-align: center;
        position: relative;
        justify-content: center;
        align-items: center;
        display: inline-flex;
        font-size: 50px;
        border: 5px solid#41b3a3;
        padding: 2rem;
        width: 60px;
        height: 60px;
    }

    .main-title {
        font-family: 'Roboto';
        font-weight: bold;
        color: #fff;
        position: absolute;
        bottom: 0;
        left: 30%;
        font-size: 55%;
        font-weight: lighter;
        overflow-x: auto;
        white-space: nowrap;
    }
</style>
