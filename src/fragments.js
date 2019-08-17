export const USER_FRAGMENT =`
  fragment Userparts on User{
    id
    name
    email
    firstName
    lastName
    bio
    posts {
      id
      caption
    }
  }
`

export const COMMENT_FRAGMENT = `
  fragment CommentParts on Comment {
    id
    text
    user {
      name
    }
  }
`