var Food=3;
var Creator=1;

document.getElementById('FoodAddSubtractButtonSet3').style.display = 'flex';
document.getElementById('CreatorAddSubtractButtonSet1').style.display = 'flex';

hideFourm(3,7,'Food');
hideFourm(1,4,'Creator');

AddRemoveButtonFunction(1,5,Creator,'Creator');
AddRemoveButtonFunction(1,10,Food,'Food');

document.getElementById('SubmitButton').onclick = function(){SubmitForms(); createWebsite(); window.alert('Website Made!');};




function createWebsite(){
  var foodButtonNumber = findNonHiddenButton('FoodAddSubtractButtonSet', 10);
  console.log(foodButtonNumber);

  var creatorButtonNumber = findNonHiddenButton('CreatorAddSubtractButtonSet', 5);

   var name = document.getElementById('WebsiteName').value;
   var logo = document.getElementById('WebsiteLogo').value;

   var websiteBackground = document.getElementById('WebsiteBackground').value;
   var pageBackground= document.getElementById('PageBackground').value;

   download('index.html', CreateOrderPage(foodButtonNumber, name, logo));
   download('CreatorsPage.html', CreateCreatorsPage(creatorButtonNumber, name, logo));
  download('BakeSale.css', CreateCss(WebsiteBackground, PageBackground));

   /*
   CreateJavascript(foodButtonNumber);
   */
}


function CreateJavascript(foodAmount){
  var javascript=`
  `;
}


