// code your solution here


superbowlWin = (record) => {

    const result = record.find( record => record.result === "W" );
    
    if(result)
        return result.year;
  }