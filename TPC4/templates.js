exports.compositoresListPage = function(slist, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="compositores/w3.css"/>
            <title>Compositores Management</title>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-yellow">
                    <h1>Compositores List
                    <a class="w3-btn w3-round w3-grey" href="/compositores/registo">+</a>
                    <a class="w3-btn w3-round w3-grey" href="/periodos">Periodos</a>
                    </h1>
                    
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th><th>Name</th>
                            <th>Actions</th>
                        </tr>
                `
    for(let i=0; i < slist.length ; i++){
        pagHTML += `
                <tr>
                    <td>${slist[i].id}</td>
                    <td>
                        <a href="/compositores/${slist[i].id}">
                            ${slist[i].nome}
                        </a>
                    </td>
                    <td>
                        [<a href="/compositores/edit/${slist[i].id}">Edit</a>][<a href="/compositores/delete/${slist[i].id}">Delete</a>]
                    </td>
                </tr>
        `
    }

    pagHTML += `
            </table>
            </div>
                <footer class="w3-container w3-yellow">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

exports.periodosListPage = function(slist, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="periodos/w3.css"/>
            <title>Periodos Management</title>
        </head>
        <body>
            <div class="w3-card-4">

                <header class="w3-container w3-yellow">
                    <h1>Periodos List
                    <a class="w3-btn w3-round w3-grey" href="/periodos/registo">+</a>
                    <a class="w3-btn w3-round w3-grey" href="/compositores">Compositores</a>
                    </h1>
                    
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Id</th><th>Name</th>
                            <th>Actions</th>
                        </tr>
                `
    for(let i=0; i < slist.length ; i++){
        pagHTML += `
                <tr>
                    <td>${slist[i].id}</td>
                    <td>
                        <a href="/periodos/${slist[i].id}">
                            ${slist[i].nome}
                        </a>
                    </td>
                    <td>
                        [<a href="/periodos/edit/${slist[i].id}">Edit</a>][<a href="/periodos/delete/${slist[i].id}">Delete</a>]
                    </td>
                </tr>
        `
    }

    pagHTML += `
            </table>
            </div>
                <footer class="w3-container w3-yellow">
                    <h5>Generated by RPCW2023 in ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

exports.compositorPage = function(compositor, d) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="compositores/w3.css"/>
            <title>${compositor.nome}</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-green">
                    <h1>${compositor.nome}</h1>
                </header>
        
                <div class="w3-container">
                    <p>Id: ${compositor.id}</p>
                    <p>Nome: ${compositor.nome}</p>
                    <p>Periodo: ${compositor.periodo}</p>
                    <p>Biografia: ${compositor.bio}</p>
                    <p>Data de nascimento: ${compositor.dataNasc}</p>
                    <p>Data de obito: ${compositor.dataObito}</p>
                </div>
                <footer class="w3-container w3-green">
                    <h5>Generated by RPCW2023 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            </div>
        </body>
    </html>
    `
}

exports.periodoPage = function(periodo, d) {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="periodos/w3.css"/>
            <title>${periodo.nome}</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-green">
                    <h1>${periodo.nome}</h1>
                </header>
        
                <div class="w3-container">
                    <p>Id: ${periodo.id}</p>
                    <p>Nome: ${periodo.nome}</p>
                </div>
                <footer class="w3-container w3-green">
                    <h5>Generated by RPCW2023 in ${d} - [<a href="/periodos">Return</a>]</h5>
                </footer>
            </div>
        </body>
    </html>
    `
}


exports.compositorFormPage = function(d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="compositores/w3.css"/>
            <title>Compositor Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-red">
                    <h2>Compositor Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Metadata</legend>
                            <label>Id</label>
                            <input class="w3-input w3-round" type="text" name="id"/>
                            <label>Name</label>
                            <input class="w3-input w3-round" type="text" name="nome"/>
                            <label>Periodo</label>
                            <input class="w3-input w3-round" type="text" name="periodo"/>
                            <label>Biografia</label>
                            <input class="w3-input w3-round" type="text" name="bio"/>
                            <label>Data de nascimento</label>
                            <input class="w3-input w3-round" type="text" name="dataNasc"/>
                            <label>Data de obito</label>
                            <input class="w3-input w3-round" type="text" name="dataObito"/>
                        <fieldset/>
                        <br>
                        <button class="w3-btn w3-red w3-mb-2" type="submit">Register</button>
                    </form>

                <footer class="w3-container w3-red">
                    <h5>Generated by EngWeb2023 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            
            </div>
    `
}

exports.periodoFormPage = function(d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="periodos/w3.css"/>
            <title>Periodo Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-red">
                    <h2>Periodo Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Metadata</legend>
                            <label>Id</label>
                            <input class="w3-input w3-round" type="text" name="id"/>
                            <label>Name</label>
                            <input class="w3-input w3-round" type="text" name="nome"/>
                        <fieldset/>
                        <br>
                        <button class="w3-btn w3-red w3-mb-2" type="submit">Register</button>
                    </form>

                <footer class="w3-container w3-red">
                    <h5>Generated by EngWeb2023 in ${d} - [<a href="/periodos">Return</a>]</h5>
                </footer>
            
            </div>
    `
}

exports.compositorFormEditPage = function(compositor, d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="compositores/w3.css"/>
            <title>Compositor Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-orange">
                    <h2>Compositor Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Metadata</legend>
                            <label>Id</label>
                            <input class="w3-input w3-round" type="text" name="id" value="${compositor.id}"/>
                            <label>Name</label>
                            <input class="w3-input w3-round" type="text" name="nome" value="${compositor.nome}"/>
                            <label>Periodo</label>
                            <input class="w3-input w3-round" type="text" name="periodo" value="${compositor.periodo}"/>
                            <label>Biografia</label>
                            <input class="w3-input w3-round" type="text" name="bio" value="${compositor.bio}"/>
                            <label>Data de nascimento</label>
                            <input class="w3-input w3-round" type="text" name="dataNasc" value="${compositor.dataNasc}"/>
                            <label>Data de obito</label>
                            <input class="w3-input w3-round" type="text" name="dataObito" value="${compositor.dataObito}"/>
                        <fieldset/>
                        <br>
                        <button class="w3-btn w3-orange w3-mb-2" type="submit">Register</button>
                </form>

                <footer class="w3-container w3-orange">
                    <h5>Generated by EngWeb2023 in ${d} - [<a href="/">Return</a>]</h5>
                </footer>
            
            </div>
        </body>
    </html>
    `
}

exports.periodoFormEditPage = function(periodo, d){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <link rel="icon" href="favicon.png"/>
            <link rel="stylesheet" href="periodos/w3.css"/>
            <title>Periodo Form</title>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-orange">
                    <h2>Periodo Form</h2>
                </header>
            
                <form class="w3-container" method="POST">
                        <fieldset>
                            <legend>Metadata</legend>
                            <label>Id</label>
                            <input class="w3-input w3-round" type="text" name="id" value="${periodo.id}"/>
                            <label>Name</label>
                            <input class="w3-input w3-round" type="text" name="nome" value="${periodo.nome}"/>
                        <fieldset/>
                        <br>
                        <button class="w3-btn w3-orange w3-mb-2" type="submit">Register</button>
                </form>

                <footer class="w3-container w3-orange">
                    <h5>Generated by EngWeb2023 in ${d} - [<a href="/periodos">Return</a>]</h5>
                </footer>
            
            </div>
        </body>
    </html>
    `
}


// -------------- Error Treatment ------------------------------
exports.errorPage = function(errorMessage, d){
    return `
    <p>${d}: Error: ${errorMessage}</p>
    `
}