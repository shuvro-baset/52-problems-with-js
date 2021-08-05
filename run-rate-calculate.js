// calculate required run rate and current run rate in 50 over ODI match.

function runRateCalculate(target, current_run, balls_left){
    let current_run_rate;
    let required_run_rate; 
    var balls_played = 300-balls_left;
    var required_run = target - current_run;
    current_run_rate = (current_run /balls_played) * 6;
    required_run_rate = (required_run /balls_left) * 6;

    return `required run rate is : ${required_run_rate} and current run rate is : ${current_run_rate}`
}
console.log(runRateCalculate(301,250,30))