var cartList = [];
var currentItems = 0;
var data;
var CartItem = /** @class */ (function () {
    function CartItem(name, price) {
        this.name = name;
        this.price = price;
    }
    CartItem.prototype.disItem = function () {
        console.log("item cost " + this.price);
    };
    return CartItem;
}());
function addToCart(item, itemCost) {
    cartList.push(new CartItem(document.getElementById(item).innerHTML, document.getElementById(itemCost).innerHTML));
    console.log(cartList);
    localStorage.setItem("list", JSON.stringify(cartList));
    data = JSON.parse(localStorage.getItem("list"));
    console.log(data[0].name);
}
function createLoadTable() {
    var string = localStorage.getItem("list");
    var list = JSON.parse(string);
    console.log(list);
    var sum = 0;
    for (var y = 0; y < list.length; y++) {
        var table = document.getElementById("itemList");
        var body = table.getElementsByTagName("tbody")[0];
        var newrow = body.insertRow();
        sum = sum + parseFloat(list[y].price);
        var cell1 = newrow.insertCell(0);
        cell1.innerHTML = list[y].name;
        var cell2 = newrow.insertCell(1);
        cell2.innerHTML = list[y].price;
    }
    var total = sum;
    document.getElementById("total").innerHTML = JSON.stringify(total);
}
