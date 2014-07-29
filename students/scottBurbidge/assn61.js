var oldestLivingParent = function(data) {
  for(n = 0; n < data.length; n++){
    for(p = 0; p < data.length; p++){
      if(data[p].parent == data[n].name){
        return (data[n])
      }
    }
  }
}
