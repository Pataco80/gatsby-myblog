import React from 'react'

// Import components from Gatsby and plugins Gatsby

// Import Components for App
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Stats, Hits } from 'react-instantsearch-dom';

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
    <InstantSearch searchClient={searchClient} indexName={algolia.indexName}>
      <SearchBox autoFocus translations={{
        placeholder: 'Search here...',
      }}r/>
      <Stats translations={{
        stats(nbHits, timeSpentMS) {
          return `${nbHits} résultat(s) en ${timeSpentMS}ms`;
        },
      }}/>
      <Hits />
    </InstantSearch>
  </S.SearchWrapper>
)

export default Search
