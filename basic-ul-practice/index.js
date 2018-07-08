console.log("Javascript is connected.")

//Useful links: https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
//https://www.youtube.com/watch?v=mXTEVCg60zM&t=212s
//https://davidwalsh.name/event-delegate
//https://developer.mozilla.org/en-US/docs/Web/API/Event/target
//https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
//https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets

document.getElementById('parent-list').addEventListener("click", function(e){

  if (e.target && e.target.nodeName === "LI"){
    debugger;
    console.log(`User clicked on ${e.target.innerText}`)
  }
})

//Element.matches can be used if the element you need more vagueness in your match
//Elements.matches() returns boolean
document.getElementById("parent-div").addEventListener("click", function(e){

  if (e.target && e.target.matches("a.classA")){
    //no access to anchor element here. This merely checks if something was present or not.
    //Should I be able to access the anchor in within this if statement?
    console.log(`You clicked ${a.taget}`)
  }
})
