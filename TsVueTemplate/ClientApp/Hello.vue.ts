import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class App extends Vue {
    // Makes a "exampleProperty" a component prop with the default value of 'Example'
    @Prop({ default: 'Hello Ts Vue Template.' })
    exampleProperty: string
}