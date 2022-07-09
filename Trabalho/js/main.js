function validar() {

    // email
    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    var email = $('#txt_email').val();

    //nome
    var nome = document.formulario.nome.value;

    //telefone
    var tTelefone = document.formulario.Telefone.value;	
    var re = new RegExp('^\\([0-9]{2}\\)((2[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');

    //data nascimento
    var nasc = new Date(document.formulario.date.value);
    var dayborth = nasc.getUTCDate();
    var monthborth = (nasc.getUTCMonth() + 1);
    var yearborth = nasc.getFullYear()
    var dataAtual = new Date();
    var day = dataAtual.getDate();
    var month = (dataAtual.getMonth() + 1);
    var year = dataAtual.getFullYear()
    var age = year - yearborth;

    //estado civil
    var solteiro = document.formulario.solteiro.checked;
    
    //sexo
    var feminino = document.formulario.feminino.checked;
    var masculino = document.formulario.masculino.checked;
    //recebe os valores
    var resp='';
    var area='';

    event.preventDefault();
    //validações
        if(nome==''){
            alert('Preencha o campo nome!');
        }if (nome!='' && nome.length <= 15){
            alert('Preencha o campo nome corretamente!');

        }else { 
            resp+='\nNome: ' + nome;
        }if (email==''){
            if (nome!='' && nome.length >= 15)
            alert('Preencha o campo e-mail!');

        }else if (email!=''&& !er.test(email)) {
             alert('Preencha o campo  email corretamente!')

             return false;
        }else{
            resp+= '\nE-mail: ' + email;
        } if(tTelefone=='' && email!=''){
            alert('Preencha o campo telefone')

        }if(tTelefone!=''){
            if(!re.test(tTelefone)){
                alert('Preencha o campo telefone corretamente!')

            }
        }else {
            resp+= '\nTelefone: '+ tTelefone;
            if(month < monthborth || month == monthborth && day < dayborth){
                age--;
            }

        }if (solteiro== true && age < 15){
            alert('Idade não permitida!')

        }else if (age > 110){
             alert('Idade acima de 110 não permitida!')

        }else{
            resp+='\nIdade: '+ age;
        }
        if(feminino==true){
            resp+= '\nSexo: Feminino';
        }else {
            resp+= '\nSexo: Masculino';
        }if(nome.length >=15 && age >=15 ){
            alert(resp +'\nArea de interesse:'+ area);
        }
    }