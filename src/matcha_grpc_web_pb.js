/**
 * @fileoverview gRPC-Web generated client stub for matcha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!
/* eslint-diable */


const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.matcha = require('./matcha_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.matcha.forgotPasswordClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.matcha.forgotPasswordPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.sendEmailRequest,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_forgotPassword_sendEmail = new grpc.web.MethodDescriptor(
  '/matcha.forgotPassword/sendEmail',
  grpc.web.MethodType.UNARY,
  proto.matcha.sendEmailRequest,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.sendEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.sendEmailRequest,
 *   !proto.matcha.Reply>}
 */
const methodInfo_forgotPassword_sendEmail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.sendEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.sendEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.forgotPasswordClient.prototype.sendEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.forgotPassword/sendEmail',
      request,
      metadata || {},
      methodDescriptor_forgotPassword_sendEmail,
      callback);
};


/**
 * @param {!proto.matcha.sendEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Reply>}
 *     A native promise that resolves to the response
 */
proto.matcha.forgotPasswordPromiseClient.prototype.sendEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.forgotPassword/sendEmail',
      request,
      metadata || {},
      methodDescriptor_forgotPassword_sendEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.resetPassRequest,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_forgotPassword_resetPassword = new grpc.web.MethodDescriptor(
  '/matcha.forgotPassword/resetPassword',
  grpc.web.MethodType.UNARY,
  proto.matcha.resetPassRequest,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.resetPassRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.resetPassRequest,
 *   !proto.matcha.Reply>}
 */
const methodInfo_forgotPassword_resetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.resetPassRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.resetPassRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.forgotPasswordClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.forgotPassword/resetPassword',
      request,
      metadata || {},
      methodDescriptor_forgotPassword_resetPassword,
      callback);
};


/**
 * @param {!proto.matcha.resetPassRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Reply>}
 *     A native promise that resolves to the response
 */
proto.matcha.forgotPasswordPromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.forgotPassword/resetPassword',
      request,
      metadata || {},
      methodDescriptor_forgotPassword_resetPassword);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.matcha.createAccountClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.matcha.createAccountPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.createRequest,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_createAccount_create = new grpc.web.MethodDescriptor(
  '/matcha.createAccount/create',
  grpc.web.MethodType.UNARY,
  proto.matcha.createRequest,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.createRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.createRequest,
 *   !proto.matcha.Reply>}
 */
const methodInfo_createAccount_create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.createRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.createRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.createAccountClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.createAccount/create',
      request,
      metadata || {},
      methodDescriptor_createAccount_create,
      callback);
};


/**
 * @param {!proto.matcha.createRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Reply>}
 *     A native promise that resolves to the response
 */
proto.matcha.createAccountPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.createAccount/create',
      request,
      metadata || {},
      methodDescriptor_createAccount_create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.verifyRequest,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_createAccount_verify = new grpc.web.MethodDescriptor(
  '/matcha.createAccount/verify',
  grpc.web.MethodType.UNARY,
  proto.matcha.verifyRequest,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.verifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.verifyRequest,
 *   !proto.matcha.Reply>}
 */
const methodInfo_createAccount_verify = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.verifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.verifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.createAccountClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.createAccount/verify',
      request,
      metadata || {},
      methodDescriptor_createAccount_verify,
      callback);
};


/**
 * @param {!proto.matcha.verifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Reply>}
 *     A native promise that resolves to the response
 */
proto.matcha.createAccountPromiseClient.prototype.verify =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.createAccount/verify',
      request,
      metadata || {},
      methodDescriptor_createAccount_verify);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.matcha.AccountClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.matcha.AccountPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.empty,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_Account_test2 = new grpc.web.MethodDescriptor(
  '/matcha.Account/test2',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.matcha.empty,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.empty,
 *   !proto.matcha.Reply>}
 */
const methodInfo_Account_test2 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.test2 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/matcha.Account/test2',
      request,
      metadata || {},
      methodDescriptor_Account_test2);
};


/**
 * @param {!proto.matcha.empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountPromiseClient.prototype.test2 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/matcha.Account/test2',
      request,
      metadata || {},
      methodDescriptor_Account_test2);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.userID,
 *   !proto.matcha.User>}
 */
const methodDescriptor_Account_getUser = new grpc.web.MethodDescriptor(
  '/matcha.Account/getUser',
  grpc.web.MethodType.UNARY,
  proto.matcha.userID,
  proto.matcha.User,
  /**
   * @param {!proto.matcha.userID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.userID,
 *   !proto.matcha.User>}
 */
const methodInfo_Account_getUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.User,
  /**
   * @param {!proto.matcha.userID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.User.deserializeBinary
);


/**
 * @param {!proto.matcha.userID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.Account/getUser',
      request,
      metadata || {},
      methodDescriptor_Account_getUser,
      callback);
};


/**
 * @param {!proto.matcha.userID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.User>}
 *     A native promise that resolves to the response
 */
proto.matcha.AccountPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.Account/getUser',
      request,
      metadata || {},
      methodDescriptor_Account_getUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.imageRequest,
 *   !proto.matcha.imageData>}
 */
