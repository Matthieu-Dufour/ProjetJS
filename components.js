/* components pour l'application music brainz */

// Component du spinner de chargement
Vue.component('spinner', {
    template:
        `
        <div class="lds-facebook"><div></div><div></div><div></div></div>
    `
})

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
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="artist in artistsdata" v-on:click="$emit('showartistevent', artist.id)">
                    <td></td><td></td>
                    <td>{{ artist.name }}</td>
                    <td>{{ artist.type }}</td>
                    <td>{{ artist.score }}</td>
                    <td></td>
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
            <button v-on:click="$emit('backevent')" id="backButton" class="btn">Retour</button>
            <h3>Albums de {{ artistinfo.name }} : </h3>

            <table id="albumsTable" class="table table-hover table-dark">
            <thead>
                <tr>
                    <th scope="col">Titre</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="release in artistinfo.releases" v-on:click="$emit('showalbumevent', release.id)">
                    <td>{{ release.title }}</td>
                    <td>{{ release.date }}</td>
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
                    <th scope="col" >Artiste</th>
                    <th scope="col" >Album</th>
                    <th scope="col">Score</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="recording in recordingsdata" id="notClickable" >
                    <td></td><td></td>
                    <td>{{ recording.title }}</td>
                    <td v-on:click="$emit('showartistevent', recording['artist-credit'][0].artist.id )"> <a id="nomArtistAlbumPage" >{{ recording['artist-credit'][0].artist.name }}</a></td>
                    <td v-on:click="$emit('showalbumevent', recording['releases'][0].id)"><a id="nomArtistAlbumPage" >{{ recording.releases[0].title.trim() }}</a></td>
                    <td>{{ recording.score }}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
    ,

    props: ['recordingsdata'],
})


// Component qui génère la table pour afficher les chansons d'un albums
Vue.component('tablelistalbumrecordings', {
    template:
        `
    <div v-if="albuminfo != ''">
            <div id="stripArtistName" class="d-flex justify-content-center"><h2 id="artistName">{{ albuminfo.title }}</h2></div>
            
            <div class="container">
            <button v-on:click="$emit('backevent')" id="backButton" class="btn">Retour</button>
            <h3>Tracklist de l'album {{ albuminfo.title }} de <span id="nomArtistAlbumPage" v-on:click="$emit('showartistevent', albuminfo['artist-credit'][0].artist.id)"> {{ albuminfo['artist-credit'][0].artist.name }} </span></h3>
            
            <table id="albumsTable" class="table table-hover table-dark">
            <thead>
                <tr>
                <th scope="col">Numero</th>
                <th scope="col">Titre</th>
                <th scope="col">Duree</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="record in albuminfo.media[0].tracks" id="notClickable">
                    <td>{{ record.number }}</td>
                    <td>{{ record.title }}</td>
                    <td>{{ record.length | convertTime }} min</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    `
    ,

    props: ['albuminfo'],
    filters: {

        //Filtre pour convertir le temps des tracks de millisecondes à secondes et minutes
        convertTime: function (value) {
            var date = new Date(value)
            var m = date.getMinutes()
            var s = date.getSeconds()
            return m + "\'" + s + "\'\'"
        }
    },
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
                <th scope="col">Titre</th>
                <th scope="col">Artiste</th>
                <th scope="col">Date</th>
                <th scope="col">Score</th>
                <th scope="col"></th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="release in releasesdata" id="notClickable">
                    <td></td><td></td>
                    <td v-on:click="$emit('showalbumevent', release.id )"><a id="nomArtistAlbumPage" >{{ release.title }}</td>
                    <td v-on:click="$emit('showartistevent', release['artist-credit'][0].artist.id )"> <a id="nomArtistAlbumPage" >{{ release['artist-credit'][0].artist.name }}</a></td>
                    <td>{{ release.date }}</td>
                    <td>{{ release.score }}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
    `
    ,

    props: ['releasesdata'],
})
