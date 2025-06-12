var ToDoList = function(){
 /* add members here */

 var task = {
name: ko.observable(),
description: ko.observable()


 }
 var initialData  = [{ postId: 1,     id: 1,     name: "id labore ex et quam laborum",     email: "Eliseo@gardner.biz",     description: "laudantium enim quasi est quidem magnam voluptate ipsam eos    tempora quo necessitatibus     dolor quam autem quasi     reiciendis et nam sapiente accusantium"     },     {     postId: 1,     id: 2,     name: "quo vero reiciendis velit similique earum",     email: "Jayne_Kuhic@sydney.com",     description: "est natus enim nihil est dolore omnis voluptatem numquam     et omnis occaecati quod ullam at     voluptatem error expedita pariatur     nihil sint nostrum voluptatem reiciendis et"     },     {     postId: 1,     id: 3,     name: "odio adipisci rerum aut animi",     email: "Nikita@garfield.biz",     description: "quia molestiae reprehenderit quasi aspernatur     aut expedita occaecati aliquam eveniet laudantium     omnis quibusdam delectus saepe quia accusamus maiores nam est     cum et ducimus et vero voluptates excepturi deleniti ratione"     },     {     postId: 1,     id: 4,     name: "alias odio sit",     email: "Lew@alysha.tv",     description: "non et atque     occaecati deserunt quas accusantium unde odit nobis qui voluptatem     quia voluptas consequuntur itaque dolor     et qui rerum deleniti ut occaecati"     },     {     postId: 1,     id: 5,     name: "vero eaque aliquid doloribus et culpa",     email: "Hayden@althea.biz",     description: "harum non quasi et ratione     tempore iure ex voluptates in ratione     harum architecto fugit inventore cupiditate     voluptates magni quo et"     },     {     postId: 2,     id: 6,     name: "et fugit eligendi deleniti quidem qui sint nihil autem",     email: "Presley.Mueller@myrl.com",     description: "doloribus at sed quis culpa deserunt consectetur qui praesentium     accusamus fugiat dicta     voluptatem rerum ut voluptate autem     voluptatem repellendus aspernatur dolorem in"     },     {     postId: 2,     id: 7,     name: "repellat consequatur praesentium vel minus molestias voluptatum",     email: "Dallas@ole.me",     description: "maiores sed dolores similique labore et inventore et     quasi temporibus esse sunt id et     eos voluptatem aliquam     aliquid ratione corporis molestiae mollitia quia et magnam dolor"     },     {     postId: 2,     id: 8,     name: "et omnis dolorem",     email: "Mallory_Kunze@marie.org",     description: "ut voluptatem corrupti velit     ad voluptatem maiores     et nisi velit vero accusamus maiores     voluptates quia aliquid ullam eaque"     },     {     postId: 2,     id: 9,     name: "provident id voluptas",     email: "Meghan_Littel@rene.us",     description: "sapiente assumenda molestiae atque     adipisci laborum distinctio aperiam et ab ut omnis     et occaecati aspernatur odit sit rem expedita     quas enim ipsam minus"     },     {     postId: 2,     id: 10,     name: "eaque et deleniti atque tenetur ut quo ut",     email: "Carmen_Keeling@caroline.name",     description: "voluptate iusto quis nobis reprehenderit ipsum amet nulla     quia quas dolores velit et non     aut quia necessitatibus     nostrum quaerat nulla et accusamus nisi facilis"     },     {     postId: 3,     id: 11,     name: "fugit labore quia mollitia quas deserunt nostrum sunt",     email: "Veronica_Goodwin@timmothy.net",     description: "ut dolorum nostrum id quia aut est     fuga est inventore vel eligendi explicabo quis consectetur     aut occaecati repellat id natus quo est     ut blanditiis quia ut vel ut maiores ea"     },     {     postId: 3,     id: 12,     name: "modi ut eos dolores illum nam dolor",     email: "Oswald.Vandervort@leanne.org",     description: "expedita maiores dignissimos facilis     ipsum est rem est fugit velit sequi     eum odio dolores dolor totam     occaecati ratione eius rem velit"     }     ]

  


 /* array of contacts */
  var tasks = ko.observableArray(initialData);
  

	
 /* method to clear the contact observable */
 var clearTask = function () {
     task.name(null);
    task.description(null);
 };
 
 /* method to add contact to contacts array */
 var addTask = function () {

     console.log("Adding new task wih name: " + task.name() +" and description: " + task.description());
     //add the contact to the contacts array

     //contacts.push(ec)
     tasks.push({name: task.name(), description: task.description()});
     console.log(tasks)
     //clear the contact
    clearTask();
 };
 
 /* method to delete task from tasks array */
 var deleteTask = function (task) {
    console.log("Deleting task with name: " + task.name);
    //remove the task from the tasks array
    tasks.remove(task);
};


var init = function(){

 /* add code to initialize this module */
 ko.applyBindings(ToDoList);

}

/* execute the init function when the DOM is ready */
$(init);

return {


    tasks: tasks,
    task: task,
    addTask: addTask,
    deleteTask: deleteTask
    

  /* add members that will be exposed publicly */

}

/* method to delete task from tasks array */
	var deleteTask = function (task) {
		console.log("Deleting task with name: " + task.name);
		//remove the task from the tasks array
		tasks.remove(task);
	};

}(); //end addressbook function 



 







