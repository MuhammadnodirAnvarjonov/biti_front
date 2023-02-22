<template>
    <div>
        <div>
            <div>
                <ul v-for="(item, index) in Data" :key="index">
                    <li v-if="!item.children">
                        {{ item.label }}
                    </li>
                    <li v-else>{{ item.label }}
                        <ul v-for="(element, elIndex) in item.children" :key="elIndex" >
                            <li>
                                {{ element.label }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>

            </div>
        </div>
    </div>
    
</template>
<script setup>
import { h, ref, onMounted } from "vue";

const Data = ref([
    {
        label: "test1",
        key: "/home",
        children: [
            {
                label: "testch1",
                key: "/home",
                children: [
                    {
                        label: "testchch1",
                        key: "/home",
                    }
                ]
            }
        ]
    },
    {
        label: "test2",
        key: "/home",
        children: [
            {
                label: "testch2",
                key: "/home",
                children: [
                    {
                        label: "testchch2",
                        key: "/home",
                    }
                ]
            }
        ]
    },
])
</script>