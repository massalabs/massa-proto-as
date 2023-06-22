// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader, Protobuf } from "as-proto/assembly";
import { RespResult } from "./RespResult";
import { Error } from "./Error";

export class AbiResponse {
  static encode(message: AbiResponse, writer: Writer): void {
    const res = message.res;
    if (res !== null) {
      writer.uint32(10);
      writer.fork();
      RespResult.encode(res, writer);
      writer.ldelim();
    }

    const error = message.error;
    if (error !== null) {
      writer.uint32(18);
      writer.fork();
      Error.encode(error, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): AbiResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new AbiResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.res = RespResult.decode(reader, reader.uint32());
          break;

        case 2:
          message.error = Error.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  res: RespResult | null;
  error: Error | null;

  constructor(res: RespResult | null = null, error: Error | null = null) {
    this.res = res;
    this.error = error;
  }
}

export function encodeAbiResponse(message: AbiResponse): Uint8Array {
  return Protobuf.encode(message, AbiResponse.encode);
}

export function decodeAbiResponse(buffer: Uint8Array): AbiResponse {
  return Protobuf.decode<AbiResponse>(buffer, AbiResponse.decode);
}
