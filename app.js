/*
Using all arrow function.
Using 1 forEach loop. 
Using 1 addEventListener.
Using JavaScript template strings.
*/

// main / meals result function .
const mealsResult = () => {
    document.getElementById("search-result").innerHTML = '';
    const searchName = document.getElementById("search-title").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
        .catch(error => {
            document.getElementById("search-result").innerHTML = `
            <div class="custom-design">
                <span class="error"><i class="fas fa-exclamation-triangle"></i></span>
                <h3>Sorry, "${searchName}" meals could not be found. Please try again..</h3>
            </div>
        `;
        document.getElementById("singleMealDetails").style.display = "none";
        })

    // Display search result function
    const displaySearchResult = meals => {
        // added forEach loop
        meals.forEach(mealNam => {
            //template strings added
            document.getElementById("search-result").innerHTML += `
                <div class="col-md-3 custom-css text-center" onclick="renderMealsInfo('${mealNam.strMealThumb}', '${mealNam.strCategory}', '${mealNam.strIngredient1}', '${mealNam.strIngredient2}', '${mealNam.strIngredient3}', '${mealNam.strIngredient4}', '${mealNam.strIngredient5}', '${mealNam.strIngredient6}', '${mealNam.strIngredient7}', '${mealNam.strIngredient8}', '${mealNam.strIngredient9}', '${mealNam.strIngredient10}')">
                    <div class="card h-100">
                        <img class="card-img-top" src="${mealNam.strMealThumb}" alt="">
                        <div class="card-body">
                            <h5 id="card-title" class="card-title text-center">${mealNam.strCategory}</h5>
                        </div>
                    </div>
                </div>
             `;
        });
    }   
}


// Search button addEventListener and call main function.
document.getElementById("search-btn").addEventListener("click", mealsResult);

// single meals info function
const renderMealsInfo = (mealNam, mealNam2, mealNam3, mealNam4, mealNam5, mealNam6, mealNam7, mealNam8, mealNam9, mealNam10, mealNam11, mealNam12) => {
    const singleMealDetails = document.getElementById("singleMealDetails");
    //singleMealDetails.style.display = "block";
    singleMealDetails.innerHTML = `
        <img class="card-img-top pb-3" src="${mealNam}" alt="">
        <h3 id="" class="card-title pl-4">${mealNam2}</h3>
        <h5 id="" class="card-text pl-4 pb-2">${mealNam3}</h5>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealNam4}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealNam5}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealNam6}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealNam7}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealNam8}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealNam9}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealNam10}</p>
        <p class="pl-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealNam11}</p>
        <p class="pl-4 pb-4"> <span class="icon"><i class="fas fa-check"></i></span> ${mealNam12}</p>
    `;
}

