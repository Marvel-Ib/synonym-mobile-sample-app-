import * as $protobuf from "protobufjs";
/** Namespace ss_lnrpc. */
export namespace ss_lnrpc {

    /** Represents a State */
    class State extends $protobuf.rpc.Service {

        /**
         * Constructs a new State service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new State service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): State;

        /**
         * Calls SubscribeState.
         * @param request SubscribeStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SubscribeStateResponse
         */
        public subscribeState(request: ss_lnrpc.ISubscribeStateRequest, callback: ss_lnrpc.State.SubscribeStateCallback): void;

        /**
         * Calls SubscribeState.
         * @param request SubscribeStateRequest message or plain object
         * @returns Promise
         */
        public subscribeState(request: ss_lnrpc.ISubscribeStateRequest): Promise<ss_lnrpc.SubscribeStateResponse>;

        /**
         * Calls GetState.
         * @param request GetStateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetStateResponse
         */
        public getState(request: ss_lnrpc.IGetStateRequest, callback: ss_lnrpc.State.GetStateCallback): void;

        /**
         * Calls GetState.
         * @param request GetStateRequest message or plain object
         * @returns Promise
         */
        public getState(request: ss_lnrpc.IGetStateRequest): Promise<ss_lnrpc.GetStateResponse>;
    }

    namespace State {

        /**
         * Callback as used by {@link ss_lnrpc.State#subscribeState}.
         * @param error Error, if any
         * @param [response] SubscribeStateResponse
         */
        type SubscribeStateCallback = (error: (Error|null), response?: ss_lnrpc.SubscribeStateResponse) => void;

        /**
         * Callback as used by {@link ss_lnrpc.State#getState}.
         * @param error Error, if any
         * @param [response] GetStateResponse
         */
        type GetStateCallback = (error: (Error|null), response?: ss_lnrpc.GetStateResponse) => void;
    }

    /** WalletState enum. */
    enum WalletState {
        NON_EXISTING = 0,
        LOCKED = 1,
        UNLOCKED = 2,
        RPC_ACTIVE = 3,
        WAITING_TO_START = 255
    }

    /** Properties of a SubscribeStateRequest. */
    interface ISubscribeStateRequest {
    }

    /** Represents a SubscribeStateRequest. */
    class SubscribeStateRequest implements ISubscribeStateRequest {

        /**
         * Constructs a new SubscribeStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ss_lnrpc.ISubscribeStateRequest);

        /**
         * Creates a new SubscribeStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeStateRequest instance
         */
        public static create(properties?: ss_lnrpc.ISubscribeStateRequest): ss_lnrpc.SubscribeStateRequest;

        /**
         * Encodes the specified SubscribeStateRequest message. Does not implicitly {@link ss_lnrpc.SubscribeStateRequest.verify|verify} messages.
         * @param message SubscribeStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ss_lnrpc.ISubscribeStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeStateRequest message, length delimited. Does not implicitly {@link ss_lnrpc.SubscribeStateRequest.verify|verify} messages.
         * @param message SubscribeStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ss_lnrpc.ISubscribeStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ss_lnrpc.SubscribeStateRequest;

        /**
         * Decodes a SubscribeStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ss_lnrpc.SubscribeStateRequest;

        /**
         * Verifies a SubscribeStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeStateRequest
         */
        public static fromObject(object: { [k: string]: any }): ss_lnrpc.SubscribeStateRequest;

        /**
         * Creates a plain object from a SubscribeStateRequest message. Also converts values to other types if specified.
         * @param message SubscribeStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ss_lnrpc.SubscribeStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SubscribeStateResponse. */
    interface ISubscribeStateResponse {

        /** SubscribeStateResponse state */
        state?: (ss_lnrpc.WalletState|null);
    }

    /** Represents a SubscribeStateResponse. */
    class SubscribeStateResponse implements ISubscribeStateResponse {

        /**
         * Constructs a new SubscribeStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ss_lnrpc.ISubscribeStateResponse);

        /** SubscribeStateResponse state. */
        public state: ss_lnrpc.WalletState;

