export const eel = window["eel"];

eel.expose(hello);
function hello(x) {
  console.log(x);
}

eel.expose(add_new_task);
function add_new_task(x){
    console.log(x);
}

eel.expose(load_old_tasks);
function load_old_tasks(x){
    console.log(x);
}

eel.expose(delete_task);
function delete_task(x){
    console.log(x);
}

