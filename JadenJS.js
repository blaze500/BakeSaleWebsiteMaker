var Food=3;
var Creator=1;

/* Shows the buttons for the starting food and creator that needs them */
document.getElementById('FoodAddSubtractButtonSet3').style.display = 'flex';
document.getElementById('CreatorAddSubtractButtonSet1').style.display = 'flex';

/* Hides the creators and food */
hideFourm(Food,7,'Food');
hideFourm(Creator,4,'Creator');

/* Gives the add and remove button functions to the creator and food buttons */
AddRemoveButtonFunction(1,5,Creator,'Creator');
AddRemoveButtonFunction(1,10,Food,'Food');

/* Gives functionality to the submit button to allow for validations, form sumbission and making the website*/
document.getElementById('SubmitButton').onclick = function(){
  var errors = validateForms();
  if(errors.length ==0){
    SubmitForms(); 
    createWebsite(); 
    window.alert('Website Made!');
  }
  else{
  
    var text=``;
  
    for(var i=0; i<errors.length; i++){
      
      text += ``+ (i+1) +`. `+ errors[i] +`

`;
    
    }
    
    window.alert(text);
  
  }

};





/* Validates the form */
function validateForms(){

  /* Finds the number of the number of non hidden food and creator forms */
  var foodButtonNumber = new findNonHiddenButton('FoodAddSubtractButtonSet', 10).findNonHiddenButton();
  var creatorButtonNumber = new findNonHiddenButton('CreatorAddSubtractButtonSet', 5).findNonHiddenButton();


  var errorsReported = [];

  /* Validates the Website Banner form */
  if(document.getElementById('WebsiteName').value == ''){
    errorsReported.push('Website Name must be more than one character');
  }

  if((document.getElementById('WebsiteLogo').value.length > 0) && !document.getElementById('WebsiteLogo').value.includes("https://") && !document.getElementById('WebsiteLogo').value.includes(".") ){
     errorsReported.push('Website Logo Url be a link or be left blank');
  }




  /* Validates the Backgrounds form */
  if((document.getElementById('WebsiteBackground').value.length > 0) && !document.getElementById('WebsiteBackground').value.includes("https://") && !document.getElementById('WebsiteBackground').value.includes(".") ){
    errorsReported.push('Website Background Picture Url be a link or be left blank');
  }

  if((document.getElementById('PageBackground').value.length > 0) && !document.getElementById('PageBackground').value.includes("https://") && !document.getElementById('PageBackground').value.includes(".") ){
    errorsReported.push('Page Background Picture Url be a link or be left blank');
  }    





  /* Validates the Food forms */
  for(var i=1; i<=foodButtonNumber; i++){
    if(document.getElementById('Food'+i+'Input1').value == ''){
      errorsReported.push('Food Name in Food '+ i +' cannot be left blank');
    }

    if(!document.getElementById('Food'+i+'Input2').value.includes("https://") && !document.getElementById('Food'+i+'Input2').value.includes(".")){
      errorsReported.push('Food Picture Url in Food '+ i +' cannot be left blank');
    } 

    if((document.getElementById('Food'+i+'Input3').value.length > 0) && !document.getElementById('Food'+i+'Input3').value.includes("https://") && !document.getElementById('Food'+i+'Input3').value.includes(".")){
      errorsReported.push('Background Url in Food '+ i +' cannot be left blank and must be a URL');
    } 

    if(document.getElementById('Food'+i+'Input4').value == ''){
      errorsReported.push('Desciption Text in Food '+ i +' cannot be left blank');
    }

    if(document.getElementById('Food'+i+'Input5').value == ''){
      errorsReported.push('Allergy Text in Food '+ i +' cannot be left blank');
    }    

    if(((document.getElementById('Food'+i+'Input6').value.match(/^[0-9]+$/) != null && document.getElementById('Food'+i+'Input6').value.match(/^[a-zA-Z]+$/) == null) || (document.getElementById('Food'+i+'Input6').value != '')) == false){
      errorsReported.push('Price Per Item in Food '+ i +' cannot be left blank and must contain a number');
    }

  }
  


  /* Validates the Creator forms */
  for(var i=1; i<=creatorButtonNumber; i++){
    
    if(document.getElementById('Creator'+i+'Input1').value == ''){
      errorsReported.push('Name in Creator '+ i +' cannot be left blank');
    }

    if(!document.getElementById('Creator'+i+'Input2').value.includes("https://") && !document.getElementById('Creator'+i+'Input2').value.includes(".")){
      errorsReported.push('Picture Url in Creator '+ i +' cannot be left blank and must be a URL');
    }

    if(document.getElementById('Creator'+i+'Input3').value == ''){
      errorsReported.push('Description in Creator '+ i +' cannot be left blank');
    }

  }


  return errorsReported;   
}



