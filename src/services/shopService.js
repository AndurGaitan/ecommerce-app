import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { baseUrl } from "../dataBases/realtimeDatabase"


export const shopApi = createApi({
    baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
    endpoints: (buider) => ({
        getCategory: buider.query({
            query: () => `categories.json`

        }),
        getProductsByCategory: buider.query ({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                return responseTransformed
            }
        }),
        getProductById: buider.query({
            query: (productId) => `products.json?orderBy="id"&equalTo=${productId}`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response)
                if(responseTransformed.length) return responseTransformed[0]
                return null
            }
        })

    })
})

export const {useGetCategoryQuery, useGetProductByIdQuery, useGetProductsByCategoryQuery} = shopApi