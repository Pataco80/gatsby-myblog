import React from 'react'

// Import Components for App
import PostItem from '../../Home/PostItem'

// Passer en props l'objet "hitComponent" appelé "hit" dans les composants React des outils de dev du navigateur.
// Component
const Hit = ({hit}) =>  (
  // Passer les champs Algolia dans la props concernée. en cas de problème, examinez le chemin via les devtools ou effacez tous les items d'Algolia et faites "gatsby clean" et "gatsby build" pour renvoyer les données propres sur Algolia.
  
  // Render Component
  <PostItem slug={hit.fields.slug} title={hit.title} description={hit.description} category={hit.category} date={hit.date} background={hit.background} />
  )

export default Hit
