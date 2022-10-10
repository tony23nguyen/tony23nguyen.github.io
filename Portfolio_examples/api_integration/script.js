
document.querySelector('button').addEventListener('click', getDrink)
document.querySelector('#dropDownDrinks').addEventListener('click',getDrink2)

function getDrink(){

    let drink = document.querySelector('#inputval1').value;
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) //parse response as JSON
    .then (data => {
        let drinksArr = data.drinks
        console.log(data)
        let main = data.drinks[0]
        document.querySelector('#slide1').src = main.strDrinkThumb
        document.querySelector('#drinkName').innerText = main.strDrink
        document.querySelector('p').innerText = main.strInstructions
        let ingredients = [
            [main.strMeasure1, main.strIngredient1],
            [main.strMeasure2, main.strIngredient2],
            [main.strMeasure3, main.strIngredient3],
            [main.strMeasure4, main.strIngredient4],
            [main.strMeasure5, main.strIngredient5],
            [main.strMeasure6, main.strIngredient6],
            [main.strMeasure7, main.strIngredient7],
            [main.strMeasure8, main.strIngredient8],
            [main.strMeasure9, main.strIngredient9],
            [main.strMeasure10, main.strIngredient10],
            [main.strMeasure11, main.strIngredient11],
            [main.strMeasure12, main.strIngredient12],
            [main.strMeasure13, main.strIngredient13],
            [main.strMeasure14, main.strIngredient14],
            [main.strMeasure15, main.strIngredient15],
            [main.strMeasure16, main.strIngredient16],
            [main.strMeasure17, main.strIngredient17],
        ]
       
        let element = document.getElementById("list1");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        let e = document.getElementById("dropDownDrinks");
        while (e.firstChild) {
          e.removeChild(e.firstChild);
        }

        var list = ''
        list = document.createElement("ol");
        for(i=0;i<ingredients.length;i++){
            if(ingredients[i][1]){
                let item = document.createElement('li'); 
                item.innerHTML = ingredients[i].join('');
                list.appendChild(item);
            }
        }
        let list2 = document.createElement("ul");
        for(i=0;i<drinksArr.length;i++){
            if(drinksArr[i]){
                let item = document.createElement('a'); 
                item.innerHTML = drinksArr[i].strDrink
                list2.appendChild(item);
            }
        }
        // let list2 = document.createElement("tr");
        // for(i=0;i<drinksArr.length;i++){
        //     if(drinksArr[i]){
        //         let item = document.createElement('td'); 
        //         item.innerHTML = drinksArr[i].strDrink;
        //         list2.appendChild(item);
        //     }
        // }
        document.getElementById('list1').appendChild(list)
        document.getElementById('dropDownDrinks').appendChild(list2)
        // document.getElementById('list2').appendChild(list2)
    })

//     .catch(err => {
//         console.log(`error ${err}`)
//     });
}

function getDrink2(){
    




    let drink = e.value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) //parse response as JSON
    .then (data => {
        let drinksArr = data.drinks
        console.log(data)
        let main = data.drinks[0]
        document.querySelector('img').src = main.strDrinkThumb
        document.querySelector('#drinkName').innerText = main.strDrink
        document.querySelector('p').innerText = main.strInstructions
        let ingredients = [
            [main.strMeasure1, main.strIngredient1],
            [main.strMeasure2, main.strIngredient2],
            [main.strMeasure3, main.strIngredient3],
            [main.strMeasure4, main.strIngredient4],
            [main.strMeasure5, main.strIngredient5],
            [main.strMeasure6, main.strIngredient6],
            [main.strMeasure7, main.strIngredient7],
            [main.strMeasure8, main.strIngredient8],
            [main.strMeasure9, main.strIngredient9],
            [main.strMeasure10, main.strIngredient10],
            [main.strMeasure11, main.strIngredient11],
            [main.strMeasure12, main.strIngredient12],
            [main.strMeasure13, main.strIngredient13],
            [main.strMeasure14, main.strIngredient14],
            [main.strMeasure15, main.strIngredient15],
            [main.strMeasure16, main.strIngredient16],
            [main.strMeasure17, main.strIngredient17],
        ]
       
        let element = document.getElementById("list1");
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        let e = document.getElementById("dropDownDrinks");
        while (e.firstChild) {
          e.removeChild(e.firstChild);
        }

        var list = ''
        list = document.createElement("ol");
        for(i=0;i<ingredients.length;i++){
            if(ingredients[i][1]){
                let item = document.createElement('li'); 
                item.innerHTML = ingredients[i].join('');
                list.appendChild(item);
            }
        }
        // let list2 = document.createElement("select");
        // for(i=0;i<drinksArr.length;i++){
        //     if(drinksArr[i]){
        //         let item = document.createElement('option'); 
        //         item.innerHTML = drinksArr[i].strDrink
        //         list2.appendChild(item);
        //     }
        // }
        for(element in drinksArr){
            var opt = document.createElement("option");
            opt.value= element.strDrink;
            opt.innerHTML = element; // whatever property it has

            // then append it to the select element
            newSelect.appendChild(opt);
            index++;
        }

        // then append the select to an element in the dom

        document.getElementById('list1').appendChild(list)
        // document.getElementById('dropDownDrinks').appendChild(list2)
        document.getElementById('dropDownDrinks').appendChild(list2)
        // document.getElementById('list2').appendChild(list2)
    })

//     .catch(err => {
//         console.log(`error ${err}`)
//     });
}

    