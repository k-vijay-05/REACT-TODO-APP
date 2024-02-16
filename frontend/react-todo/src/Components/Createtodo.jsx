export function CreateTodo(){
    return <div>
        <input style={{
            padding:15,
            margin:15
        }} type="text" placeholder="title"/><br />
        <input  
        style={{
            padding:15,
            margin:15
        }} type="text" placeholder="description"/><br />
        <button
         style={{
            padding:10,
            margin:10
        }}
      
          >ADD TODO</button>
    </div>

}
