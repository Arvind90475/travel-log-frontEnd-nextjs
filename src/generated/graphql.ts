import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
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
  __typename?: 'LogEntry';
  comments?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  location: Array<Scalars['Float']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
  visitDate?: Maybe<Scalars['DateTime']>;
};

export type LogEntryInput = {
  comments?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  location: Array<Scalars['Float']>;
  title: Scalars['String'];
  visitDate?: InputMaybe<Scalars['DateTime']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLogEntry: LogEntry;
  login: LoginResponse;
  register: User;
};


export type MutationCreateLogEntryArgs = {
  options: LogEntryInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UserInput;
};

export type Query = {
  __typename?: 'Query';
  allLogEntries: Array<LogEntry>;
  allUser: Array<User>;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  phoneNumber?: Maybe<Scalars['Float']>;
  role: UserRole;
  updatedAt: Scalars['DateTime'];
};

export type UserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['Float']>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type AllLogEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllLogEntriesQuery = { __typename?: 'Query', allLogEntries: Array<{ __typename?: 'LogEntry', id: string, title: string, comments?: string | null | undefined, visitDate?: any | null | undefined, user: { __typename?: 'User', firstName: string, lastName: string, email: string, phoneNumber?: number | null | undefined, role: UserRole } }> };


export const AllLogEntriesDocument = `
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
export const useAllLogEntriesQuery = <
      TData = AllLogEntriesQuery,
      TError = unknown
    >(
      variables?: AllLogEntriesQueryVariables,
      options?: UseQueryOptions<AllLogEntriesQuery, TError, TData>
    ) =>
    useQuery<AllLogEntriesQuery, TError, TData>(
      variables === undefined ? ['allLogEntries'] : ['allLogEntries', variables],
      fetcher<AllLogEntriesQuery, AllLogEntriesQueryVariables>(AllLogEntriesDocument, variables),
      options
    );