const methodDescriptor_Account_getImages = new grpc.web.MethodDescriptor(
  '/matcha.Account/getImages',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.matcha.imageRequest,
  proto.matcha.imageData,
  /**
   * @param {!proto.matcha.imageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.imageData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.imageRequest,
 *   !proto.matcha.imageData>}
 */
const methodInfo_Account_getImages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.imageData,
  /**
   * @param {!proto.matcha.imageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.imageData.deserializeBinary
);


/**
 * @param {!proto.matcha.imageRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.imageData>}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.getImages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/matcha.Account/getImages',
      request,
      metadata || {},
      methodDescriptor_Account_getImages);
};


/**
 * @param {!proto.matcha.imageRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.imageData>}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountPromiseClient.prototype.getImages =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/matcha.Account/getImages',
      request,
      metadata || {},
      methodDescriptor_Account_getImages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.User,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_Account_updateUser = new grpc.web.MethodDescriptor(
  '/matcha.Account/updateUser',
  grpc.web.MethodType.UNARY,
  proto.matcha.User,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.User,
 *   !proto.matcha.Reply>}
 */
const methodInfo_Account_updateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.updateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.Account/updateUser',
      request,
      metadata || {},
      methodDescriptor_Account_updateUser,
      callback);
};


/**
 * @param {!proto.matcha.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Reply>}
 *     A native promise that resolves to the response
 */
proto.matcha.AccountPromiseClient.prototype.updateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.Account/updateUser',
      request,
      metadata || {},
      methodDescriptor_Account_updateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.verifyRequest,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_Account_verifyNewEmail = new grpc.web.MethodDescriptor(
  '/matcha.Account/verifyNewEmail',
  grpc.web.MethodType.UNARY,
  proto.matcha.verifyRequest,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.verifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.verifyRequest,
 *   !proto.matcha.Reply>}
 */
const methodInfo_Account_verifyNewEmail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.verifyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.verifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.verifyNewEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.Account/verifyNewEmail',
      request,
      metadata || {},
      methodDescriptor_Account_verifyNewEmail,
      callback);
};


/**
 * @param {!proto.matcha.verifyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Reply>}
 *     A native promise that resolves to the response
 */
proto.matcha.AccountPromiseClient.prototype.verifyNewEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.Account/verifyNewEmail',
      request,
      metadata || {},
      methodDescriptor_Account_verifyNewEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.imageData,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_Account_updateImage = new grpc.web.MethodDescriptor(
  '/matcha.Account/updateImage',
  grpc.web.MethodType.UNARY,
  proto.matcha.imageData,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.imageData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.imageData,
 *   !proto.matcha.Reply>}
 */
const methodInfo_Account_updateImage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.imageData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.imageData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.updateImage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.Account/updateImage',
      request,
      metadata || {},
      methodDescriptor_Account_updateImage,
      callback);
};


/**
 * @param {!proto.matcha.imageData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Reply>}
 *     A native promise that resolves to the response
 */
proto.matcha.AccountPromiseClient.prototype.updateImage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.Account/updateImage',
      request,
      metadata || {},
      methodDescriptor_Account_updateImage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.browseRequest,
 *   !proto.matcha.User>}
 */
