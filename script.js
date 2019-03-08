/* components pour music brainz */

// Component qui génère la table pour afficher les artistes
Vue.component('tablelistartists', {
    template:
        `
    <div v-if="artistsdata != ''">
        <table id="mytable" class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Nom</th>
                <th scope="col">Type</th>
                <th scope="col">Score</th>
                <th scope="col">Voir</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="artist in artistsdata">
                
                    <td></td><td></td>
                    <td>{{ artist.name }}</td>
                    <td>{{ artist.type }}</td>
                    <td>{{ artist.score }}</td>
                    <td><button id="buttonShowArtist" type="button" class="btn" v-on:click="$emit('showartistevent', artist.id)">Voir</button></td>
                    <td></td>

                </tr>
            </tbody>
        </table>
    </div>
    `
    ,

    props: ['artistsdata'],
})

// Component qui génère la table pour afficher les albums d'un artiste
Vue.component('tablelistalbums', {
    template:
        `
    <div v-if="artistinfo != ''">
            <div id="stripArtistName" class="d-flex justify-content-center"><h2 id="artistName">{{ artistinfo.name }}</h2></div>
            
            <div class="container">

            <button id="backButton" type="button" class="btn" v-on:click="$emit('backtosearchevent')">Retour</button>

            <h3>Liste des albums</h3>
            
            <table id="albumsTable" class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">Titre</th>
                    <th scope="col">Date</th>
                    <th scope="col">Tracklist</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="release in artistinfo.releases">
                    <td>{{ release.title }}</td>
                    <td>{{ release.date }}</td>
                    <td><button id="buttonShowArtist" type="button" class="btn" v-on:click="$emit('showalbumevent', release.id)">Tracklist</button></td>
                </tr>
            </tbody>
        </table>

        </div>

    </div>
    `
    ,

    props: ['artistinfo'],
})




// Component qui génère la table pour afficher les chansons
Vue.component('tablelistrecordings', {
    template:
        `
    <div v-if="recordingsdata != ''">
        <table id="mytable" class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Nom</th>
                <th scope="col">Date</th>
                <th scope="col">Score</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="recording in recordingsdata">
                    <td></td><td></td>
                    <td>{{ recording.title }}</td>
                    <td>{{ recording.releases.date }}</td>
                    <td>{{ recording.score }}</td>
                    <td></td><td></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
    ,

    props: ['recordingsdata'],
})


// Component qui génère la table pour afficher les albums d'un artiste
Vue.component('tablelistalbumrecordings', {
    template:
        `
    <div v-if="albuminfo != ''">
            <div id="stripArtistName" class="d-flex justify-content-center"><h2 id="artistName">{{ albuminfo.title }}</h2></div>
            
            <div class="container">

            <button id="backButton" type="button" class="btn" v-on:click="$emit('backtosearchevent')">Retour</button>

            <h3>Liste des titres dans l'album {{ albuminfo.title }} de {{ albuminfo['artist-credit'][0].artist.name }} <button id="buttonShowArtist" type="button" class="btn" v-on:click="$emit('showartistevent', albuminfo['artist-credit'][0].artist.id)">Voir</button></h3>
            
            <table id="albumsTable" class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">Numero</th>
                <th scope="col">Titre</th>
                <th scope="col">Duree</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="record in albuminfo.media[0].tracks">
                            <td>{{ record.number }}</td>
                            <td>{{ record.title }}</td>
                            <td>{{ record.length }} ms</td>
                </tr>
            </tbody>
        </table>

        </div>

    </div>
    `
    ,

    props: ['albuminfo'],
})

// Component qui génère la table pour afficher les albums (release)
Vue.component('tablelistrealeases', {
    template:
        `
    <div v-if="releasesdata != ''">
        <table id="mytable" class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Nom</th>
                <th scope="col">Artiste</th>
                <th scope="col">Score</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="release in releasesdata">
                    <td></td><td></td>
                    <td>{{ release.title }}</td>
                    <td> release</td>
                    <td>{{ release.score }}</td>
                    <td><button id="buttonShowArtist" type="button" class="btn" v-on:click="$emit('showalbumevent', release.id)">Voir</button></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
    ,

    props: ['releasesdata'],
})