function CreateCss(WebsiteBackground, PageBackground){
  
  var css=`
@media only screen and (max-width: 480px) {
  .logoImage{
    width: 10vh;
    height: 10vh;
  }

  body{
    height: auto;
    width: 99%;
  }

  .FoodPic{
    width: 22%;
    height: 90%;
    padding-bottom: 1%;
    padding-top: 1%;
    padding-left: 1%;
    padding-right: 1%;
  }


  .OrderItem{
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: Row;
    height: 36vh;
    width: 100%;
    background-color: white;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }



  .FoodContent{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 36vh;
    width: 74.5%;
    background-color: white;
   
  }

  .FoodTitle{
     justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    width: 100%;
  }


  .FoodDescriptions{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    height: 36vh;
    width: 100%;
    background-color: white;
    font-size: 2vw;
  }


  .FoodDescriptionBox{
     justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33.3%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: white;

  }

  .FoodDescriptionBox2{
     justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33.3%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: white;

  }

  .FoodAmountInput{
    width: 95%;
    height: 25%;
  }


  .PageContent{
    background: `+ PageBackground +`;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
    margin-bottom: 2%;
  }

  .Background{
    background: `+ WebsiteBackground +`;    
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

  }

  .HeadderBox {
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    background-color: #fefefe;
    width: 90%; 
    height: 12vh; 
    border: 3px solid black;
    margin-top: 2%;
  }

  .NavBar {
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    background-color: #fefefe;
    width: 100%; 
    height: 6vh; 
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  .NavTab{
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    width: 49.99%;
    height: 100%;
    color: white;
    background-color: #000;
    text-decoration: none;
    border-right: 1.5px solid white;
    font-size: 3vw;
  }

  .NavTab2{
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    width: 49.99%;
    height: 100%;
    color: white;
    background-color: #000;
    text-decoration: none;
    border-left: 1.5px solid white;
    font-size: 3vw;
  }

  .NavTab:hover:not(.active), .NavTab2:hover:not(.active){
    background-color: #555;
  }



  .SubTitle{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 9vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  .FormType1{
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 18vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  .InputFeild1{
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    height: 9vh;
    width: 100%;
  }

  .HalfInput{
    width: 44%;
    height: 60%;
    font-size: 2vw;
    border-radius: 2%;
  }

  .InputFeild2{
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    height: 10vh;
    width: 100%;
  }


  .ThirdInput{
    width: 27%;
    height: 55%;
    font-size: 2vw; 
    border-radius: 2%;
  }



  .SubmitBox{
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 10vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  .SubmitButton{
    width: 80%;
    height: 60%;
  }

  .DropDownForm{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;
  }
  
  .NumberDropDown{
    height: 20%;
    width: 80%;
  }

  .autoSizeBox{
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    height: auto;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-bottom: 2%;
    padding-right: 2%;
    border-left: 3px solid black;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
  }

  .CardImage{
    width: 100%;
    height: 64vw;
  }

  .Card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 80%;
    height: auto;
    border: 3px solid black;
    margin: 3%;
  }

  .Card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .CardInformation {
    padding-right: 4%;
    padding-left: 4%;
  }

  .PersonName{
    font-size: 2vw;
    font-weight: bold;
  }

  .CardText{
    font-size: 2vw;

  }



  .SubTitle2{
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 9vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  .SubTitle3{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 9vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  h1{
    font-size: 5vw;
  }
  h2{
    font-size: 4vw;
  }
  h3{
    font-size: 3vw;
  }

}












@media only screen and (max-width: 872px) {

  .logoImage{
    width: 10vh;
    height: 10vh;
  }

  body{
    height: auto;
    width: 99%;
  }

  .FoodPic{
    width: 22%;
    height: 90%;
    padding-bottom: 1%;
    padding-top: 1%;
    padding-left: 1%;
    padding-right: 1%;
  }


  .OrderItem{
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: Row;
    height: 36vw;
    width: 100%;
    background-color: white;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }



  .FoodContent{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 36vw;
    width: 74.5%;
    background-color: white;
   
  }

  .FoodTitle{
     justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    width: 100%;
  }


  .FoodDescriptions{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    height: 36vw;
    width: 100%;
    background-color: white;
    font-size: 2vw;
  }


  .FoodDescriptionBox{
     justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33.3%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: white;

  }

  .FoodDescriptionBox2{
     justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33.3%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: white;

  }

  .FoodAmountInput{
    width: 95%;
    height: 25%;
  }


  .PageContent{
    background: `+ PageBackground +`;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
    margin-bottom: 2%;

  }

  .Background{
    background: `+ WebsiteBackground +`;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

  }

  .HeadderBox {
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    background-color: #fefefe;
    width: 90%; 
    height: 12vh; 
    border: 3px solid black;
    margin-top: 2%;
  }

  .NavBar {
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    background-color: #fefefe;
    width: 100%; 
    height: 6vh; 
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  .NavTab{
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    width: 49.99%;
    height: 100%;
    color: white;
    background-color: #000;
    text-decoration: none;
    border-right: 1.5px solid white;
    font-size: 3vw;
  }

  .NavTab2{
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    width: 49.99%;
    height: 100%;
    color: white;
    background-color: #000;
    text-decoration: none;
    border-left: 1.5px solid white;
    font-size: 3vw;
  }

  .NavTab:hover:not(.active), .NavTab2:hover:not(.active){
    background-color: #555;
  }



  .SubTitle{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 9vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  .FormType1{
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 18vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  .InputFeild1{
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    height: 9vh;
    width: 100%;
  }

  .HalfInput{
    width: 47%;
    height: 60%;
    border-radius: 2%;
  }


  .InputFeild2{
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    height: 10vh;
    width: 100%;
  }

  .ThirdInput{
    width: 30%;
    height: 55%; 
    border-radius: 2%;
  }


  .SubmitBox{
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 10vh;
    width: 96%;

    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  .SubmitButton{
    width: 80%;
    height: 60%;
  }
  .DropDownForm{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 100%;
  }
  
  .NumberDropDown{
    height: 20%;
    width: 80%;
  }

  .autoSizeBox{
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    height: auto;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-bottom: 2%;
    padding-right: 2%;
    border-left: 3px solid black;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
  }

  .CardImage{
    width: 100%;
    height: auto;
  }

  .Card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 80%;
    height: auto;
    border: 3px solid black;
    margin: 3%;
  }

  .Card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .CardInformation {
    padding-right: 4%;
    padding-left: 4%;
  }

  .PersonName{
    font-size: 2vw;
    font-weight: bold;
  }

  .CardText{
    font-size: 2vw;

  }


  .SubTitle2{
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 9vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  .SubTitle3{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 9vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  h1{
    font-size: 5vw;
  }
  h2{
    font-size: 4vw;
  }
  h3{
    font-size: 3vw;
  }
}
























@media only screen and (min-width: 873px) {
  
  .logoImage{
    width: 10vh;
    height: 10vh;
  }

  body{
    height: auto;
    width: 99%;
  }

  .FoodPic{
    width: 22%;
    height: 90%;
    padding-bottom: 1%;
    padding-top: 1%;
    padding-left: 1%;
    padding-right: 1%;
  }


  .OrderItem{
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: Row;
    height: 36vh;
    width: 100%;
    background-color: white;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }



  .FoodContent{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 36vh;
    width: 74.5%;
    background-color: white;
   
  }

  .FoodTitle{
     justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    width: 100%;
  }


  .FoodDescriptions{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    height: 36vh;
    width: 100%;
    background-color: white;
  }


  .FoodDescriptionBox{
     justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33.3%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: white;

  }

  .FoodDescriptionBox2{
     justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 33.3%;
    padding-left: 2%;
    padding-right: 2%;
    background-color: white;

  }

  .FoodAmountInput{
    width: 95%;
    height: 25%;
  }


  .PageContent{
    background: `+ PageBackground +`;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
    margin-bottom: 2%;

  }

  .Background{
    background: `+ WebsiteBackground +`;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

  }

  .HeadderBox {
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    background-color: #fefefe;
    width: 90%; 
    height: 12vh; 
    border: 3px solid black;
    margin-top: 2%;
  }

  .NavBar {
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    background-color: #fefefe;
    width: 100%; 
    height: 6vh; 
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  .NavTab{
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    width: 49.99%;
    height: 100%;
    color: white;
    background-color: #000;
    text-decoration: none;
    border-right: 1.5px solid white;
  }

  .NavTab2{
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    width: 49.99%;
    height: 100%;
    color: white;
    background-color: #000;
    text-decoration: none;
    border-left: 1.5px solid white;
  }

  .NavTab:hover:not(.active), .NavTab2:hover:not(.active){
    background-color: #555;
  }



  .SubTitle{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 9vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  .FormType1{
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 18vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  .InputFeild1{
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    height: 9vh;
    width: 100%;
  }

  .HalfInput{
    width: 47%;
    height: 60%;
  }

  .InputFeild2{
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    height: 10vh;
    width: 100%;
  }

  .ThirdInput{
    width: 30%;
    height: 55%; 
  }


  .SubmitBox{
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 10vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-bottom: 3px solid black;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }

  .SubmitButton{
    width: 80%;
    height: 60%;
  }
  
  .DropDownForm{
    height: 100%;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
  }
  
  .NumberDropDown{
    height: 25%;
    width: 50%;
  }


  .autoSizeBox{
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    height: auto;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-bottom: 2%;
    padding-right: 2%;
    border-left: 3px solid black;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
  }

  .CardImage{
    width: 100%;
    height: 32vw;
  }

  .Card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 41%;
    height: auto;
    border: 3px solid black;
    margin: 3%;
  }

  .Card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .CardInformation {
    padding-right: 4%;
    padding-left: 4%;
  }

  .PersonName{
    font-size: 1.5vw;
    font-weight: bold;
  }

  .CardText{
    font-size: 1.5vw;
  }



  .SubTitle2{
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 9vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


  .SubTitle3{
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    height: 9vh;
    width: 96%;
    background-color: white;
    padding-left: 2%;
    padding-right: 2%;
    border-left: 3px solid black;
    border-right: 3px solid black;
  }


}
  `;

  return css;
}

