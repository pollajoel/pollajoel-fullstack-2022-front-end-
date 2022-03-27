import { gql } from '@apollo/client';

export const GET_ME = gql`
	query{ getMe{ is_admin, id, name, firstname, email, password, postal_code, country, profil_image}}
`
export const USERS = gql`
	query{ users{id, name, firstname, email, phone, profil_image, password,city, country, postal_code}}
`
export const USER = gql`
      query user($id: ID!){ user(id:$id){id, name, firstname, postal_code, email, phone, password, phone, city, country, profil_image}}
    `
export const STATUS = gql`
  query { statuts{id, name, description, color} }
`

export const RULES = gql`
  query{userroles{id, name}}
`

export const PROJECTS = gql`
query
{
  projects
  { id, title, description, start_date, end_date, 
      statut{ id, name, description, color }, 
      user{id, name} ,
      userId,
      statutId
  }
} 
`

export const TASKS = gql `
query{tasks{id,name,start_date, end_date, statut{id,name,description}, statutId, user{id}}}
`