/* Creates the Website made from the form inputs. This includes the HTML, CSS and JS */
function createWebsite(){

  /* Finds the number of the number of non hidden food and creator forms */
  var foodButtonNumber = new findNonHiddenButton('FoodAddSubtractButtonSet', 10).findNonHiddenButton();
  var creatorButtonNumber = new findNonHiddenButton('CreatorAddSubtractButtonSet', 5).findNonHiddenButton();

  /* Gets the Website Name and Logo */
   var name = document.getElementById('WebsiteName').value;
   var logo = document.getElementById('WebsiteLogo').value;


   /* Gets the website backgrounds */
   var websiteBackground = document.getElementById('WebsiteBackground').value;
   var pageBackground= document.getElementById('PageBackground').value;


   /*Downloads the HTML, CSS, and Javascript*/
   download('index.html', new OrderPage(foodButtonNumber, name, logo).CreateOrderPage());
   download('CreatorsPage.html', new CreatorsText(creatorButtonNumber, name, logo).CreateCreatorsPage());
   download('BakeSale.css', new CSStext(websiteBackground, pageBackground).CreateCss());
   download('BakeSaleJS.js', new JavascriptText(foodButtonNumber).CreateJavascript());
}



/* Creates the Javascript Text */
class JavascriptText{

  constructor(foodAmount){
    this.foodAmount=foodAmount;
  }
   
  CreateJavascript(){
    var javascript=`

    document.getElementById('SubmitButton').onclick = function(){window.alert('Order Made!');};

    `;

    var backgroundPics= [];

    /* Gets the background URLs */
    for(var i=1; i<=this.foodAmount; i++){
      backgroundPics.push(new FoodInformation(i).getFoodInformation()[2]);
    }


    /* Creates javascript to put the food background urls into the css/give them backgrounds */
    for(var i=0; i<backgroundPics.length; i++){
      var background = backgroundPics[i];
      
      if((background == '') || (background == undefined)){
        background='solid white';
      }
      else{
        background = '"url('+ background +')"';
      }

      var num=i+1;

      javascript += `
    document.getElementById('Food`+ num +`').style.background = `+ background +`;

    `;

    }

    return javascript;
  }

}



/* Creates the Order Page for the bake sale website */
class OrderPage{

  constructor(foodAmount, name, logo){
   this.foodAmount = foodAmount;
   this.name = name;
   this.logo = logo;
  }
  