        /**
         * Creates a new SubscribeStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SubscribeStateResponse instance
         */
        public static create(properties?: ss_lnrpc.ISubscribeStateResponse): ss_lnrpc.SubscribeStateResponse;

        /**
         * Encodes the specified SubscribeStateResponse message. Does not implicitly {@link ss_lnrpc.SubscribeStateResponse.verify|verify} messages.
         * @param message SubscribeStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ss_lnrpc.ISubscribeStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SubscribeStateResponse message, length delimited. Does not implicitly {@link ss_lnrpc.SubscribeStateResponse.verify|verify} messages.
         * @param message SubscribeStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ss_lnrpc.ISubscribeStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SubscribeStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SubscribeStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ss_lnrpc.SubscribeStateResponse;

        /**
         * Decodes a SubscribeStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SubscribeStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ss_lnrpc.SubscribeStateResponse;

        /**
         * Verifies a SubscribeStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SubscribeStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SubscribeStateResponse
         */
        public static fromObject(object: { [k: string]: any }): ss_lnrpc.SubscribeStateResponse;

        /**
         * Creates a plain object from a SubscribeStateResponse message. Also converts values to other types if specified.
         * @param message SubscribeStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ss_lnrpc.SubscribeStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SubscribeStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStateRequest. */
    interface IGetStateRequest {
    }

    /** Represents a GetStateRequest. */
    class GetStateRequest implements IGetStateRequest {

        /**
         * Constructs a new GetStateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: ss_lnrpc.IGetStateRequest);

        /**
         * Creates a new GetStateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStateRequest instance
         */
        public static create(properties?: ss_lnrpc.IGetStateRequest): ss_lnrpc.GetStateRequest;

        /**
         * Encodes the specified GetStateRequest message. Does not implicitly {@link ss_lnrpc.GetStateRequest.verify|verify} messages.
         * @param message GetStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ss_lnrpc.IGetStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStateRequest message, length delimited. Does not implicitly {@link ss_lnrpc.GetStateRequest.verify|verify} messages.
         * @param message GetStateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ss_lnrpc.IGetStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ss_lnrpc.GetStateRequest;

        /**
         * Decodes a GetStateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ss_lnrpc.GetStateRequest;

        /**
         * Verifies a GetStateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStateRequest
         */
        public static fromObject(object: { [k: string]: any }): ss_lnrpc.GetStateRequest;

        /**
         * Creates a plain object from a GetStateRequest message. Also converts values to other types if specified.
         * @param message GetStateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ss_lnrpc.GetStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetStateResponse. */
    interface IGetStateResponse {

        /** GetStateResponse state */
        state?: (ss_lnrpc.WalletState|null);
    }

    /** Represents a GetStateResponse. */
    class GetStateResponse implements IGetStateResponse {

        /**
         * Constructs a new GetStateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: ss_lnrpc.IGetStateResponse);

        /** GetStateResponse state. */
        public state: ss_lnrpc.WalletState;

        /**
         * Creates a new GetStateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetStateResponse instance
         */
        public static create(properties?: ss_lnrpc.IGetStateResponse): ss_lnrpc.GetStateResponse;

        /**
         * Encodes the specified GetStateResponse message. Does not implicitly {@link ss_lnrpc.GetStateResponse.verify|verify} messages.
         * @param message GetStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ss_lnrpc.IGetStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetStateResponse message, length delimited. Does not implicitly {@link ss_lnrpc.GetStateResponse.verify|verify} messages.
         * @param message GetStateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ss_lnrpc.IGetStateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetStateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ss_lnrpc.GetStateResponse;

        /**
         * Decodes a GetStateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ss_lnrpc.GetStateResponse;

        /**
         * Verifies a GetStateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetStateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetStateResponse
         */
        public static fromObject(object: { [k: string]: any }): ss_lnrpc.GetStateResponse;

        /**
         * Creates a plain object from a GetStateResponse message. Also converts values to other types if specified.
         * @param message GetStateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ss_lnrpc.GetStateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetStateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
