<template>
    <div class="content">
        <h1>Today ({{ day + '/' + month + '/' + year + ' ' + daysOfWeek[dayOfWeek] + ' ' + shortenDay}})</h1>
        <h2>Available talent books</h2>
        <ul>
            <li v-for="book in books">
                {{ book.items[2].name }}
                <!-- <div v-if="book.availability[0] === dayOfWeek || book.availability[1] === dayOfWeek || book.availability[2] === dayOfWeek || ">
                    {{ book.items[2].name }}
                </div> -->
            </li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'


const date = new Date();

const day = ref(date.getDate());
const daysOfWeek = ref(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
const dayOfWeek = ref(date.getDay());
const shortenDay = ref(daysOfWeek.value[dayOfWeek.value].substring(0, 3).toLowerCase())

const month = ref(date.getMonth() + 1);
const year = ref(date.getFullYear());

const fullDate  = ref(date.toDateString());

// Character details
const endpointBooks = `https://api.genshin.dev/materials/talent-book`;
const books = ref([]);
const booksToday = ref([]);
const booksImgLink = ref([]);
fetch(endpointBooks)
.then(response => response.json())
.then(data => {
    books.value = data;
    console.log(books);
    return books.value;
})


// .then(data => {
//   data.forEach(function(book) {
//     fetch(`https://api.genshin.dev/materials/talent-book/${book}`)
//     .then(response => response.json())
//     .then(data => {
//       if(data.nation === (id.charAt(0).toUpperCase() + id.slice(1))){
//         charactersDetails.value.push(data);
//         charactersImgLink.value.push(chara);
//       }
//     })
//   });
//   console.log(charactersDetails.value)
//   console.log(charactersImgLink.value)
//   return charactersDetails.value;
// });


</script>

<style scoped lang="scss">

</style>