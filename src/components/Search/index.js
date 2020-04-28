import React from 'react'

// Import Components for App
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Stats, Hits } from 'react-instantsearch-dom'
import Hit from './Hit'

// Import Styles
import * as S from './styled'

// Import variables custom from .env file
// Importation des clés en veillant à les préfixer avec "GATSBY_" dans le fichier .env pour pouvoir les exporter. L'importation de cette façon, évite de pousser des valeurs réelles sur le répository
const algolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  algoliaSearchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_API_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

// Import variables from Algolia functional component
// searchClient a besoin de passer l'identifiant de l'Application et la clé publique de recherche.
const searchClient = algoliasearch(algolia.appId, algolia.algoliaSearchOnlyApiKey);


// Component
const Search = () => (
  // Render Component
  <S.SearchWrapper>

    {/* Composant Algolia global */}
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>

      {/* Barre de recherche Algolia. L'autoFocus provoque un warning */}
      <SearchBox autoFocus translations={{
        placeholder: 'Search here...',
      }}r/>

      {/* Statistiques de recherche Algolia */}
      <Stats translations={{
        stats(nbHits, timeSpentMS) {
          return `${nbHits} résultat(s) en ${timeSpentMS}ms`;
        },
      }}/>

      {/* Composant du rendu de recherche Algolia */}
      <Hits hitComponent={Hit} />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