function CreateFoodHTML(foodNumber, FoodName, FoodPicUrl, DescriptionText, AllergyText, PricePerItem){
    var pageHTML=`

                  <div class='OrderItem' id='Food`+ foodNumber + `' role='complementary' aria-label='Food `+ foodNumber +` Information Form'>
                      
                      
                      <img src='`+ FoodPicUrl +`' class='FoodPic' alt='Picture of Food `+ foodNumber +`' aria-label='Picture of Food `+ foodNumber +`'>

                      <div class='FoodContent'>

                          <div class='FoodTitle'>
                              <h2>`+ FoodName +`</h2>
                          </div>
                          
                          <div class='FoodDescriptions'>

                              <div class='FoodDescriptionBox'>

                                  <p>Description: `+ DescriptionText +`</p>
                                  
                              </div>



                              <div class='FoodDescriptionBox'>

                                  <p>Allergies: `+ AllergyText +`</p>
                                  
                              </div>



                              <div class='FoodDescriptionBox2'>

                                  <p>Price Per Item: `+ PricePerItem +`$</p>
                                  <form class='DropDownForm'>
                                  <select name='NumberDropDown' aria-label='DropDown For Prices `+ foodNumber +`' id='DropDown`+ foodNumber +`' class='NumberDropDown'>
                                  <option value='0'>0</option>
                                  <option value='1'>1</option>
                                  <option value='2'>2</option>
                                  <option value='3'>3</option>
                                  <option value='4'>4</option>
                                  <option value='5'>5</option>
                                  <option value='6'>6</option>
                                  <option value='7'>7</option>
                                  <option value='8'>8</option>
                                  <option value='9'>9</option>
                                  <option value='10'>10</option>
                                  </select>
                                  </form>
                                  
                              </div>

                          </div>

                      </div>

                  </div>
`;

                  console.log(pageHTML);

  return pageHTML;
}


