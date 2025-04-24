function showCategory(category)
 {
    const contentBox = document.getElementById("categoryContent");
    let content = "";

    switch(category) {
        case "fruit":
            content = "<h3>Fruits</h3><ul><li>Apples</li><li>Bananas</li><li>Oranges</li></ul>";
            break;
        case "poultry":
            content = "<h3>Poultry</h3><ul><li>Chicken</li><li>Turkey</li><li>Duck</li></ul>";
            break;
        case "meat":
            content = "<h3>Meat</h3><ul><li>Beef</li><li>Pork</li><li>Lamb</li></ul>";
            break;
        case "beverage":
            content = "<h3>Beverages</h3><ul><li>Juice</li><li>Soft Drinks</li><li>Coffee</li></ul>";
            break;
        case "frozen":
            content = "<h3>Frozen Foods</h3><ul><li>Frozen Vegetables</li><li>Ice Cream</li><li>Frozen Meals</li></ul>";
            break;
        case "dietary":
            content = "<h3>Dietary Foods</h3><ul><li>Gluten-Free</li><li>Low-Carb</li><li>Vegan</li></ul>";
            break;
        case "kosher":
            content = "<h3>Kosher Foods</h3><ul><li>Kosher Beef</li><li>Kosher Dairy</li><li>Kosher Snacks</li></ul>";
            break;
        case "halal":
            content = "<h3>Halal Foods</h3><ul><li>Halal Chicken</li><li>Halal Beef</li><li>Halal Snacks</li></ul>";
            break;
    }

    contentBox.innerHTML = content;
}