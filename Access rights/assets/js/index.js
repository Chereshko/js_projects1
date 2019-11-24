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

console.log();
console.log();

var ADMIN_CHECK_USERS= new Map();
ADMIN_CHECK_USERS.set(ROLE.MODERATOR, [ACTION.CREATE, ACTION.UPDATE, ACTION.READ, ACTION.DELETE]);
ADMIN_CHECK_USERS.set(ROLE.USER, [ACTION.CREATE, ACTION.UPDATE, ACTION.READ, ACTION.DELETE]);
var MODERATOR_CHECK_USERS = new Map();
MODERATOR_CHECK_USERS.set(ROLE.USER, [ACTION.CREATE, ACTION.UPDATE, ACTION.READ]);
MODERATOR_CHECK_USERS.set(ROLE.MODERATOR, [ACTION.READ]);
MODERATOR_CHECK_USERS.set(ROLE.ADMIN, []);
var USER_CHECK_USERS = new Map();
USER_CHECK_USERS.set(ROLE.MODERATOR, [ACTION.READ]);
USER_CHECK_USERS.set(ROLE.USER, [ACTION.READ]);
USER_CHECK_USERS.set(ROLE.ADMIN, []);
var CHECK_RIGHTS= new Map();
CHECK_RIGHTS.set(ROLE.ADMIN, ADMIN_CHECK_USERS)
CHECK_RIGHTS.set(ROLE.MODERATOR, MODERATOR_CHECK_USERS)
CHECK_RIGHTS.set(ROLE.USER, USER_CHECK_USERS)

var CHECK_SELF= new Map();
CHECK_SELF.set(ROLE.ADMIN, [ACTION.UPDATE, ACTION.READ] );
CHECK_SELF.set(ROLE.MODERATOR, [ACTION.UPDATE, ACTION.READ] );
CHECK_SELF.set(ROLE.USER, [ACTION.UPDATE, ACTION.READ, ACTION.DELETE] );

class User{
	constructor(name, surname, email, role){
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.role = role;
	}
	static check_Permission(action, verifier, verifiable){
		let arr;
		if(verifier === verifiable){
			arr = CHECK_SELF.get(verifier.role);
			console.log(arr.includes(action));
		}
		else{
			arr = CHECK_RIGHTS.get(verifier.role).get(verifiable.role);
			

			console.log(arr.includes(action));
		}
	}
}

const admin = new User("Admin", "Adminov", "admin@dmail.com", ROLE.ADMIN);
const user = new User("User", "Userov", "user@gmail.com", ROLE.USER);
const moderator = new User("Moderator", "Moderatorov", "moder@gmail.com", ROLE.MODERATOR);
const user2 = new User("Ivan", "Ivanov", "ivan@gmail.com", ROLE.USER);
const moderator2 = new User("Petya", "Petrov", "petya@gmail.com", ROLE.MODERATOR);

User.check_Permission(ACTION.READ, admin, user);
User.check_Permission(ACTION.DELETE, admin, user);

User.check_Permission(ACTION.READ, user, user2);
User.check_Permission(ACTION.DELETE, user, user2);
User.check_Permission(ACTION.READ, user, admin);

User.check_Permission(ACTION.READ, moderator, moderator2);
User.check_Permission(ACTION.UPDATE, moderator, moderator2);

User.check_Permission(ACTION.DELETE, admin, admin);
User.check_Permission(ACTION.UPDATE, admin, admin);
User.check_Permission(ACTION.READ, admin, admin);
User.check_Permission(ACTION.DELETE, moderator, moderator);
User.check_Permission(ACTION.UPDATE, moderator, moderator);


