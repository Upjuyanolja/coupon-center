/* eslint-disable @typescript-eslint/no-var-requires */
const JSDOMEnvironment = require('jest-environment-jsdom').default; // or import JSDOMEnvironment from 'jest-environment-jsdom' if you are using ESM modules
const FileMock = require('./src/mocks/fileMock');
class JSDOMEnvironmentExtended extends JSDOMEnvironment {
  constructor(...args) {
    super(...args);

    this.global.ReadableStream = ReadableStream;
    this.global.TextDecoder = TextDecoder;
    this.global.TextEncoder = TextEncoder;

    this.global.Blob = Blob;
    this.global.File = FileMock;
    this.global.Headers = Headers;
    this.global.FormData = FormData;
    this.global.Request = Request;
    this.global.Response = Response;
    this.global.Request = Request;
    this.global.Response = Response;
    this.global.fetch = fetch;
    this.global.structuredClone = structuredClone;
  }
}

module.exports = JSDOMEnvironmentExtended;