function CreateOrderPage(foodAmount, name, logo){
  var startOfPage=`
<!DOCTYPE html>
<html lang='en'>

<head> 
    
    <title>Bake Sale Order Page</title>
    
    <meta name='description' content='This is the ordering page fo this Bake Sale Website'>

    <meta charset='UTF-8'>
    
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>

    <meta name='author' content='Jaden'>

    <link rel='stylesheet' href='BakeSale.css' />

</head>
        


    
    <body>

        <div class='Background'>

            <div class='HeadderBox' role='banner' aria-label='Page Title: Bake Sale Website' > <img src='`+ logo +`' class='logoImage'> <h1> `+ name +` </h1> <img src='`+ logo +`' class='logoImage'> </div>
            
            <div class='PageContent' role='main' aria-label='Bake Sale Website'>    

                <nav class='NavBar' aria-label='Navagation Bar'>
                    <a class='NavTab' href='index.html'>Make Website</a>
                    <a class='NavTab2' href='CreatorsPage.html'>Creators</a>
                </nav>



`;

  var allFood=[];
  
  for(var i=1; i<=foodAmount; i++){
    allFood.push(getFoodInformation(i));
  }

  for(var i=0; i<allFood.length; i++){
    startOfPage= startOfPage + CreateFoodHTML(i+1, allFood[i][0], allFood[i][1], allFood[i][3], allFood[i][4], allFood[i][5]);
  }
  

var restOfPage=`

                <div class='FormType1' role='complementary' aria-label='Contact Information'>

                        <h3>Contact Info</h3>

                        <form class='InputFeild2' id='form3'>
                              <input class='ThirdInput' type='text' placeholder='Name' id='Food1Input1'>

                              <input class='ThirdInput' type='url' placeholder='Email' id=''>

                              <input class='ThirdInput' type='url' placeholder='Phone Number (optional)' id=''>

                        </form>

                </div>


                <div class='SubmitBox' role='complementary' aria-label='Submission Button'>
                    <button class='SubmitButton' id='SubmitButton'>Submit</button>
                </div>



            </div>
        </div>
        <script src='JadenJS.js'></script>
    </body>

</html>
`;
return startOfPage+restOfPage;
}


function getFoodInformation(foodNumber){
  var foodInfo=[];
  for(var i=1; i<=6; i++){
    foodInfo.push(document.getElementById('Food'+foodNumber+'Input'+ i).value); 
  } 
  return foodInfo;
}











function CreateCreatorsPage(creatorAmount, name, logo){
  var startOfPage=`

<!DOCTYPE html>
<html lang='en'>

<head> 
    
    <title>Bake Sale Website Creator Page</title>
    
    <meta name='description' content='This is to look at the creators of this website'>

    <meta charset='UTF-8'>
    
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>

    <meta name='author' content='Jaden'>

    <link rel='stylesheet' href='BakeSale.css' />

</head>
        


    
    <body>

        <div class='Background'>

           <div class='HeadderBox' role='banner' aria-label='Page Title: Bake Sale Website Maker'> <img src='`+ logo +`' class='logoImage'> <h1> `+ name +` </h1> <img src='`+ logo +`' class='logoImage'> </div>

            <div class='PageContent' role='main' aria-label='Bake Sale Website'>                    

                <nav class='NavBar' aria-label='Navagation Bar'>
                    <a class='NavTab' href='index.html'>Make Website</a>
                    <a class='NavTab2' href='CreatorsPage.html'>Creators</a>
                </nav>



              <div class='SubTitle3' role='complementary' aria-label='Please Put In The Information'>

                    <h2>Creators Of This Website</h2>

                </div>


                <div class='autoSizeBox'>
`;

  var allCreators=[];
  
  for(var i=1; i<=creatorAmount; i++){
    allCreators.push(getCreatorInformation(i));
  }

  for(var i=0; i<allCreators.length; i++){
    startOfPage= startOfPage + CreateCreatorHTML(i+1, allCreators[i][0], allCreators[i][1], allCreators[i][2]);
  }
  

var restOfPage=`


              </div>




            </div>
        </div>
        <script src='JadenJS.js'></script>
    </body>

</html>

`;

return startOfPage+restOfPage;
}







