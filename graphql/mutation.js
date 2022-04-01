import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($registuser:userInput!){
        createUser( registuser: $registuser){id}
    }
`
export const AUTHENTICATE_USER = gql `
    mutation authentification($email: String!, $password:String!){
        authentification(email:$email, password:$password){token}
    }
`
export const UPDATE_USER = gql `
    mutation updateUser($id:ID!, $updtateUserinput: updateuserInput!){
        updateUser(id:$id, updtateUserinput:$updtateUserinput){
            is_admin, name, firstname, postal_code, email, phone, password, phone, city, country, profil_image
        }
    }
`
export const DELETE_USER = gql `
    mutation  deleteUser($id:ID!)
    {
        deleteUser(id:$id)
    }
`

export const CREATE_STATUT = gql `
    mutation createStatut ($name: String!, $description: String!, $color:String)
    { 
        createStatut( name:$name, description:$description, color:$color){
            color, description, name
        }
    }
`

export const DELETE_STATUT = gql`
    mutation deleteStatut($id:ID!){
        deleteStatut(id: $id)
    }
`
export const UPDATE_STATUT = gql`
    mutation updateStatut($id:ID!, $Statutinput: Statutinput){
        updateStatut(id:$id, Statutinput:$Statutinput){name, color, description}
    }
`

export const CREATE_RULES = gql`
    mutation createUserrole($name: String!){
        createUserrole( name:$name){id, name}
    }
`

export const DELETE_RULES = gql`
    mutation deleteUserrole($id:ID!){
        deleteUserrole(id: $id)
    }
`

export const UPDATE_RULES = gql `
    mutation
        updateUserrole($id:ID!, $Userroleinput: Userroleinput)
         {
            updateUserrole(id:$id, Userroleinput:$Userroleinput){name}
         }
    
`

export const CREATE_PROJECT = gql`
    mutation createproject($projectdataInput:projectdataInput){
        createproject(projectdataInput: $projectdataInput){id}
    }
`

export const UPDATE_PROJECT = gql`
    mutation
        updateproject($id:ID!, $projectInputUpdate: projectInputUpdate)
         {
            updateproject(id:$id, projectInputUpdate:$projectInputUpdate){id}
         }
    
`

export const CREATE_TASK = gql`
    mutation createtask($taskInput:taskInput){
        createtask(taskInput: $taskInput){id}
    }
`

export const UPDATE_TASK = gql`
    mutation updatetask($id:ID!, $updatetaskInput:updatetaskInput)
        {
            updatetask(id:$id, updatetaskInput:$updatetaskInput){id}
        }
`

export const DELETE_TASK = gql`
    mutation deletetask($id:ID!){
        deletetask(id: $id)
    }
`

export const DELETE_PROJECT = gql`
    mutation deleteproject($id:ID!){
        deleteproject(id:$id)
    }
`