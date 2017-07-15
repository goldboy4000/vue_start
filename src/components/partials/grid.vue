<template>
    <table class="table">
        <thead>
        <tr>
            <th v-for="key in columns">
                {{key | capitalize}}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="entry in fitleredData">
            <td v-for="key in columns">
                {{entry[key]}}
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: 'grid',
        props: {
            data: Array,
            columns: Array,
            filterKey: String
        },
        filters: {
            capitalize: function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1)
            }
        },
        computed: {
            fitleredData: function () {

                return this.data.filter(function (item) {
                    if (item.name.indexOf(this.filterKey) !== -1)
                    {
                        return item;
                    }
                }.bind(this));
            }
        }
    }
</script>
