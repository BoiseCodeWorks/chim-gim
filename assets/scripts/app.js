var members = [];

function submitRegistration(){
    // Responsible for getting value out of form
    var memberNameElem = document.getElementById('name');
    var memberName = memberNameElem.value;
    
    // Validates Form is filled Out
    if(!memberName){
        alert('Hey Member Name cannot be blank')
        return
    }
    
    // Creates New Member
    var member = new Member(memberName, "test", "test");
    
    // Add newly created member to Members
    members.push(member) 
    console.log(members)
    
    
    // CLEAR FORM
    memberNameElem.value = "";
    
    
    // CLEARS MEMBERS LIST
    var membersListElem = document.getElementById('members-list');
    membersListElem.innerHTML = "";
    
    // SHOW MEMBERS ON PAGE
    for(var i = 0; i < members.length; i++){
        var memberElem = document.createElement('li');
        memberElem.textContent = members[i].name;
        membersListElem.appendChild(memberElem);
    } 
    
    
    
}


function Member (name, email, password){
    this.name = name;
    this.email = email;
    this.password = password;
    this.hasDiscount = false; 
}

