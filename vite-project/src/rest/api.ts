/**
 * Generated by orval v6.12.1 🍺
 * Do not edit manually.
 * REST API仕様
 * BackEndのREST API仕様です
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  MarkerYml
} from './model/components-Marker.yml'
import type {
  MarkerCreateBody
} from './model'


/**
 * Marker登録APIです
 * @summary Marker登録API
 */
export const markerCreate = (
    markerCreateBody: MarkerCreateBody, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<MarkerYml>> => {
    return axios.post(
      `/marker/create`,
      markerCreateBody,options
    );
  }



    export type MarkerCreateMutationResult = NonNullable<Awaited<ReturnType<typeof markerCreate>>>
    export type MarkerCreateMutationBody = MarkerCreateBody
    export type MarkerCreateMutationError = AxiosError<unknown>

    export const useMarkerCreate = <TError = AxiosError<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof markerCreate>>, TError,{data: MarkerCreateBody}, TContext>, axios?: AxiosRequestConfig}
) => {
      const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof markerCreate>>, {data: MarkerCreateBody}> = (props) => {
          const {data} = props ?? {};

          return  markerCreate(data,axiosOptions)
        }

        

      return useMutation<Awaited<ReturnType<typeof markerCreate>>, TError, {data: MarkerCreateBody}, TContext>(mutationFn, mutationOptions);
    }
    
/**
 * Marker取得API(ID指定)です
 * @summary Marker取得API(ID指定)
 */
export const markerById = (
    id: number, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<MarkerYml>> => {
    return axios.get(
      `/marker/${id}`,options
    );
  }


export const getMarkerByIdQueryKey = (id: number,) => [`/marker/${id}`];

    
export type MarkerByIdQueryResult = NonNullable<Awaited<ReturnType<typeof markerById>>>
export type MarkerByIdQueryError = AxiosError<unknown>

export const useMarkerById = <TData = Awaited<ReturnType<typeof markerById>>, TError = AxiosError<unknown>>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof markerById>>, TError, TData>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getMarkerByIdQueryKey(id);

  


  const queryFn: QueryFunction<Awaited<ReturnType<typeof markerById>>> = ({ signal }) => markerById(id, { signal, ...axiosOptions });


  

  const query = useQuery<Awaited<ReturnType<typeof markerById>>, TError, TData>({ queryKey, queryFn, enabled: !!(id), ...queryOptions}) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
}


