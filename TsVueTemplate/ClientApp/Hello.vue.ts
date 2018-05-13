import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    @Prop({ default: 'Hello Ts Vue Template.' })
    exampleProperty: string
}