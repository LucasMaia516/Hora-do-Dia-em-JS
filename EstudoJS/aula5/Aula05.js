class ListaTarefas {
    constructor (){
        this.tarefas = [];
    }
    addTarefa (){
        this.tarefas.push ('Nova Tarefa');
        console.log (this.tarefas);
    }

}; 

const minhasTarefas = new ListaTarefas();

document.getElementById('novo').onclick = function(){
    minhasTarefas.addTarefa();
        
}