import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type LogEntry = {
  __typename?: "LogEntry";
  comments?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  imageUrl?: Maybe<Scalars["String"]>;
  location: Array<Scalars["Float"]>;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
  user: User;
  userId: Scalars["ID"];
  visitDate?: Maybe<Scalars["DateTime"]>;
};

export type LogEntryInput = {
  comments?: InputMaybe<Scalars["String"]>;
  description?: InputMaybe<Scalars["String"]>;
  imageUrl?: InputMaybe<Scalars["String"]>;
  location: Array<Scalars["Float"]>;
  title: Scalars["String"];
  visitDate?: InputMaybe<Scalars["DateTime"]>;
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  accessToken: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createLogEntry: LogEntry;
  login: LoginResponse;
  register: User;
};

export type MutationCreateLogEntryArgs = {
  options: LogEntryInput;
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRegisterArgs = {
  options: UserInput;
};

export type Query = {
  __typename?: "Query";
  allLogEntries: Array<LogEntry>;
  allUser: Array<User>;
  users: Array<User>;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  phoneNumber?: Maybe<Scalars["Float"]>;
  role: UserRole;
  updatedAt: Scalars["DateTime"];
};

export type UserInput = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
  phoneNumber?: InputMaybe<Scalars["Float"]>;
};

export enum UserRole {
  Admin = "ADMIN",
  Moderator = "MODERATOR",
  User = "USER",
}

export type LoginMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: { __typename?: "LoginResponse"; accessToken: string };
};

export type RegisterMutationVariables = Exact<{
  options: UserInput;
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "User";
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber?: number | null | undefined;
    role: UserRole;
    createdAt: any;
    updatedAt: any;
  };
};

export type AllLogEntriesQueryVariables = Exact<{ [key: string]: never }>;

export type AllLogEntriesQuery = {
  __typename?: "Query";
  allLogEntries: Array<{
    __typename?: "LogEntry";
    id: string;
    title: string;
    comments?: string | null | undefined;
    visitDate?: any | null | undefined;
    user: {
      __typename?: "User";
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber?: number | null | undefined;
      role: UserRole;
    };
  }>;
};

export const LoginDocument = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($options: UserInput!) {
    register(options: $options) {
      id
      email
      firstName
      lastName
      phoneNumber
      role
      createdAt
      updatedAt
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const AllLogEntriesDocument = gql`
  query allLogEntries {
    allLogEntries {
      id
      title
      comments
      visitDate
      user {
        firstName
        lastName
        email
        phoneNumber
        role
      }
    }
  }
`;

/**
 * __useAllLogEntriesQuery__
 *
 * To run a query within a React component, call `useAllLogEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLogEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLogEntriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllLogEntriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllLogEntriesQuery,
    AllLogEntriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllLogEntriesQuery, AllLogEntriesQueryVariables>(
    AllLogEntriesDocument,
    options
  );
}
export function useAllLogEntriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllLogEntriesQuery,
    AllLogEntriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllLogEntriesQuery, AllLogEntriesQueryVariables>(
    AllLogEntriesDocument,
    options
  );
}
export type AllLogEntriesQueryHookResult = ReturnType<
  typeof useAllLogEntriesQuery
>;
export type AllLogEntriesLazyQueryHookResult = ReturnType<
  typeof useAllLogEntriesLazyQuery
>;
export type AllLogEntriesQueryResult = Apollo.QueryResult<
  AllLogEntriesQuery,
  AllLogEntriesQueryVariables
>;
