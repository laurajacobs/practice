var userInfo = person.role == "Admin" ? "Allowed" : "Not allowed";

return person.role == "Admin" ? "Allowed" : "Not allowed";

var findAdmin = function (people){
	
	var admins=  [];

	for (var i  = 0; i < people.length; i ++){
		var person = people[i];
		
		if(!person.role){
			continue;
		}

		if(person.role === "Admin"){
			admins.push(person);
		};
	};

	return admins;
};


var person1 = {
	role: null,
	name: "Laura"
};

var person2 = {
	role: "Admin",
	name: "Adam"
};

var persons =[];
persons.push(person1);
persons.push(person2);

var adminPersons = findAdmin(persons);

