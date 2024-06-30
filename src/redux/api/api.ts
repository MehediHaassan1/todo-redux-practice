import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        getAllTasks: builder.query({
            query: (priority) => {
                const params = new URLSearchParams();
                if (priority) {
                    params.append('priority', priority);
                }



                return {

                    url: `/tasks`,
                    method: 'GET',
                    params
                }
            },
            transformResponse: (response) => {
                console.log(response);
                return {
                    status: true,
                    data: response.data.slice().sort((a, b) => {
                        console.log(a, b)
                        if (a.isCompleted === true && b.isCompleted !== true) return 1;
                        return -1;
                    }),
                };
            },
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
        }),
        updateTask: builder.mutation({
            query: (options) => {
                return {
                    url: `/task/${options.id}`,
                    method: "PUT",
                    body: {
                        ...options,
                        updatedAt: new Date()
                    },
                }
            },
            invalidatesTags: ['todo'],
        })
    }),
})


export const { useGetAllTasksQuery, useCreateTaskMutation, useUpdateTaskMutation } = baseApi;