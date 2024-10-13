import type {
  UseMutationOptions as RQUseMutationOptions,
  UseQueryOptions as RQUseQueryOptions,
} from '@tanstack/react-query';
import { useMutation, useQuery } from '@tanstack/react-query';
import type { FetchOptions } from 'openapi-fetch';
import type { HttpMethod, PathsWithMethod } from 'openapi-typescript-helpers';
import { client } from './client';
import type { paths } from './types';

type Paths<M extends HttpMethod> = PathsWithMethod<paths, M>;
type Params<M extends HttpMethod, P extends Paths<M>> = M extends keyof paths[P] ? FetchOptions<paths[P][M]> : never;

type UseQueryOptions = Pick<RQUseQueryOptions, 'enabled'>;

export function useGetQuery<P extends Paths<'get'>>(path: P, params: Params<'get', P> & { rq?: UseQueryOptions }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return useQuery({
    queryKey: [path, params],
    queryFn: async () => client.GET(path, params).then(({ data }) => data),
    ...params.rq,
  });
}

type UseMutationOptions = Pick<RQUseMutationOptions, 'retry'>;

export function usePostMutation<P extends Paths<'post'>>(path: P, options?: UseMutationOptions) {
  return useMutation({
    mutationFn: (params: Params<'post', P>) => client.POST(path, params),
    ...options,
  });
}

export function usePutMutation<P extends Paths<'put'>>(path: P, options?: UseMutationOptions) {
  return useMutation({
    mutationFn: (params: Params<'put', P>) => client.PUT(path, params).then(({ data }) => data),
    ...options,
  });
}

export function useDeleteMutation<P extends Paths<'delete'>>(path: P, options?: UseMutationOptions) {
  return useMutation({
    mutationFn: (params: Params<'delete', P>) => client.DELETE(path, params).then(({ data }) => data),
    ...options,
  });
}
