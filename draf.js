
////////////////////// DRAF /////////////////////////

var cproc = require("child_process");

const proc = cproc.spawn('./fakeupdate.sh');

proc.stdout.on("data", function(res) { 
        console.log("Data received: " + res);
});     
    

function btUpdateClick()
{
    const interval = setInterval(function(err, res)
    {
        progress.style.width = fakeUploadPerc[i] + '%';
        loading.innerHTML = fakeUploadPerc[i] + ' %';
        i++;
        if(i == fakeUploadPerc.length)
        {
            loading.innerHTML = 'Completed!';
            clearInterval(interval);
        }
    }, 1000);
}