function getCreatorInformation(number){
  var creatorInfo=[];
  for(var i=1; i<=3; i++){
    creatorInfo.push(document.getElementById('Creator'+number+'Input'+ i).value); 
  } 
  return creatorInfo;
}


function CreateCreatorHTML(num, name, source, description){
  var creatorCard =`
                  <div class='Card'  role='complementary' aria-label='A Card Of Creator Number `+ num +` '>
                    
                    <img src='`+ source +`'  alt='A Picture Creator Number `+ num +` ' aria-label='A Picture Creator Number `+ num +` ' class='CardImage'>

                    <div class='CardInformation'>
                      <p class='PersonName'>`+ name +`</p> 
                      <p class='CardText'>`+ description+`</p>
                       
                    </div>
                  </div>
  `
  return creatorCard;
}





function SubmitForms(){

  var foodButtonNumber = findNonHiddenButton('FoodAddSubtractButtonSet', 10);

  var creatorButtonNumber = findNonHiddenButton('CreatorAddSubtractButtonSet', 5);

  document.getElementById('form1').submit();
  document.getElementById('form2').submit();
  
  for(var i=3; i<=foodButtonNumber*2; i++){
    var idName='form'+i;
    document.getElementById(idName).submit();
  }

  for(var i=23; i<=22+creatorButtonNumber; i++){
    var idName='form'+i;
    document.getElementById(idName).submit();
  }



}

function findNonHiddenButton(name, numberOf){

  for(var i=1; i<=numberOf; i++){
    
    var NameOfId = name + i;

    if(document.getElementById(NameOfId).style.display == 'flex'){
      return i;
    }

  }
  return -999;

}


function hideFourm(StartFrom, NumberWantedHidden, VarName){
  for(var i=1; i<=NumberWantedHidden; i++){
    var k = i+StartFrom;
    var name = VarName + k;
    document.getElementById(name).style.display = 'none';
  }
}

function AddRemoveButtonFunction(min, max, current, itemName){
  
  var addName= itemName + 'AddButton' + current;
  document.getElementById(addName).onclick = function(){ AddFuntion(min, max, current, itemName); };

  var removeName= itemName + 'RemoveButton' + current;
  document.getElementById(removeName).onclick = function(){ RemoveFuntion(min, max, current, itemName); };

}

function AddFuntion(min, max, current, itemName){

  if(current==max){
    window.alert('You cannot have more than ' + current + ' ' + itemName + 's!');
  }

  else{

    var nextItem= current + 1;

    var name= itemName + nextItem;

    document.getElementById(name).style.display = 'flex';

    var nextButtonName= itemName + 'AddSubtractButtonSet' + nextItem;
    document.getElementById(nextButtonName).style.display = 'flex';

    var addButton = itemName+'AddButton'+ nextItem;
    document.getElementById(addButton).onclick = function(){ AddFuntion(min, max, nextItem, itemName); };

    var subtractButton = itemName+'RemoveButton'+ nextItem;
    document.getElementById(subtractButton).onclick = function(){ RemoveFuntion(min, max, nextItem, itemName); };

    var currentButtonsName= itemName + 'AddSubtractButtonSet' + current;
    document.getElementById(currentButtonsName).style.display = 'none';
  }

}


function RemoveFuntion(min, max, current, itemName){

  if(current==min){
    window.alert('You cannot have less than ' + current + ' ' + itemName + '!');
  }
  
  else{ 

    var nextItem= current - 1;

    var name= itemName + current;

    document.getElementById(name).style.display = 'none';

    var nextButtonName= itemName + 'AddSubtractButtonSet' + nextItem;
    document.getElementById(nextButtonName).style.display = 'flex';

    var addButton = itemName+'AddButton'+ nextItem;
    document.getElementById(addButton).onclick = function(){ AddFuntion(min, max, nextItem, itemName); };

    var subtractButton =  itemName+'RemoveButton'+ nextItem;
    document.getElementById(subtractButton).onclick = function(){ RemoveFuntion(min, max, nextItem, itemName); };

    var currentButtonsName= itemName + 'AddSubtractButtonSet' + current;
    document.getElementById(currentButtonsName).style.display = 'none';
  }

}



function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
