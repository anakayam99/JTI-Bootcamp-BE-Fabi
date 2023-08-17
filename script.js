let data = {};

function selectOption() {
    let dropdown = document.getElementById("dropdown"); }
function selectColor() {
    let color = document.getElementById("color");}
function capitalize() {
    let username = document.getElementById("username");
    let username_cap = username.Uppercase()

}
document.getElementById("but").addEventListener("click", function click(){ 
    data.name = document.getElementById('username').value
    data.age = document.getElementById('dropdown').value
    data.color = document.getElementById('color').value
        console.table(data);    
});