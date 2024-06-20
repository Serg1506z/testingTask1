export function health ({name, health} = {}){
  if(!health || !name){
    return 'No data'
  }

  if(health < 15){
    return "critical"
  }
  if(health <= 50 && health >= 15){
    return "wounded"
  }else{
    return "healthy"
  }
}


console.log(health({name: 'Маг', health: 90}));
console.log(health({name: 'Маг', health: 45}));
console.log(health({name: 'Маг', health: 14}));


