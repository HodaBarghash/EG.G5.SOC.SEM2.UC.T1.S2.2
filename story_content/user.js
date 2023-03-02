function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MXfOkwxERf":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzppeNbWDKT-UzgnSnW_yQR4ClftxG9HvbVdkbvIi76jOATtRKSBftQLCLQePGA137JfA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

