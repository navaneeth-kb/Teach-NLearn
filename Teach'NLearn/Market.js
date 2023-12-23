let buyNum = 1;

function removeDiv(element) {
	element.parentNode.removeChild(element);
	buyNum--;
}

function addDiv(text) {
    var newDiv = document.createElement('div');
    newDiv.textContent = text;
	buyNum++;
	newDiv.setAttribute('onclick', 'removeDiv(this)');
    document.querySelector('.innerCart').appendChild(newDiv);
}

document.querySelectorAll('.sellDiv > div').forEach(function(sellDiv) {
    sellDiv.addEventListener('click', function() {
        var textContent = this.querySelector('.text-container h3').textContent;
        addDiv(textContent);
    });
});

function buyBtn() {
	if (buyNum != 0) {
		alert(buyNum + " items from the Cart Bought!!");
	} else {
		alert("No items in Cart!!");
	}
}