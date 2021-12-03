var Food=3;
var Creator=1;

document.getElementById('FoodAddSubtractButtonSet3').style.display = 'flex';
document.getElementById('CreatorAddSubtractButtonSet1').style.display = 'flex';

hideFourm(3,7,'Food');
hideFourm(1,4,'Creator');

AddRemoveButtonFunction(1,5,Creator,'Creator');
AddRemoveButtonFunction(1,10,Food,'Food');

document.getElementById('SubmitButton').onclick = function(){

  SubmitForms(); 
  createWebsite(); 
  window.alert('Website Made!');

};



function validateForms(){

  var errorsReported = [];

  if(document.getElementById('WebsiteName').value == ''){
    errorsReported.push('WebsiteName must be more than one character');
  }

  if((document.getElementById('WebsiteLogo').value.length > 0) && !document.getElementById('WebsiteLogo').value.includes("https://") && !document.getElementById('WebsiteLogo').value.includes(".") ){
     errorsReported.push('Website Logo Url be a link or be left blank');
  }

  if((document.getElementById('WebsiteBackground').value.length > 0) && !document.getElementById('WebsiteBackground').value.includes("https://") && !document.getElementById('WebsiteBackground').value.includes(".") ){
    errorsReported.push('Website Background Picture Url be a link or be left blank');
  }

  if((document.getElementById('PageBackground').value.length > 0) && !document.getElementById('PageBackground').value.includes("https://") && !document.getElementById('PageBackground').value.includes(".") ){
    errorsReported.push('Page Background Picture Url be a link or be left blank');
  }    

  document.getElementById('PageBackground').value    




  if(document.getElementById('').value == ''){}
  document.getElementById('Food1Input1').value 
  if(!document.getElementById('Food1Input2').value.includes("https://") && !document.getElementById('Food1Input2').value.includes(".")){}       
  if((document.getElementById('Food1Input3').value.length > 0) && !document.getElementById('Food1Input3').value.includes("https://") && !document.getElementById('Food1Input3').value.includes(".")){}    
  if(document.getElementById('Food1Input4').value == ''){}
  if(document.getElementById('Food1Input5').value == ''){}    
  if(document.getElementById('Food1Input6').value.match(/^[0-9]+$/) != null){}

  if(document.getElementById('').value == ''){}
  document.getElementById('Food2Input1').value 
  if(!document.getElementById('Food2Input2').value.includes("https://") && !document.getElementById('Food2Input2').value.includes(".")){}   
  if((document.getElementById('Food2Input3').value.length > 0) && !document.getElementById('Food2Input3').value.includes("https://") && !document.getElementById('Food2Input3').value.includes(".")){}   
  if(document.getElementById('').value == ''){}
  document.getElementById('Food2Input4').value    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food2Input5').value 
  if(document.getElementById('Food2Input6').value.match(/^[0-9]+$/) != null){}   

  if(document.getElementById('').value == ''){}
  document.getElementById('Food3Input1').value
  if(!document.getElementById('Food3Input2').value.includes("https://") && !document.getElementById('Food3Input2').value.includes(".")){}    
  if((document.getElementById('Food3Input3').value.length > 0) && !document.getElementById('Food3Input3').value.includes("https://") && !document.getElementById('Food3Input3').value.includes(".")){}     
  if(document.getElementById('').value == ''){}
  document.getElementById('Food3Input4').value    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food3Input5').value
  if(document.getElementById('Food3Input6').value.match(/^[0-9]+$/) != null){}    

  if(document.getElementById('').value == ''){}
  document.getElementById('Food4Input1').value    
  if(!document.getElementById('Food4Input2').value.includes("https://") && !document.getElementById('Food4Input2').value.includes(".")){}
  if((document.getElementById('Food4Input3').value.length > 0) && !document.getElementById('Food4Input3').value.includes("https://") && !document.getElementById('Food4Input3').value.includes(".")){}     
  if(document.getElementById('').value == ''){}
  document.getElementById('Food4Input4').value    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food4Input5').value    
  if(document.getElementById('Food4Input6').value.match(/^[0-9]+$/) != null){}

  if(document.getElementById('').value == ''){}
  document.getElementById('Food5Input1').value
  if(!document.getElementById('Food5Input2').value.includes("https://") && !document.getElementById('Food5Input2').value.includes(".")){}    
  if((document.getElementById('Food5Input3').value.length > 0) && !document.getElementById('Food5Input3').value.includes("https://") && !document.getElementById('Food5Input3').value.includes(".")){}   
  if(document.getElementById('').value == ''){}
  document.getElementById('Food5Input4').value    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food5Input5').value    
  if(document.getElementById('Food5Input6').value.match(/^[0-9]+$/) != null){}

  if(document.getElementById('').value == ''){}
  document.getElementById('Food6Input1').value    
  if(!document.getElementById('Food6Input2').value.includes("https://") && !document.getElementById('Food6Input2').value.includes(".")){}
  if((document.getElementById('Food6Input3').value.length > 0) && !document.getElementById('Food6Input3').value.includes("https://") && !document.getElementById('Food6Input3').value.includes(".")){}     
  if(document.getElementById('').value == ''){}
  document.getElementById('Food6Input4').value    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food6Input5').value    
  if(document.getElementById('Food6Input6').value.match(/^[0-9]+$/) != null){}

  if(document.getElementById('').value == ''){}
  document.getElementById('Food7Input1').value  
  if(!document.getElementById('Food7Input2').value.includes("https://") && !document.getElementById('Food7Input2').value.includes(".")){}  
  if((document.getElementById('Food7Input3').value.length > 0) && !document.getElementById('Food7Input3').value.includes("https://") && !document.getElementById('Food7Input3').value.includes(".")){}     
  if(document.getElementById('').value == ''){}
  document.getElementById('Food7Input4').value    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food7Input5').value    
  if(document.getElementById('Food7Input6').value.match(/^[0-9]+$/) != null){}

  if(document.getElementById('').value == ''){}
  document.getElementById('Food8Input1').value    
  if(!document.getElementById('Food8Input2').value.includes("https://") && !document.getElementById('Food8Input2').value.includes(".")){}
  if((document.getElementById('Food8Input3').value.length > 0) && !document.getElementById('Food8Input3').value.includes("https://") && !document.getElementById('Food8Input3').value.includes(".")){}   
  if(document.getElementById('').value == ''){}
  document.getElementById('Food8Input4').value    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food8Input5').value    
  if(document.getElementById('Food8Input6').value.match(/^[0-9]+$/) != null){}

  if(document.getElementById('').value == ''){}
  document.getElementById('Food9Input1').value  
  if(!document.getElementById('Food9Input2').value.includes("https://") && !document.getElementById('Food9Input2').value.includes(".")){}  
  if((document.getElementById('Food9Input3').value.length > 0) && !document.getElementById('Food9Input3').value.includes("https://") && !document.getElementById('Food9Input3').value.includes(".")){}   
  if(document.getElementById('').value == ''){}
  document.getElementById('Food9Input4').value    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food9Input5').value    
  if(document.getElementById('Food9Input6').value.match(/^[0-9]+$/) != null){}

  if(document.getElementById('').value == ''){}
  document.getElementById('Food10Input1').value   
  if(!document.getElementById('Food10Input2').value.includes("https://") && !document.getElementById('Food10Input2').value.includes(".")){} 
  if((document.getElementById('Food10Input3').value.length > 0) && !document.getElementById('Food10Input3').value.includes("https://") && !document.getElementById('Food10Input3').value.includes(".")){}    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food10Input4').value    
  if(document.getElementById('').value == ''){}
  document.getElementById('Food10Input5').value    
  if(document.getElementById('Food10Input6').value.match(/^[0-9]+$/) != null){}


  if(document.getElementById('').value == ''){}
  document.getElementById('Creator1Input1').value    
  if(!document.getElementById('Creator1Input2').value.includes("https://") && !document.getElementById('Creator1Input2').value.includes(".")){}
  if(document.getElementById('').value == ''){}
  document.getElementById('Creator1Input3').value   

  if(document.getElementById('').value == ''){}
  document.getElementById('Creator2Input1').value   
  if(!document.getElementById('Creator2Input2').value.includes("https://")  && !document.getElementById('Creator2Input2').value.includes(".")){}
  if(document.getElementById('').value == ''){}
  document.getElementById('Creator2Input3').value   

  if(document.getElementById('').value == ''){}
  document.getElementById('Creator3Input1').value    
  if(!document.getElementById('Creator3Input2').value.includes("https://")  && !document.getElementById('Creator3Input2').value.includes(".")){}
  if(document.getElementById('').value == ''){}
  document.getElementById('Creator3Input3').value   

  if(document.getElementById('').value == ''){}
  document.getElementById('Creator4Input1').value    
  if(!document.getElementById('Creator4Input2').value.includes("https://") && !document.getElementById('Creator4Input2').value.includes(".")){}
  if(document.getElementById('').value == ''){}
  document.getElementById('Creator4Input3').value   

  if(document.getElementById('').value == ''){}
  document.getElementById('Creator5Input1').value
  if(!document.getElementById('Creator5Input2').value.includes("https://") && !document.getElementById('Creator5Input2').value.includes(".")){}
  if(document.getElementById('').value == ''){}
  document.getElementById('Creator5Input3').value   

}



