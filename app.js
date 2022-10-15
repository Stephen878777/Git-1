function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agree." );
  }
  
  function showCancel() {
    alert( "You cancelled execution." );
  }
  
  
  ask("you agree?", showOk, showCancel);