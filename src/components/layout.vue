<template>
    <div class="page">
        <div class="head">
            <slot name="head" title="head-title"></slot>
        </div>
        <div class="body">
            <slot name="body"></slot>
        </div>
        <div class="foot">
            <slot name="slot"></slot>
        </div>
    </div>
</template>

<script>  
    export default {
        
    }
</script>

<style scoped>
    .page {
        height: 100%;
        display:flex;
        flex-direction: column;
    }
    .head {
        height: 44px;
    }

    .body {
        flex: 1;
    }

    .foot {
        height: 44px;
    }
</style>