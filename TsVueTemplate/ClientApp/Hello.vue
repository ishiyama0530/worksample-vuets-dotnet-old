<script src="./Hello.vue.ts" lang="ts"></script>
<style src="./Hello.vue.css"></style>

<template>
    <section class="section">
        <div class="container">
            <h1 class="title">
                {{exampleProperty}}
            </h1>
            <div class="field">
                <input class="input" type="text" placeholder="name input" style="width: 300px" v-model="name">
            </div>
            <a class="button is-info" @click="onClick()">click me!</a>
        </div>
    </section>
</template>