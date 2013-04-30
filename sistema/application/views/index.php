<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Sistema</title>
        <link rel="stylesheet" href="extjs/resources/css/ext-all.css">
        <link rel="stylesheet" href="resources/css/app.css"> 
    </head>
    <body>
        <div id="loading-mask" style=""></div>
        <div id="loading">
            <div class="loading-indicator">
                <img src="resources/images/extanim32.gif" width="32" height="32" style="margin-right:8px;float:left;vertical-align:top;"/>Sistema 1.0
                <br /><span id="loading-msg">Carregando estilos e imagens...</span>
            </div>
        </div>
        <div id="viewport">
            <script type="text/javascript">document.getElementById('loading-msg').innerHTML = 'Carregando API...';</script>
            <script src="extjs/ext-all-debug.js"></script>
            <script src="extjs/locale/ext-lang-pt_BR.js"></script>
            <script type="text/javascript">document.getElementById('loading-msg').innerHTML = 'Inicializando...';</script>
            <script type="text/javascript" src="app.js"></script>
        </div>
    </body>
</html>