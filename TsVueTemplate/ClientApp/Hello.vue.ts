import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Axios from 'axios'

@Component
export default class App extends Vue {
    @Prop({ default: 'Hello TsVueTemplate for .netcore!' })
    exampleProperty: string
    private name: string = ""

    onClick() {
        Axios.post(`/api/message/${this.name}`, null, {
            headers: {
                'RequestVerificationToken': (window as any).token
            }
        }).then(res => {
            alert(res.data.message)
        })
    }
}