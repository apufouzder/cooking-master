document.getElementById("search-btn").addEventListener("click", mealsResult);

function mealsResult(){
    document.getElementById("search-result").innerHTML = '';

const foodTitle = document.getElementById("search-title").value;
// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodTitle}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    for (let i = 0; i < data.meals.length; i++) {
        const mealsName = data.meals[0];
        console.log(mealsName);
        const mealTitle = mealsName.strCategory;
        const mealImage = mealsName.strMealThumb;
        // console.log(mealTitle);
        // console.log(mealImage);

        document.getElementById("search-result").innerHTML += `
        <div class="col-md-3">
            <div class="card h-100">
                <img class="card-img-top" src="${mealImage}" alt="">
                <div class="card-body">
                    <h5 id="card-title" class="card-title text-center">${mealTitle}</h5>
                </div>
            </div>
        </div>
        `;

    }
})
}


















/*
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => {
    console.log(data);
    for (let i = 0; i < data.categories.length; i++) {
        const categoriesTitle = data.categories[i].strCategory;
        const categoriesImage = data.categories[i].strCategoryThumb;
        console.log(categoriesTitle);
        console.log(categoriesImage);

        document.getElementById("search-result").innerHTML += `
        <div class="col-md-3">
            <div class="card h-100">
                <img class="card-img-top" src="${categoriesImage}" alt="">
                <div class="card-body">
                    <h5 id="card-title" class="card-title text-center">${categoriesTitle}</h5>
                </div>
            </div>
        </div>
        `;

        if(i == 7){
            break;
        }
    }
})
*/







/*
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayFood(data))
    
const displayFood = data =>{
    const categories = data.categories;
    const categories0 = data.categories[0];
    const categoriesImg = data.categories[0].strCategoryThumb;
    const categoriesTitle = data.categories[0].strCategory;
    

    document.getElementById("Img").innerHTML = `
    <img id="" src="${categoriesImg}" class="card-img-top" alt="...">
    `;
    document.getElementById("card-title").innerText = categoriesTitle;
    
    console.log(categoriesImg);
    console.log(categories0);
    //console.log(categories);
}
*/








// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
// .then(res => res.json())
// .then(data =>{
//     console.log('List 1', data);
// })
fetch('https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview')
.then(res => res.json())
.then(data =>{
    console.log('List img', data);
})


// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
// .then(res => res.json())
// .then(data =>{
//     const name = data.meals;
//     console.log('List 3', name[0]);



//     console.log('List 3', name[0].strMealThumb);
// })