<template>
    <section class="hero is-warning is-medium">
        <div class="hero-body">
            <div class="container">
                <ul>
                    <li v-for="user in users">
                        {{user.name}}
                    </li>
                </ul>
                <form v-on:submit.prevent="addUser">
                    <div class="field-body">
                        <div class="field is-grouped">
                            <p class="control is-expanded has-icons-left">
                                <input v-model="newUser.name" class="input" type="text" placeholder="Name">
                                <span class="icon is-small is-left">
                                  <i class="fa fa-user"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control is-expanded has-icons-left has-icons-right">
                                <input v-model="newUser.email" class="input" type="email" placeholder="Email" value="alex@smith.com">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fa fa-check"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="field is-grouped">
                        <p class="control">
                            <button class="button is-primary" type="submit">Submit</button>
                        </p>
                        <p class="control">
                            <button class="button is-link">Cancel</button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>

    import {db} from '@/firebase.js'

    let userRef = db.ref('test');
    export default {
        name: 'module-firebase',
        data () {
            return {
                title: 'Firebase',
                subtitile: 'Firebase example',
                newUser: {
                    name: '',
                    email: ''
                }
            }
        },
        firebase: {
            users: {
                source:userRef
            }
        },
        methods: {
            addUser: function () {
                userRef.push(this.newUser);
            }
        }
    }
</script>