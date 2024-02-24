<template>
    <p><span>test </span></p>
</template>

<script setup>
import db from './firebase/index.js'

import { collection, getDocs } from "firebase/firestore";
import {onMounted} from "vue";


onMounted(async () => {
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
})

</script>

<style scoped lang="scss">
    p {
        span {
            color: red;
        }
    }
</style>