function createWebsite(){

  var foodButtonNumber = new findNonHiddenButton('FoodAddSubtractButtonSet', 10).findNonHiddenButton();

  var creatorButtonNumber = new findNonHiddenButton('CreatorAddSubtractButtonSet', 5).findNonHiddenButton();

   var name = document.getElementById('WebsiteName').value;
   var logo = document.getElementById('WebsiteLogo').value;

   var websiteBackground = document.getElementById('WebsiteBackground').value;
   console.log(websiteBackground);
   var pageBackground= document.getElementById('PageBackground').value;
   console.log(pageBackground);

   download('index.html', new OrderPage(foodButtonNumber, name, logo).CreateOrderPage());
   download('CreatorsPage.html', new CreatorsText(creatorButtonNumber, name, logo).CreateCreatorsPage());
   download('BakeSale.css', new CSStext(websiteBackground, pageBackground).CreateCss());
   download('JadenJS.js', new JavascriptText(foodButtonNumber).CreateJavascript());
}


class JavascriptText{

  constructor(foodAmount){
    this.foodAmount=foodAmount;
  }
   
  CreateJavascript(){
    var javascript=`

    document.getElementById('SubmitButton').onclick = function(){window.alert('Order Made!');};

    `;

    var backgroundPics= [];

    for(var i=1; i<=this.foodAmount; i++){
      backgroundPics.push(new FoodInformation(i).getFoodInformation()[2]);
    }

    for(var i=0; i<backgroundPics.length; i++){
      var background = backgroundPics[i];
      
      if((background == '') || (background == undefined)){
        background='rgb(0,0,0,0)';
      }

      var num=i+1;

      javascript += `
    document.getElementById('Food`+ num +`').style.background = "url('`+ background +`')";

    `;

    }

    return javascript;
  }

}




