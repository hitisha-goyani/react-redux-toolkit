import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const recipeApi = createApi({
    reducerPath:"recipeApi",
    baseQuery:fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints:(builder) =>({
        allRecipe:builder.query({
            query:(end) =>end,

        }),
         productPage: builder.query({
            query: (p) => `products?skip=${p}`,
        })
    })

})

export const {useAllRecipeQuery,useProductPageQuery } = recipeApi