const methodDescriptor_Account_feed = new grpc.web.MethodDescriptor(
  '/matcha.Account/feed',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.matcha.browseRequest,
  proto.matcha.User,
  /**
   * @param {!proto.matcha.browseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.browseRequest,
 *   !proto.matcha.User>}
 */
const methodInfo_Account_feed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.User,
  /**
   * @param {!proto.matcha.browseRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.User.deserializeBinary
);


/**
 * @param {!proto.matcha.browseRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.User>}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.feed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/matcha.Account/feed',
      request,
      metadata || {},
      methodDescriptor_Account_feed);
};


/**
 * @param {!proto.matcha.browseRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.User>}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountPromiseClient.prototype.feed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/matcha.Account/feed',
      request,
      metadata || {},
      methodDescriptor_Account_feed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.loginRequest,
 *   !proto.matcha.Session>}
 */
const methodDescriptor_Account_loginUser = new grpc.web.MethodDescriptor(
  '/matcha.Account/loginUser',
  grpc.web.MethodType.UNARY,
  proto.matcha.loginRequest,
  proto.matcha.Session,
  /**
   * @param {!proto.matcha.loginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Session.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.loginRequest,
 *   !proto.matcha.Session>}
 */
const methodInfo_Account_loginUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Session,
  /**
   * @param {!proto.matcha.loginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Session.deserializeBinary
);


/**
 * @param {!proto.matcha.loginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.loginUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.Account/loginUser',
      request,
      metadata || {},
      methodDescriptor_Account_loginUser,
      callback);
};


/**
 * @param {!proto.matcha.loginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Session>}
 *     A native promise that resolves to the response
 */
proto.matcha.AccountPromiseClient.prototype.loginUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.Account/loginUser',
      request,
      metadata || {},
      methodDescriptor_Account_loginUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.userID,
 *   !proto.matcha.likedStatus>}
 */
const methodDescriptor_Account_getLikedStatus = new grpc.web.MethodDescriptor(
  '/matcha.Account/getLikedStatus',
  grpc.web.MethodType.UNARY,
  proto.matcha.userID,
  proto.matcha.likedStatus,
  /**
   * @param {!proto.matcha.userID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.likedStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.userID,
 *   !proto.matcha.likedStatus>}
 */
const methodInfo_Account_getLikedStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.likedStatus,
  /**
   * @param {!proto.matcha.userID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.likedStatus.deserializeBinary
);


/**
 * @param {!proto.matcha.userID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.likedStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.likedStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.getLikedStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.Account/getLikedStatus',
      request,
      metadata || {},
      methodDescriptor_Account_getLikedStatus,
      callback);
};


/**
 * @param {!proto.matcha.userID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.likedStatus>}
 *     A native promise that resolves to the response
 */
proto.matcha.AccountPromiseClient.prototype.getLikedStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.Account/getLikedStatus',
      request,
      metadata || {},
      methodDescriptor_Account_getLikedStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.userID,
 *   !proto.matcha.likedStatus>}
 */
const methodDescriptor_Account_likeUser = new grpc.web.MethodDescriptor(
  '/matcha.Account/likeUser',
  grpc.web.MethodType.UNARY,
  proto.matcha.userID,
  proto.matcha.likedStatus,
  /**
   * @param {!proto.matcha.userID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.likedStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.userID,
 *   !proto.matcha.likedStatus>}
 */
const methodInfo_Account_likeUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.likedStatus,
  /**
   * @param {!proto.matcha.userID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.likedStatus.deserializeBinary
);


/**
 * @param {!proto.matcha.userID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.likedStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.likedStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.likeUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.Account/likeUser',
      request,
      metadata || {},
      methodDescriptor_Account_likeUser,
      callback);
};


/**
 * @param {!proto.matcha.userID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.likedStatus>}
 *     A native promise that resolves to the response
 */
proto.matcha.AccountPromiseClient.prototype.likeUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.Account/likeUser',
      request,
      metadata || {},
      methodDescriptor_Account_likeUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.userID,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_Account_blockUser = new grpc.web.MethodDescriptor(
  '/matcha.Account/blockUser',
  grpc.web.MethodType.UNARY,
  proto.matcha.userID,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.userID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.userID,
 *   !proto.matcha.Reply>}
 */
const methodInfo_Account_blockUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.userID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.userID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.blockUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.Account/blockUser',
      request,
      metadata || {},
      methodDescriptor_Account_blockUser,
      callback);
};


/**
 * @param {!proto.matcha.userID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Reply>}
 *     A native promise that resolves to the response
 */
proto.matcha.AccountPromiseClient.prototype.blockUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.Account/blockUser',
      request,
      metadata || {},
      methodDescriptor_Account_blockUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.matcha.testing,
 *   !proto.matcha.Reply>}
 */
const methodDescriptor_Account_test = new grpc.web.MethodDescriptor(
  '/matcha.Account/test',
  grpc.web.MethodType.UNARY,
  proto.matcha.testing,
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.testing} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.matcha.testing,
 *   !proto.matcha.Reply>}
 */
const methodInfo_Account_test = new grpc.web.AbstractClientBase.MethodInfo(
  proto.matcha.Reply,
  /**
   * @param {!proto.matcha.testing} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.matcha.Reply.deserializeBinary
);


/**
 * @param {!proto.matcha.testing} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.matcha.Reply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.matcha.Reply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.matcha.AccountClient.prototype.test =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/matcha.Account/test',
      request,
      metadata || {},
      methodDescriptor_Account_test,
      callback);
};


/**
 * @param {!proto.matcha.testing} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.matcha.Reply>}
 *     A native promise that resolves to the response
 */
proto.matcha.AccountPromiseClient.prototype.test =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/matcha.Account/test',
      request,
      metadata || {},
      methodDescriptor_Account_test);
};


module.exports = proto.matcha;

