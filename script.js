/* components pour music brainz */

// Component qui génère la table pour afficher les artistes
Vue.component('tablelistartists', {
    template:
    `
    <div v-if="artistsdata != ''">
        <table id="mytable" class="table table-dark">
            <thead>
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Type</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="artist in artistsdata">
                    <td>{{ artist.name }}</td>
                    <td>{{ artist.type }}</td>
                    <td>{{ artist.score }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    ` 
    ,

    props:['artistsdata'],
})

// Component qui génère la table pour afficher les chansons
Vue.component('tablelistrecordings', {
    template:
    `
    <div v-if="recordingsdata != ''">
        <table id="mytable" class="table table-dark">
            <thead>
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">deux</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="recording in recordingsdata">
                    <td>{{ recording.title }}</td>
                    <td>{{ recording.releases.date }}</td>
                    <td>{{ recording.score }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    ` 
    ,

    props:['recordingsdata'],
})


// Component qui génère la table pour afficher les albums (cdstubs)
Vue.component('tablelistcdstubs', {
    template:
    `
    <div v-if="cdstubsdata != ''">
        <table id="mytable" class="table table-dark">
            <thead>
                <tr>
                <th scope="col">Nom</th>
                <th scope="col">Artiste</th>
                <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
            <tr v-for="cdstub in cdstubsdata">
                    <td>{{ cdstub.title }}</td>
                    <td>{{ cdstub.artist }}</td>
                    <td>{{ cdstub.score }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    ` 
    ,

    props:['cdstubsdata'],
})
