    let inputBtn=document.getElementById("input-btn");
    let myLeads=[]
    const inputEl=document.getElementById("input-el")
    
    const ulEl=document.getElementById("ul-el");
    
       inputBtn.addEventListener("click", function()
    {
        console.log("the button got clicked by event listener") 
        //alert("button got clicked");
    
    
     //myLeads.push("www.github.com");
     //console.log(myLeads);
     
        //to get input from text use doc.gebid.value
        //so now put inputEl.value ...
        myLeads.push(inputEl.value)
        console.log(myLeads);
        inputEl.value=" "
        renderLeads()
    
    })
    
    function renderLeads()
    {
        let listItems=" "
        for(let i=0; i<myLeads.length; i++)
    {
       //first way
        // ulEl.innerHTML += "<li>" + myLeads[i]  + " </li>"
        //used to add html element
    
    
    
        //second way
        //const li=document.createElement("li")
        //li.textContent=myLeads[i];
        //ulEl.append(li)
     
    
    listItems +="<li><a  target = '_blank'href ='#'>" + myLeads[i] + " </a> </li>"
    
    
    }
    ulEl.innerHTML =listItems
    }
    
    
    
    
 