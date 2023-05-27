function insert(number)
    {
        var num = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = num + number;
    }
function limpar()
    {
        document.getElementById('resultado').innerHTML = "";
    }
function apagar()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    }
function calcular()
    {
        var resultado = document.getElementById('resultado').innerHTML;
        if(resultado)
        {
            document.getElementById('resultado').innerHTML = eval(resultado);
        }
        else
        {
            document.getElementById('resultado').innerHTML = "0";
        }
    }