Tudo sobre Git:

    Primeiro usamos git init, ele inicia um repositorio.
    
    Logo usamos git add <nome do arquivo>, ou git . , para adicionar algum arquivo no git(ao uso de git . , você adiciona todo tipo de arquivo).

    Sempre que eu fizer uma alteração, o save é git commit -m "<comentario>"


Ulteis: 
    
    Verificação de erros (sempre observe isso), ultilize git status

    Para verificar os commits antigos basta usar git log


Sobre Commits:

    Deletar commits:

        git reset --soft HEAD~1 --> Descarta o ultimo commit, voltando ao commit anterior, mas mantem as alterações na area de staging

        git reset --hard HEAD~1 --> Descarta tudo

        git revert <hash do commit> --> Cria um novo commit e desfaz o anterior

    Voltar commits:

        git reset <hash do commit>   

