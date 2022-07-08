/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ss_lnrpc = (function() {

    /**
     * Namespace ss_lnrpc.
     * @exports ss_lnrpc
     * @namespace
     */
    var ss_lnrpc = {};

    ss_lnrpc.State = (function() {

        /**
         * Constructs a new State service.
         * @memberof ss_lnrpc
         * @classdesc Represents a State
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function State(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (State.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = State;

        /**
         * Creates new State service using the specified rpc implementation.
         * @function create
         * @memberof ss_lnrpc.State
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {State} RPC service. Useful where requests and/or responses are streamed.
         */
        State.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link ss_lnrpc.State#subscribeState}.
         * @memberof ss_lnrpc.State
         * @typedef SubscribeStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ss_lnrpc.SubscribeStateResponse} [response] SubscribeStateResponse
         */

        /**
         * Calls SubscribeState.
         * @function subscribeState
         * @memberof ss_lnrpc.State
         * @instance
         * @param {ss_lnrpc.ISubscribeStateRequest} request SubscribeStateRequest message or plain object
         * @param {ss_lnrpc.State.SubscribeStateCallback} callback Node-style callback called with the error, if any, and SubscribeStateResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(State.prototype.subscribeState = function subscribeState(request, callback) {
            return this.rpcCall(subscribeState, $root.ss_lnrpc.SubscribeStateRequest, $root.ss_lnrpc.SubscribeStateResponse, request, callback);
        }, "name", { value: "SubscribeState" });

        /**
         * Calls SubscribeState.
         * @function subscribeState
         * @memberof ss_lnrpc.State
         * @instance
         * @param {ss_lnrpc.ISubscribeStateRequest} request SubscribeStateRequest message or plain object
         * @returns {Promise<ss_lnrpc.SubscribeStateResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link ss_lnrpc.State#getState}.
         * @memberof ss_lnrpc.State
         * @typedef GetStateCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {ss_lnrpc.GetStateResponse} [response] GetStateResponse
         */

        /**
         * Calls GetState.
         * @function getState
         * @memberof ss_lnrpc.State
         * @instance
         * @param {ss_lnrpc.IGetStateRequest} request GetStateRequest message or plain object
         * @param {ss_lnrpc.State.GetStateCallback} callback Node-style callback called with the error, if any, and GetStateResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(State.prototype.getState = function getState(request, callback) {
            return this.rpcCall(getState, $root.ss_lnrpc.GetStateRequest, $root.ss_lnrpc.GetStateResponse, request, callback);
        }, "name", { value: "GetState" });

        /**
         * Calls GetState.
         * @function getState
         * @memberof ss_lnrpc.State
         * @instance
         * @param {ss_lnrpc.IGetStateRequest} request GetStateRequest message or plain object
         * @returns {Promise<ss_lnrpc.GetStateResponse>} Promise
         * @variation 2
         */

        return State;
    })();

    /**
     * WalletState enum.
     * @name ss_lnrpc.WalletState
     * @enum {number}
     * @property {number} NON_EXISTING=0 NON_EXISTING value
     * @property {number} LOCKED=1 LOCKED value
     * @property {number} UNLOCKED=2 UNLOCKED value
     * @property {number} RPC_ACTIVE=3 RPC_ACTIVE value
     * @property {number} WAITING_TO_START=255 WAITING_TO_START value
     */
    ss_lnrpc.WalletState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NON_EXISTING"] = 0;
        values[valuesById[1] = "LOCKED"] = 1;
        values[valuesById[2] = "UNLOCKED"] = 2;
        values[valuesById[3] = "RPC_ACTIVE"] = 3;
        values[valuesById[255] = "WAITING_TO_START"] = 255;
        return values;
    })();

    ss_lnrpc.SubscribeStateRequest = (function() {

        /**
         * Properties of a SubscribeStateRequest.
         * @memberof ss_lnrpc
         * @interface ISubscribeStateRequest
         */

        /**
         * Constructs a new SubscribeStateRequest.
         * @memberof ss_lnrpc
         * @classdesc Represents a SubscribeStateRequest.
         * @implements ISubscribeStateRequest
         * @constructor
         * @param {ss_lnrpc.ISubscribeStateRequest=} [properties] Properties to set
         */
        function SubscribeStateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SubscribeStateRequest instance using the specified properties.
         * @function create
         * @memberof ss_lnrpc.SubscribeStateRequest
         * @static
         * @param {ss_lnrpc.ISubscribeStateRequest=} [properties] Properties to set
         * @returns {ss_lnrpc.SubscribeStateRequest} SubscribeStateRequest instance
         */
        SubscribeStateRequest.create = function create(properties) {
            return new SubscribeStateRequest(properties);
        };

        /**
         * Encodes the specified SubscribeStateRequest message. Does not implicitly {@link ss_lnrpc.SubscribeStateRequest.verify|verify} messages.
         * @function encode
         * @memberof ss_lnrpc.SubscribeStateRequest
         * @static
         * @param {ss_lnrpc.ISubscribeStateRequest} message SubscribeStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeStateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SubscribeStateRequest message, length delimited. Does not implicitly {@link ss_lnrpc.SubscribeStateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ss_lnrpc.SubscribeStateRequest
         * @static
         * @param {ss_lnrpc.ISubscribeStateRequest} message SubscribeStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscribeStateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ss_lnrpc.SubscribeStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ss_lnrpc.SubscribeStateRequest} SubscribeStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeStateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ss_lnrpc.SubscribeStateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscribeStateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ss_lnrpc.SubscribeStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ss_lnrpc.SubscribeStateRequest} SubscribeStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeStateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscribeStateRequest message.
         * @function verify
         * @memberof ss_lnrpc.SubscribeStateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscribeStateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SubscribeStateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ss_lnrpc.SubscribeStateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ss_lnrpc.SubscribeStateRequest} SubscribeStateRequest
         */
        SubscribeStateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ss_lnrpc.SubscribeStateRequest)
                return object;
            return new $root.ss_lnrpc.SubscribeStateRequest();
        };

        /**
         * Creates a plain object from a SubscribeStateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ss_lnrpc.SubscribeStateRequest
         * @static
         * @param {ss_lnrpc.SubscribeStateRequest} message SubscribeStateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscribeStateRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SubscribeStateRequest to JSON.
         * @function toJSON
         * @memberof ss_lnrpc.SubscribeStateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscribeStateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SubscribeStateRequest;
    })();

    ss_lnrpc.SubscribeStateResponse = (function() {

        /**
         * Properties of a SubscribeStateResponse.
         * @memberof ss_lnrpc
         * @interface ISubscribeStateResponse
         * @property {ss_lnrpc.WalletState|null} [state] SubscribeStateResponse state
         */

        /**
         * Constructs a new SubscribeStateResponse.
         * @memberof ss_lnrpc
         * @classdesc Represents a SubscribeStateResponse.
         * @implements ISubscribeStateResponse
         * @constructor
         * @param {ss_lnrpc.ISubscribeStateResponse=} [properties] Properties to set
         */
        function SubscribeStateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SubscribeStateResponse state.
         * @member {ss_lnrpc.WalletState} state
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @instance
         */
        SubscribeStateResponse.prototype.state = 0;

        /**
         * Creates a new SubscribeStateResponse instance using the specified properties.
         * @function create
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @static
         * @param {ss_lnrpc.ISubscribeStateResponse=} [properties] Properties to set
         * @returns {ss_lnrpc.SubscribeStateResponse} SubscribeStateResponse instance
         */
        SubscribeStateResponse.create = function create(properties) {
            return new SubscribeStateResponse(properties);
        };

        /**
         * Encodes the specified SubscribeStateResponse message. Does not implicitly {@link ss_lnrpc.SubscribeStateResponse.verify|verify} messages.
         * @function encode
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @static
         * @param {ss_lnrpc.ISubscribeStateResponse} message SubscribeStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeStateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified SubscribeStateResponse message, length delimited. Does not implicitly {@link ss_lnrpc.SubscribeStateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @static
         * @param {ss_lnrpc.ISubscribeStateResponse} message SubscribeStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SubscribeStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SubscribeStateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ss_lnrpc.SubscribeStateResponse} SubscribeStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeStateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ss_lnrpc.SubscribeStateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SubscribeStateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ss_lnrpc.SubscribeStateResponse} SubscribeStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SubscribeStateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SubscribeStateResponse message.
         * @function verify
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SubscribeStateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 255:
                    break;
                }
            return null;
        };

        /**
         * Creates a SubscribeStateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ss_lnrpc.SubscribeStateResponse} SubscribeStateResponse
         */
        SubscribeStateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ss_lnrpc.SubscribeStateResponse)
                return object;
            var message = new $root.ss_lnrpc.SubscribeStateResponse();
            switch (object.state) {
            case "NON_EXISTING":
            case 0:
                message.state = 0;
                break;
            case "LOCKED":
            case 1:
                message.state = 1;
                break;
            case "UNLOCKED":
            case 2:
                message.state = 2;
                break;
            case "RPC_ACTIVE":
            case 3:
                message.state = 3;
                break;
            case "WAITING_TO_START":
            case 255:
                message.state = 255;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a SubscribeStateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @static
         * @param {ss_lnrpc.SubscribeStateResponse} message SubscribeStateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SubscribeStateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.state = options.enums === String ? "NON_EXISTING" : 0;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.ss_lnrpc.WalletState[message.state] : message.state;
            return object;
        };

        /**
         * Converts this SubscribeStateResponse to JSON.
         * @function toJSON
         * @memberof ss_lnrpc.SubscribeStateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SubscribeStateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SubscribeStateResponse;
    })();

    ss_lnrpc.GetStateRequest = (function() {

        /**
         * Properties of a GetStateRequest.
         * @memberof ss_lnrpc
         * @interface IGetStateRequest
         */

        /**
         * Constructs a new GetStateRequest.
         * @memberof ss_lnrpc
         * @classdesc Represents a GetStateRequest.
         * @implements IGetStateRequest
         * @constructor
         * @param {ss_lnrpc.IGetStateRequest=} [properties] Properties to set
         */
        function GetStateRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GetStateRequest instance using the specified properties.
         * @function create
         * @memberof ss_lnrpc.GetStateRequest
         * @static
         * @param {ss_lnrpc.IGetStateRequest=} [properties] Properties to set
         * @returns {ss_lnrpc.GetStateRequest} GetStateRequest instance
         */
        GetStateRequest.create = function create(properties) {
            return new GetStateRequest(properties);
        };

        /**
         * Encodes the specified GetStateRequest message. Does not implicitly {@link ss_lnrpc.GetStateRequest.verify|verify} messages.
         * @function encode
         * @memberof ss_lnrpc.GetStateRequest
         * @static
         * @param {ss_lnrpc.IGetStateRequest} message GetStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStateRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GetStateRequest message, length delimited. Does not implicitly {@link ss_lnrpc.GetStateRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ss_lnrpc.GetStateRequest
         * @static
         * @param {ss_lnrpc.IGetStateRequest} message GetStateRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStateRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetStateRequest message from the specified reader or buffer.
         * @function decode
         * @memberof ss_lnrpc.GetStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ss_lnrpc.GetStateRequest} GetStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStateRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ss_lnrpc.GetStateRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetStateRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ss_lnrpc.GetStateRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ss_lnrpc.GetStateRequest} GetStateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStateRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetStateRequest message.
         * @function verify
         * @memberof ss_lnrpc.GetStateRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetStateRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GetStateRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ss_lnrpc.GetStateRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ss_lnrpc.GetStateRequest} GetStateRequest
         */
        GetStateRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.ss_lnrpc.GetStateRequest)
                return object;
            return new $root.ss_lnrpc.GetStateRequest();
        };

        /**
         * Creates a plain object from a GetStateRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ss_lnrpc.GetStateRequest
         * @static
         * @param {ss_lnrpc.GetStateRequest} message GetStateRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetStateRequest.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GetStateRequest to JSON.
         * @function toJSON
         * @memberof ss_lnrpc.GetStateRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetStateRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetStateRequest;
    })();

    ss_lnrpc.GetStateResponse = (function() {

        /**
         * Properties of a GetStateResponse.
         * @memberof ss_lnrpc
         * @interface IGetStateResponse
         * @property {ss_lnrpc.WalletState|null} [state] GetStateResponse state
         */

        /**
         * Constructs a new GetStateResponse.
         * @memberof ss_lnrpc
         * @classdesc Represents a GetStateResponse.
         * @implements IGetStateResponse
         * @constructor
         * @param {ss_lnrpc.IGetStateResponse=} [properties] Properties to set
         */
        function GetStateResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetStateResponse state.
         * @member {ss_lnrpc.WalletState} state
         * @memberof ss_lnrpc.GetStateResponse
         * @instance
         */
        GetStateResponse.prototype.state = 0;

        /**
         * Creates a new GetStateResponse instance using the specified properties.
         * @function create
         * @memberof ss_lnrpc.GetStateResponse
         * @static
         * @param {ss_lnrpc.IGetStateResponse=} [properties] Properties to set
         * @returns {ss_lnrpc.GetStateResponse} GetStateResponse instance
         */
        GetStateResponse.create = function create(properties) {
            return new GetStateResponse(properties);
        };

        /**
         * Encodes the specified GetStateResponse message. Does not implicitly {@link ss_lnrpc.GetStateResponse.verify|verify} messages.
         * @function encode
         * @memberof ss_lnrpc.GetStateResponse
         * @static
         * @param {ss_lnrpc.IGetStateResponse} message GetStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStateResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified GetStateResponse message, length delimited. Does not implicitly {@link ss_lnrpc.GetStateResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ss_lnrpc.GetStateResponse
         * @static
         * @param {ss_lnrpc.IGetStateResponse} message GetStateResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetStateResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetStateResponse message from the specified reader or buffer.
         * @function decode
         * @memberof ss_lnrpc.GetStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ss_lnrpc.GetStateResponse} GetStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStateResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ss_lnrpc.GetStateResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetStateResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ss_lnrpc.GetStateResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ss_lnrpc.GetStateResponse} GetStateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetStateResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetStateResponse message.
         * @function verify
         * @memberof ss_lnrpc.GetStateResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetStateResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 255:
                    break;
                }
            return null;
        };

        /**
         * Creates a GetStateResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ss_lnrpc.GetStateResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ss_lnrpc.GetStateResponse} GetStateResponse
         */
        GetStateResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.ss_lnrpc.GetStateResponse)
                return object;
            var message = new $root.ss_lnrpc.GetStateResponse();
            switch (object.state) {
            case "NON_EXISTING":
            case 0:
                message.state = 0;
                break;
            case "LOCKED":
            case 1:
                message.state = 1;
                break;
            case "UNLOCKED":
            case 2:
                message.state = 2;
                break;
            case "RPC_ACTIVE":
            case 3:
                message.state = 3;
                break;
            case "WAITING_TO_START":
            case 255:
                message.state = 255;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a GetStateResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ss_lnrpc.GetStateResponse
         * @static
         * @param {ss_lnrpc.GetStateResponse} message GetStateResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetStateResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.state = options.enums === String ? "NON_EXISTING" : 0;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.ss_lnrpc.WalletState[message.state] : message.state;
            return object;
        };

        /**
         * Converts this GetStateResponse to JSON.
         * @function toJSON
         * @memberof ss_lnrpc.GetStateResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetStateResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetStateResponse;
    })();

    return ss_lnrpc;
})();

module.exports = $root;