  CreateOrderPage(){

    /* Makes the logo see through if there is not one*/
    if(this.logo==''){
      this.logo='solid white';
    }
    
    /*Creates the Page title, logo and nav bar*/
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
              
              <!-- Title -->
              <div class='HeadderBox' role='banner' aria-label='Page Title: Bake Sale Website' > <img src='`+ this.logo +`' class='logoImage'> <h1> `+ this.name +` </h1> <img src='`+ this.logo +`' class='logoImage'> </div>

              <!-- Nav Bar -->  
              <div class='PageContent' role='main' aria-label='Bake Sale Website'>    

                  <nav class='NavBar' aria-label='Navagation Bar'>
                      <a class='NavTab' href='index.html'>Order Page</a>
                      <a class='NavTab2' href='CreatorsPage.html'>Creators</a>
                  </nav>



  `;

    var allFood=[];
    
    /* Gets information from the Food form */
    for(var i=1; i<=this.foodAmount; i++){
      allFood.push(new FoodInformation(i).getFoodInformation());
    }

    /* Uses form information to make food on the order page */
    for(var i=0; i<allFood.length; i++){
      startOfPage= startOfPage + this.CreateFoodHTML(i+1, allFood[i][0], allFood[i][1], allFood[i][3], allFood[i][4], allFood[i][5]);
    }
    

    /*Creates the contact info, and submit button*/
  var restOfPage=`

                  <!-- Contact Form -->
                  <div class='FormType1' role='complementary' aria-label='Contact Information'>

                          <h3>Contact Info</h3>

                          <form class='InputFeild2' id='form3'>
                                <input class='ThirdInput' type='text' placeholder='Name' id='Food1Input1'>

                                <input class='ThirdInput' type='url' placeholder='Email' id=''>

                                <input class='ThirdInput' type='url' placeholder='Phone Number (optional)' id=''>

                          </form>

                  </div>


                  <!-- Submission Button -->
                  <div class='SubmitBox' role='complementary' aria-label='Submission Button'>
                      <button class='SubmitButton' id='SubmitButton'>Submit</button>
                  </div>



              </div>
          </div>
          <script src='BakeSaleJS.js'></script>
      </body>

  </html>
  `;
  return startOfPage+restOfPage;
  }



  CreateFoodHTML(foodNumber, FoodName, FoodPicUrl, DescriptionText, AllergyText, PricePerItem){

    /* Creates the FoodHTML Page */
    var pageHTML=`
                  
                  <!-- Form For Item `+ foodNumber +` -->
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


  return pageHTML;
}


}


class FoodInformation{

   constructor(foodNumber){
    this.foodNumber=foodNumber;
   }

   getFoodInformation(){
    
    var foodInfo=[];

    /*Gets the food information from the food form*/
    for(var i=1; i<=6; i++){
      foodInfo.push(document.getElementById('Food'+ this.foodNumber +'Input'+ i).value); 
    } 
    
    return foodInfo;
  }

}





class CreatorsText{

  constructor(creatorAmount, name, logo){
    this.creatorAmount = creatorAmount;
    this.name = name;
    this.logo = logo;
  }

  CreateCreatorsPage(){

    /* Makes the logo see through if there is not one*/
    if(this.logo==''){
      this.logo='solid white';
    }

    /*Creates the Page title, logo and nav bar*/
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

             <!-- Title -->
             <div class='HeadderBox' role='banner' aria-label='Page Title: Bake Sale Website Maker'> <img src='`+ this.logo +`' class='logoImage'> <h1> `+ this.name +` </h1> <img src='`+ this.logo +`' class='logoImage'> </div>

             <!-- Nav Bar -->
              <div class='PageContent' role='main' aria-label='Bake Sale Website'>                    

                  <nav class='NavBar' aria-label='Navagation Bar'>
                      <a class='NavTab' href='index.html'>Order Page</a>
                      <a class='NavTab2' href='CreatorsPage.html'>Creators</a>
                  </nav>




                <!-- Subtitle -->
                <div class='SubTitle3' role='complementary' aria-label='Please Put In The Information'>

                      <h2>Creators Of This Website</h2>

                  </div>


                  <div class='autoSizeBox'>
  `;

    var allCreators=[];

    /* Gets the creator information from the creator form */
    for(var i=1; i<= this.creatorAmount; i++){
      allCreators.push(new CreatorInformation(i).getCreatorInformation());
    }

    /* Creates the creator html */
    for(var i=0; i<allCreators.length; i++){
      startOfPage = startOfPage + this.CreateCreatorHTML(i+1, allCreators[i][0], allCreators[i][1], allCreators[i][2]);
    }
  
  /* Puts the rest of the html in to end the page*/
  var restOfPage=`


                </div>




              </div>
          </div>
      </body>

  </html>

  `;

  return startOfPage+restOfPage;
  
  }


  CreateCreatorHTML(num, name, source, description){

    /*Creates the CSS card layout for the creator*/
    var creatorCard =`
                    <!-- Card Layout For Person `+ num +` -->
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


}





/* Gets creator inormation from creator forms */
class CreatorInformation{
   
