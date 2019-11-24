// JavaScript Document

const ROLE = Object.freeze({
                           ADMIN:"ADMIN",
						   MODERATOR:"MODERATOR",
						   USER:"USER",
						   }
						  );
const ACTION = Object.freeze({
							 CREATE:"CREATE",
							 READ:"READ",
							 UPDATE:"UPDATE",
							 DELETE:"DELETE"
							 }
							);

var RIGHTS = new Map();
RIGHTS.set(ACTION.CREATE, [ROLE.ADMIN, ROLE.USER]);
RIGHTS.set(ACTION.READ, [ROLE.ADMIN, ROLE.MODERATOR, ROLE.USER]);
RIGHTS.set(ACTION.UPDATE, [ROLE.MODERATOR]);
RIGHTS.set(ACTION.DELETE, [ROLE.ADMIN]);
//console.log(RIGHTS);

function checkPermission(action, role){
	let arr= RIGHTS.get(action);
	console.log(arr.includes(role));
}

checkPermission(ACTION.CREATE, ROLE.ADMIN);
checkPermission(ACTION.DELETE, ROLE.USER);
checkPermission(ACTION.UPDATE, ROLE.MODERATOR);

var CHECK_RIGHTS= new Map();
//CHECK_RIGHTS.set()

class User{
	constructor(name, surname, email, role){
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.role = role;
	}
	static check_Permission(action, verifier, verifiable){
		let arr= RIGHTS.get(action);
		console.log(arr.includes(role));
	}
}

const admin = new User("Admin", "Adminov", "admin@dmail.com", ROLE.admin);



