import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($registuser:userInput!){
        createUser( registuser: $registuser){id}
    }
`