   constructor(number){
    this.number=number;
   }

   getCreatorInformation(){
    
    var creatorInfo=[];

    /* Gets creator inormation from creator forms */
    for(var i=1; i<=3; i++){
      creatorInfo.push(document.getElementById('Creator'+this.number+'Input'+ i).value); 
    }

    return creatorInfo;
  }

}





class CSStext{

  constructor(WebsiteBackground, PageBackground){
    this.WebsiteBackground = WebsiteBackground;
    this.PageBackground = PageBackground;
  }

  CreateCss(){

    var websiteBackground= "url('"+ this.WebsiteBackground +"')";
    var pageBackground= "url('"+ this.PageBackground +"')";

    /*Creates the CSS for the pages*/
    var css=`
  /* Phone Screen Css */
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
      background: white;
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

    }

    .FoodAmountInput{
      width: 95%;
      height: 25%;
    }


    .PageContent{
      background: `+ pageBackground +`;
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
      background: `+ websiteBackground +`;    
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
      background: white;
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


  /* Tablet Screen Css */
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
      background: white;
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

    }

    .FoodAmountInput{
      width: 95%;
      height: 25%;
    }


    .PageContent{
      background: `+ pageBackground +`;
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
      background: `+ websiteBackground +`;
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
      background: white;
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

      background: white;
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


  /* Website Screen Css */
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
      background: white;
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

    }

    .FoodAmountInput{
      width: 95%;
      height: 25%;
    }


    .PageContent{
      background: `+ pageBackground +`;
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
      background: `+ websiteBackground +`;
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
      background: white;
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
      background: white;
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
      padding-left: 2%;
      padding-right: 2%;
      border-left: 3px solid black;
      border-right: 3px solid black;
    }


  }
    `;

    return css;
  }

}

/*Hides the forms*/
function hideFourm(StartFrom, NumberWantedHidden, VarName){
  for(var i=1; i<=NumberWantedHidden; i++){
    var k = i+StartFrom;
    var name = VarName + k;
    document.getElementById(name).style.display = 'none';
  }
}



/* Submits the forms */
function SubmitForms(){

  /* Finds the number of the number of non hidden food and creator forms */
  var foodButtonNumber = new findNonHiddenButton('FoodAddSubtractButtonSet', 10).findNonHiddenButton();
  var creatorButtonNumber = new findNonHiddenButton('CreatorAddSubtractButtonSet', 5).findNonHiddenButton();

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


/* Adds the remove and add functions to each of the buttons */
function AddRemoveButtonFunction(min, max, current, itemName){
  
  var addName= itemName + 'AddButton' + current;
  document.getElementById(addName).onclick = function(){ AddFuntion(min, max, current, itemName); };

  var removeName= itemName + 'RemoveButton' + current;
  document.getElementById(removeName).onclick = function(){ RemoveFuntion(min, max, current, itemName); };

}


/* Adds the add function to the add button */
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


/* Adds the remove function to the remove button */
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




/* Download function to download nearly any file type (in our case, CSS, HTML, and Javascript) */
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}



/* Finds the only button that isn't hidden */
class findNonHiddenButton{
  
  constructor(name, numberOf){
    this.name = name;
    this.numberOf = numberOf;

  }

   findNonHiddenButton(){

    for(var i=1; i<=this.numberOf; i++){
      
      var NameOfId = this.name + i;

      if(document.getElementById(NameOfId).style.display == 'flex'){
        return i;
      }

    }
    return -999;

  }

}
