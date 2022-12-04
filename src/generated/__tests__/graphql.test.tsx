import {MeDocument, useMeQuery} from "../graphql";
import {renderHook} from "@testing-library/react-hooks";
import {MockedProvider} from "@apollo/client/testing";
import {ReactNode} from "react";

describe('useMeQuery', () => {
    it('Should load data', async () => {

        const wrapper = ({children}: {children: ReactNode}) => {
            const mockResponse = {
                request: {
                    query: MeDocument
                },
                result: {
                    data: {
                        me: {
                            id: 'id',
                            firstName: 'firstName',
                            lastName: 'lastName',
                            role: 'ADMIN',
                            createdAt: new Date().getTime()
                        }
                    }
                }
            };
            return <MockedProvider addTypename={false} mocks={[
                mockResponse
            ]}>{children}</MockedProvider>;
        }
        // @ts-ignore
        const {result, waitForNextUpdate } = renderHook(useMeQuery, {wrapper})
        await waitForNextUpdate()
        console.log(result.current.data)
        expect(result.current.data).not.toBeUndefined()
    })
})