class OrderPage{

  constructor(foodAmount, name, logo){
   this.foodAmount = foodAmount;
   this.name = name;
   this.logo = logo;
  }
  
  CreateOrderPage(){
    if(this.logo==''){
      this.logo='rgb(0,0,0,0)';
    }
    
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

              <div class='HeadderBox' role='banner' aria-label='Page Title: Bake Sale Website' > <img src='`+ this.logo +`' class='logoImage'> <h1> `+ this.name +` </h1> <img src='`+ this.logo +`' class='logoImage'> </div>
              
              <div class='PageContent' role='main' aria-label='Bake Sale Website'>    

                  <nav class='NavBar' aria-label='Navagation Bar'>
                      <a class='NavTab' href='index.html'>Make Website</a>
                      <a class='NavTab2' href='CreatorsPage.html'>Creators</a>
                  </nav>



  `;

    var allFood=[];
    
    for(var i=1; i<=this.foodAmount; i++){
      allFood.push(new FoodInformation(i).getFoodInformation());
    }

    for(var i=0; i<allFood.length; i++){
      startOfPage= startOfPage + this.CreateFoodHTML(i+1, allFood[i][0], allFood[i][1], allFood[i][3], allFood[i][4], allFood[i][5]);
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



  CreateFoodHTML(foodNumber, FoodName, FoodPicUrl, DescriptionText, AllergyText, PricePerItem){

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


  return pageHTML;
}


}


class FoodInformation{

   constructor(foodNumber){
    this.foodNumber=foodNumber;
   }

   getFoodInformation(){
    var foodInfo=[];
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
    
    if(this.logo==''){
      this.logo='rgb(0,0,0,0)';
    }

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

             <div class='HeadderBox' role='banner' aria-label='Page Title: Bake Sale Website Maker'> <img src='`+ this.logo +`' class='logoImage'> <h1> `+ this.name +` </h1> <img src='`+ this.logo +`' class='logoImage'> </div>

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
    
    for(var i=1; i<= this.creatorAmount; i++){
      window.alert('print2');
      allCreators.push(new CreatorInformation(i).getCreatorInformation());
    }

    for(var i=0; i<allCreators.length; i++){
      window.alert('print1');
      startOfPage = startOfPage + this.CreateCreatorHTML(i+1, allCreators[i][0], allCreators[i][1], allCreators[i][2]);
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


  CreateCreatorHTML(num, name, source, description){
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


}






class CreatorInformation{
   
   constructor(number){
    this.number=number;
   }

   getCreatorInformation(){
    
    var creatorInfo=[];

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

function hideFourm(StartFrom, NumberWantedHidden, VarName){
  for(var i=1; i<=NumberWantedHidden; i++){
    var k = i+StartFrom;
    var name = VarName + k;
    document.getElementById(name).style.display = 'none';
  }
}




function SubmitForms(){

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
