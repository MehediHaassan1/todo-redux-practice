import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        getAllTasks: builder.query({
            query: () => ({
                url: '/tasks',
                method: 'GET',
            }),
            providesTags: ['todo'],
        }),
        createTask: builder.mutation({
            query: (data) => {
                return {
                    url: '/task',
                    method: "POST",
                    body: {
                        ...data,
                        createdAt: new Date(),
                        updatedAt: new Date()
                    },
                }
            },
            invalidatesTags: ['todo'],
        })
    }),
})


export const { useGetAllTasksQuery, useCreateTaskMutation } = baseApi;