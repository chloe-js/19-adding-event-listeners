function handleBtnClick (event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You clicked the button!\n');
  }
  
  function handleInputKeys (event) {
      console.log('Received the ' + event.type + " event!");
      console.log('"this" currently refers to', this.id);
      console.log('You changed the textbox!\n');
  }
  
  function handleDivMouseOver (event) {
      console.log('Received the ' + event.type + " event!");
      console.log('"this" currently refers to', this.id);
      console.log('You moved the mouse over the div!\n');
  }
  
  let magicButton = document.getElementById('magic-button');
  let magicDiv = document.getElementById('magic-div');
  let magicInput = document.getElementById('magic-input');
  
  magicButton.addEventListener('click', handleBtnClick); // left clicks
  magicButton.addEventListener('contextmenu', handleBtnClick); // right clicks
  magicDiv.addEventListener('mouseover', handleDivMouseOver); // mouseovers
  magicInput.addEventListener('keypress', handleInputKeys); // key presses 
  magicInput.addEventListener('keydown', handleInputKeys); // key down
  magicInput.addEventListener('keyup', handleInputKeys); // key up
  
  