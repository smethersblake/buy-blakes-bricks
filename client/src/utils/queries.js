import { gql } from '@apollo/client';

export const QUERY_GET_BRICKS = gql`
    query getBricks($name: String) {
        getBricks( name: $name){
         _id: ID
        part_num: Int
        name: String
        part_cat_id: Int
        part_url: String
        part_img_url: String
        quantity: Int
        price: Float
        print_of: String
        color: Color
        }
    }
`;

export const QUERY_CATEGORIES = gql`
    {
        getCategories {
            id
            name
        }
    }
`
export const QUERY_BRICKS = gql`
query($getCategoriesId: Int) {
    getCategories(id: $getCategoriesId) {
      name
      id
    }
    getBricks {
        _id
        part_num
        name
        part_cat_id
        part_url
        part_img_url
        quantity
        price
        color_id
    }
  }`



