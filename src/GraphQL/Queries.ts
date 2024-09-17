import {gql} from "@apollo/client"

export const GET_HIGHLIGHTS = gql`
    query Query {
        highlights {
        title
        videos {
            embed
            title
        }
        competition
        date
        }
    }
`


export const SEARCH_PLAYER = gql`
  
  query Query($search: String) {
    searchPlayer(search: $search) {
      firstName
      lastName
      position
      photo
      flag
      logo
      club
    }
  }

`

export const GET_LEAGUE = gql `
    query Query {
      getLeague {
        league {
          name
          logo
          type
        }
        country {
          name
          flag
        }
      }
    }


`